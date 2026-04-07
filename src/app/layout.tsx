import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://stratastrengthlab.com'),
  title: {
    default: 'Strata Strength Lab | Ninja Warrior & Strength Training in Oroville, CA',
    template: '%s | Strata Strength Lab',
  },
  description:
    'Strata Strength Lab offers Ninja Warrior obstacle training, climbing wall classes, and the Forge Protocol strength system for toddlers through teens in Oroville, CA. Book your free trial.',
  keywords: [
    'Ninja Warrior training Oroville CA',
    'obstacle training gym Oroville',
    'youth strength training Oroville',
    'youth strength and conditioning Oroville',
    'kids obstacle course training',
    'grip strength and climbing training',
    'Forge Protocol strength training',
    'climbing wall gym Oroville',
    'toddler fitness classes Oroville',
    'Strata Strength Lab',
    'teen strength training Oroville',
    'youth fitness Butte County',
  ],
  openGraph: {
    title: 'Strata Strength Lab | Ninja Warrior & Strength Training in Oroville, CA',
    description:
      'Ninja Warrior obstacle training, climbing wall development, and the Forge Protocol strength system for toddlers through teens in Oroville, CA.',
    url: 'https://stratastrengthlab.com',
    siteName: 'Strata Strength Lab',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Strata Strength Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strata Strength Lab | Youth Strength & Fitness in Oroville, CA',
    description:
      'Building strong, confident, resilient young athletes in Oroville, CA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://stratastrengthlab.com',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Strata Strength Lab',
  description:
    'Ninja Warrior obstacle training, climbing wall development, and the Forge Protocol structured strength system for toddlers through teens in Oroville, CA.',
  url: 'https://stratastrengthlab.com',
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1726 Montgomery Street, Unit 8',
    addressLocality: 'Oroville',
    addressRegion: 'CA',
    postalCode: '95965',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.5138,
    longitude: -121.5564,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '15:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  image: 'https://stratastrengthlab.com/images/logo.png',
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
