import { Header } from '@/_components'
import './globals.css'
import Footer from '@/_components/footer/Footer'
import WhatsAppButton from './_components/WhatsApp'
import DisableHubSpotChat from './_components/DisableHubsport'

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
        {/* Google Tag Manager */}
        <script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M2HQ4L2K');
          `,
          }}
        />
      </head>
      <body>
        <div className="flex flex-col flex-1 relative">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer/>
        </div>
         <WhatsAppButton />
         <DisableHubSpotChat/>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2HQ4L2K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
       
      </body>
    </html>
  )
}
