import { Header } from '@/_components'
import './globals.css'
import Footer from '@/_components/footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts */}
          {/* Favicon */}
        <link rel="icon" href="/svgfavicon.svg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {/*<noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTWQZBK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>*/}

        <div className="flex flex-col flex-1 relative">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
