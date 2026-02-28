
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .slice(0, 2000);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received email request");
    const body = await req.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const company = sanitize(body.company);
    const phone = sanitize(body.phone);
    const employeeCount = sanitize(body.employeeCount);
    const message = sanitize(body.message);
    const formType = sanitize(body.formType || "Consultation Form");
    const pageSource = sanitize(body.pageSource);

    // Basic validation
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Simple email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const subjectPageName = pageSource || formType;
    const subject = `New Lead – ${subjectPageName}`;

    const emailResponse = await resend.emails.send({
      from: "UniformConnect <no-reply@uniformconnectuae.com>",
      to: ["tanishqpremchand@gmail.com"],
      reply_to: email ? [email] : ["tanishqpremchand@gmail.com"],
      subject,
      html: `
        <h1>New Lead – ${subjectPageName}</h1>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name || 'N/A'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email || 'N/A'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company / School</td><td style="padding:8px;border:1px solid #ddd;">${company || 'N/A'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone || 'N/A'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Employee Count</td><td style="padding:8px;border:1px solid #ddd;">${employeeCount || 'Not specified'}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Page Source</td><td style="padding:8px;border:1px solid #ddd;">${pageSource || formType}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || 'No message'}</td></tr>
        </table>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
