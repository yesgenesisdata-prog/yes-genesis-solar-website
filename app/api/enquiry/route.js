import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      enquiryType,
      message,
      website,
      page,
    } = body;

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({
        success: true,
      });
    }

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name and phone number are required.',
        },
        {
          status: 400,
        }
      );
    }

    const googleScriptUrl =
      process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!googleScriptUrl) {
      console.error(
        'GOOGLE_APPS_SCRIPT_URL is not configured.'
      );

      return NextResponse.json(
        {
          success: false,
          message: 'Enquiry service is not configured.',
        },
        {
          status: 500,
        }
      );
    }

    const response = await fetch(
      googleScriptUrl,
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name,
          phone,
          email: email || '',
          enquiryType:
            enquiryType || 'General Enquiry',
          message: message || '',
          page: page || '',
          submittedAt: new Date().toISOString(),
        }),

        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(
        `Google Apps Script returned ${response.status}`
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(
      'ENQUIRY_SUBMISSION_ERROR:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          'Unable to submit your enquiry right now.',
      },
      {
        status: 500,
      }
    );
  }
}