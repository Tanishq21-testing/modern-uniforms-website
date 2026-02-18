
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received email request");
    const { name, email, company, phone, employeeCount, message, formType = "Consultation Form", pageSource } = await req.json();
    
    const subjectPageName = pageSource || formType;
    const subject = `New Lead – ${subjectPageName}`;

    console.log("Email Configuration:", {
      from: "UniformConnect <no-reply@uniformconnectuae.com>",
      to: "tanishqpremchand@gmail.com",
      subject,
      sender_email: email,
      sender_name: name,
    });

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

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
