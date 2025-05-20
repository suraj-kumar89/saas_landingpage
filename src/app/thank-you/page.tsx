// pages/book-demo.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function BookDemo() {
  const router = useRouter()

  useEffect(() => {
    // Inject Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Listen for the calendly scheduled event
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        router.push('/meeting-booked')
      }
    }

    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
    }
  }, [router])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black p-4">
      <h1 className='text-white text-4xl lg:text-6xl font-semibold text-center pt-20 pb-10 leading-16'>Thank You! Your Next Step: <br />Book a Call With Me</h1>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/shitanshu-digital/saas-performance-marketing"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
