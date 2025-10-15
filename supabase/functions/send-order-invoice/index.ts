import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrderItem {
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

interface OrderInvoiceRequest {
  order_id: string;
  order_number: string;
  customer_email: string;
  customer_name: string;
  company_name: string;
  order_items: OrderItem[];
  total_amount: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      order_number, 
      customer_email, 
      customer_name,
      company_name,
      order_items, 
      total_amount 
    }: OrderInvoiceRequest = await req.json();

    console.log('Processing order invoice:', { order_number, customer_email, company_name });

    // Generate invoice HTML
    const invoiceHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { background: #1e3a8a; color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .info-section { margin: 30px 0; padding: 20px; background: #f8f9fa; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th { background: #1e3a8a; color: white; padding: 12px; text-align: left; }
            td { padding: 12px; border-bottom: 1px solid #ddd; }
            .total-row { background: #f0f0f0; font-weight: bold; font-size: 18px; }
            .footer { margin-top: 40px; padding: 20px; background: #f8f9fa; text-align: center; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ORDER INVOICE</h1>
              <p>UniformConnect UAE</p>
            </div>
            
            <div class="info-section">
              <h2>Order Details</h2>
              <p><strong>Order Number:</strong> ${order_number}</p>
              <p><strong>Customer:</strong> ${customer_name}</p>
              <p><strong>Company:</strong> ${company_name}</p>
              <p><strong>Email:</strong> ${customer_email}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>

            <h2>Order Items</h2>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${order_items.map(item => `
                  <tr>
                    <td>${item.product_name}</td>
                    <td>${item.quantity}</td>
                    <td>AED ${item.unit_price.toFixed(2)}</td>
                    <td>AED ${item.total_price.toFixed(2)}</td>
                  </tr>
                `).join('')}
                <tr class="total-row">
                  <td colspan="3">TOTAL AMOUNT</td>
                  <td>AED ${total_amount.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <div class="footer">
              <p>Thank you for your order!</p>
              <p>For any questions, please contact us at tanishqpremchand@gmail.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "UniformConnect <no-reply@uniformconnectuae.com>",
      to: ["tanishqpremchand@gmail.com"],
      reply_to: ["tanishqpremchand@gmail.com"],
      subject: `New Order: ${order_number} - ${company_name}`,
      html: invoiceHtml,
    });

    console.log("Admin email sent successfully:", adminEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "UniformConnect <no-reply@uniformconnectuae.com>",
      to: [customer_email],
      reply_to: ["tanishqpremchand@gmail.com"],
      subject: `Order Confirmation: ${order_number}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #1e3a8a;">Order Confirmed!</h1>
              <p>Dear ${customer_name},</p>
              <p>Thank you for your order! We have received your order <strong>${order_number}</strong> and it is being processed.</p>
              <p>Order Total: <strong>AED ${total_amount.toFixed(2)}</strong></p>
              <p>We will contact you shortly to confirm delivery details.</p>
              <p>Best regards,<br>UniformConnect Team</p>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Customer confirmation email sent successfully:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        admin_email: adminEmailResponse,
        customer_email: customerEmailResponse 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-order-invoice function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);