import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
  const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID

  if (!HUBSPOT_PORTAL_ID || !HUBSPOT_FORM_GUID) {
    return NextResponse.json({ error: 'HubSpot env vars not set' }, { status: 500 })
  }

  const hubspotResponse = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: body.firstname },
          { name: 'email', value: body.email },
          { name: 'website', value: body.website },
          { name: 'services', value: body.services },
          { name: 'growth_blocker', value: body.growth_blocker },
        ],
      }),
    }
  )

  const hubspotResult = await hubspotResponse.json()
  return NextResponse.json(hubspotResult)
}
