import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const play = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-play', display: 'swap' });
export const metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description, keywords: site.keywords,
  authors: [{ name: site.name }], alternates: { canonical: '/' },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name, type: 'website', images: [{ url: '/hero.jpg', width: 900, height: 1125, alt: site.name }] },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1 } },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#14130a' };
const ld = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, alternateName: 'محمد أبو المعاطي', jobTitle: 'Film Director & Screenwriter', url: site.url, image: site.url + '/hero.jpg', email: site.email, knowsAbout: ['Commercial directing', 'Fashion film', 'Screenwriting', 'Talent casting'], workLocation: { '@type': 'Place', name: 'Cairo, Egypt' } };
export default function RootLayout({ children }) {
  return (<html lang="en" className={`${inter.variable} ${play.variable}`}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>);
}
