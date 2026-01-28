import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { naam, telefoon, email, plaats, dienst, bericht } = body;

    // Validate required fields
    if (!naam || !telefoon || !email || !plaats || !dienst || !bericht) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ongeldig e-mailadres' },
        { status: 400 }
      );
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'E-mail service is niet geconfigureerd' },
        { status: 500 }
      );
    }

    // Initialize Resend only when needed (lazy loading to avoid build errors)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Weekend Klussen Offerte <noreply@weekend-klussen.nl>',
      to: ['info@weekend-klussen.nl'],
      replyTo: email,
      subject: `Nieuwe offerteaanvraag van ${naam}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #5f3813;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background-color: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #5f3813;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                padding: 10px;
                background-color: white;
                border-radius: 4px;
                border: 1px solid #e5e7eb;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Nieuwe Offerteaanvraag</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Naam:</span>
                <div class="value">${naam}</div>
              </div>
              <div class="field">
                <span class="label">Telefoon:</span>
                <div class="value">${telefoon}</div>
              </div>
              <div class="field">
                <span class="label">E-mail:</span>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <span class="label">Woonplaats / Regio:</span>
                <div class="value">${plaats}</div>
              </div>
              <div class="field">
                <span class="label">Gewenste Dienst:</span>
                <div class="value">${dienst}</div>
              </div>
              <div class="field">
                <span class="label">Projectomschrijving:</span>
                <div class="value">${bericht.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>Deze e-mail is verzonden via het offerteformulier op weekend-klussen.nl</p>
                <p>U kunt direct antwoorden op deze e-mail om contact op te nemen met ${naam}</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nieuwe Offerteaanvraag

Naam: ${naam}
Telefoon: ${telefoon}
E-mail: ${email}
Woonplaats / Regio: ${plaats}
Gewenste Dienst: ${dienst}

Projectomschrijving:
${bericht}

---
Deze e-mail is verzonden via het offerteformulier op weekend-klussen.nl
U kunt direct antwoorden op deze e-mail om contact op te nemen met ${naam}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Er is een fout opgetreden bij het verzenden van de e-mail' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Offerteaanvraag succesvol verzonden',
        id: data?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing offerte request:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verwerken van uw aanvraag' },
      { status: 500 }
    );
  }
}
