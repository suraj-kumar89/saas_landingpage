// pages/book-demo.tsx
'use client'

import { useEffect } from 'react'

export default function BookDemo() {

  useEffect(() => {
    // Inject Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
  })

  return (
    <div className="min-h-screen flex justify-center items-center bg-black p-4">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/shitanshu-digital/saas-discovery-call"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
