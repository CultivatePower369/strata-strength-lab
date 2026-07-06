import Header from './Header'
import Footer from './Footer'
import ChatWidget from './ChatWidget'
import TrialModal from './TrialModal'

/**
 * SiteLayout wraps all pages with the shared Header/Footer.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
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
