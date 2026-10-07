import '@fontsource-variable/inter';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/data/site';
import ContactModal from '@/components/ContactModal';

const TITLE = 'YES Genesis | Solar & Wind Energy Products';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: { default: TITLE, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
    locale: 'en_IN',
    images: [{ url: '/assets/images/hero.png', width: 1440, height: 680, alt: 'Close-up of solar panels' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#131f45',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <ContactModal />
      </body>
    </html>
  );
}
