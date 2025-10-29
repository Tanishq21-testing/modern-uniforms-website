// deno-lint-ignore-file no-explicit-any
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Payload {
  email: string;
  password?: string;
  company_name?: string; // e.g., "Bridge Education"
  add_company_mapping_only?: boolean; // if true, just map existing user to company
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as Payload;
    const { email, password, company_name, add_company_mapping_only } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'email is required' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });

    // Find the company id if provided
    let companyId: string | null = null;
    if (company_name) {
      const { data: company, error: companyErr } = await supabase
        .from('companies')
        .select('id')
        .eq('name', company_name)
        .maybeSingle();

      if (companyErr) {
        console.error('Company lookup error:', companyErr);
        return new Response(JSON.stringify({ error: companyErr.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }

      if (!company) {
        return new Response(JSON.stringify({ error: `Company not found: ${company_name}` }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
      }
      companyId = company.id;
    }

    // Check if user exists
    const { data: existingUsers, error: listErr } = await supabase.auth.admin.listUsers({ page: 1, perPage: 200 });
    if (listErr) throw listErr;
    const existing = existingUsers.users.find((u: any) => u.email?.toLowerCase() === email.toLowerCase());

    let userId: string;

    if (!existing && !add_company_mapping_only) {
      const { data: created, error: createErr } = await supabase.auth.admin.createUser({
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

    // Ensure profile exists (trigger should create it, but upsert defensively)
    const { error: profileUpsertErr } = await supabase
      .from('profiles')
      .upsert({ id: userId, email }, { onConflict: 'id' });
    if (profileUpsertErr) throw profileUpsertErr;

    // If we have a companyId, set as default company on profile (for single-company users)
    if (companyId && !add_company_mapping_only) {
      const { error: profileUpdateErr } = await supabase
        .from('profiles')
        .update({ company_id: companyId })
        .eq('id', userId);
      if (profileUpdateErr) throw profileUpdateErr;
    }

    // Add mapping (if company provided)
    if (companyId) {
      const { error: mapErr } = await supabase
        .from('user_companies')
        .insert({ user_id: userId, company_id: companyId })
        .select()
        .single();
      if (mapErr && mapErr.code !== '23505') { // ignore unique violation
        // Try alternative: ignore if exists
        console.warn('Mapping insert error (ignored if duplicate):', mapErr.message);
      }
    }

    return new Response(JSON.stringify({ ok: true, user_id: userId, company_id: companyId }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Unknown error' }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});