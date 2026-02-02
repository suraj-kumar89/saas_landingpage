'use client'
import { useEffect } from 'react'

export default function DisableHubSpotChat() {
  useEffect(() => {
    const interval = setInterval(() => {
      const w = window as any

      if (w.HubSpotConversations) {
        w.HubSpotConversations.widget.remove()
        clearInterval(interval)
      }
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return null
}
