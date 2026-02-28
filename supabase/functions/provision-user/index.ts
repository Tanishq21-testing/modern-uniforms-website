import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Payload {
  email: string;
  password?: string;
  company_name?: string;
  add_company_mapping_only?: boolean;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Authenticate the caller
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    // Verify caller identity
    const authClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } }
    });

    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await authClient.auth.getClaims(token);
    if (claimsError || !claimsData?.claims) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const callerId = claimsData.claims.sub;

    // Check if the caller is an admin (is_master = true)
    const adminClient = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });

    const { data: callerProfile, error: profileErr } = await adminClient
      .from('profiles')
      .select('is_master')
      .eq('id', callerId)
      .single();

    if (profileErr || !callerProfile?.is_master) {
      return new Response(JSON.stringify({ error: 'Forbidden: admin access required' }), { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Process the request
    const body = (await req.json()) as Payload;
    const { email, password, company_name, add_company_mapping_only } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'email is required' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Find the company id if provided
    let companyId: string | null = null;
    if (company_name) {
      const { data: company, error: companyErr } = await adminClient
        .from('companies')
        .select('id')
        .eq('name', company_name)
        .maybeSingle();

      if (companyErr) {
        console.error('Company lookup error:', companyErr);
        return new Response(JSON.stringify({ error: 'Company lookup failed' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      if (!company) {
        return new Response(JSON.stringify({ error: 'Company not found' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      companyId = company.id;
    }

    // Check if user exists
    const { data: existingUsers, error: listErr } = await adminClient.auth.admin.listUsers({ page: 1, perPage: 200 });
    if (listErr) throw listErr;
    const existing = existingUsers.users.find((u: any) => u.email?.toLowerCase() === email.toLowerCase());

    let userId: string;

    if (!existing && !add_company_mapping_only) {
      const { data: created, error: createErr } = await adminClient.auth.admin.createUser({
        email,
        password: password || crypto.randomUUID(),
        email_confirm: true,
      });
      if (createErr) throw createErr;
      userId = created.user!.id;
    } else if (existing) {
      userId = existing.id;
    } else {
      return new Response(JSON.stringify({ error: 'User does not exist. Provide a password to create.' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Ensure profile exists
    const { error: profileUpsertErr } = await adminClient
      .from('profiles')
      .upsert({ id: userId, email }, { onConflict: 'id' });
    if (profileUpsertErr) throw profileUpsertErr;

    if (companyId && !add_company_mapping_only) {
      const { error: profileUpdateErr } = await adminClient
        .from('profiles')
        .update({ company_id: companyId })
        .eq('id', userId);
      if (profileUpdateErr) throw profileUpdateErr;
    }

    if (companyId) {
      const { error: mapErr } = await adminClient
        .from('user_companies')
        .insert({ user_id: userId, company_id: companyId })
        .select()
        .single();
      if (mapErr && mapErr.code !== '23505') {
        console.warn('Mapping insert error (ignored if duplicate):', mapErr.message);
      }
    }

    return new Response(JSON.stringify({ ok: true, user_id: userId, company_id: companyId }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
