'use client'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center">
      {/* Wave */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />

      {/* Button */}
      <a
        href="https://wa.me/918287124652"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-18 w-18 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#00AD40] shadow-2xl hover:scale-110 transition"
      >
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="h-14 w-14 sm:h-8 sm:w-8"
        >
          <path d="M16 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.667.787 5.16 2.133 7.28L2.667 29.333l6.24-2.053A13.267 13.267 0 0 0 16 29.333c7.36 0 13.333-5.973 13.333-13.333S23.36 2.667 16 2.667zm6.773 18.907c-.28.787-1.653 1.507-2.28 1.6-.587.08-1.333.12-2.16-.133-.507-.16-1.16-.373-2-.747-3.52-1.52-5.813-5.067-5.987-5.307-.173-.24-1.44-1.92-1.44-3.653 0-1.733.907-2.587 1.227-2.947.32-.36.693-.453.92-.453.227 0 .453 0 .653.013.213.013.493-.08.773.587.28.667.947 2.307 1.027 2.467.08.16.133.347.027.56-.107.213-.16.347-.32.533-.16.187-.333.417-.48.56-.16.16-.333.333-.147.653.187.32.827 1.36 1.773 2.2 1.213 1.067 2.24 1.4 2.56 1.56.32.16.507.133.693-.08.187-.213.787-.92.987-1.24.2-.32.4-.267.667-.16.267.107 1.693.8 1.987.947.293.147.493.227.567.347.08.12.08.707-.2 1.493z"/>
        </svg>
      </a>
    </div>
  )
}
