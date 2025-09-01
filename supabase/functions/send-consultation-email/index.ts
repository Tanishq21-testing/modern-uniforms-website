
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received email request");
    const { name, email, company, phone, employeeCount, message, formType = "Consultation Form" } = await req.json();
    
    console.log("Email Configuration:", {
      from: "UniformConnect <onboarding@resend.dev>",
      to: "tanishqpremchand@gmail.com",
      sender_email: email,
      sender_name: name,
      formType
    });

    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") || "onboarding@resend.dev";
    const fromName = Deno.env.get("RESEND_FROM_NAME") || "UniformConnect";

    const emailResponse = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: "tanishqpremchand@gmail.com",
      subject: `New ${formType} Submission`,
      html: `
        <h1>New ${formType} Submission Received</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Employee Count:</strong> ${employeeCount || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      reply_to: email ? [email] : undefined,
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
