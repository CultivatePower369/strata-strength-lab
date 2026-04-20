'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import ChatWidget from './ChatWidget'
import TrialModal from './TrialModal'

/**
 * SiteLayout wraps all pages with the shared Header/Footer.
 * Pages added to CLEAN_ROUTES render without any nav or footer
 * so they can be used as focused landing/funnel pages.
 */
const CLEAN_ROUTES = ['/founding-30']

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isClean = CLEAN_ROUTES.some((r) => pathname.startsWith(r))

  if (isClean) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
      <TrialModal />
    </>
  )
}
