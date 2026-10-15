import './globals.css';
import { Inter, Fraunces } from 'next/font/google';
import Kepala from '@/components/Kepala';
import Kaki from '@/components/Kaki';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-fraunces', display: 'swap' });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Tanjung Lengkung","description":"Penginapan kecil di pesisir timur Lombok: Kamar Taman, Suite Teluk, dan Vila Kolam. Cek ketersediaan per malam, tarif akhir pekan, dan pesan tanpa ribet.","url":"https://reservasi-hotel.pintuweb.id","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://reservasi-hotel.pintuweb.id"),
  title: { default: "Tanjung Lengkung — Pesan kamar di ujung teluk", template: "%s — Tanjung Lengkung" },
  description: "Penginapan kecil di pesisir timur Lombok: Kamar Taman, Suite Teluk, dan Vila Kolam. Cek ketersediaan per malam, tarif akhir pekan, dan pesan tanpa ribet.",
  applicationName: "Tanjung Lengkung",
  keywords: ["penginapan Lombok", "reservasi kamar", "vila kolam pribadi", "hotel tepi pantai", "cek ketersediaan kamar"],
  authors: [{ name: "Tanjung Lengkung" }],
  creator: "Tanjung Lengkung",
  publisher: "Tanjung Lengkung",
  alternates: { canonical: "https://reservasi-hotel.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://reservasi-hotel.pintuweb.id",
    siteName: "Tanjung Lengkung",
    title: "Tanjung Lengkung — Pesan kamar di ujung teluk",
    description: "Penginapan kecil di pesisir timur Lombok: Kamar Taman, Suite Teluk, dan Vila Kolam. Cek ketersediaan per malam, tarif akhir pekan, dan pesan tanpa ribet.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Tanjung Lengkung — Pesan kamar di ujung teluk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanjung Lengkung — Pesan kamar di ujung teluk",
    description: "Penginapan kecil di pesisir timur Lombok: Kamar Taman, Suite Teluk, dan Vila Kolam. Cek ketersediaan per malam, tarif akhir pekan, dan pesan tanpa ribet.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = { themeColor: '#0f766e' };

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <Kepala />
        {children}
        <Kaki />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=hotel" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
