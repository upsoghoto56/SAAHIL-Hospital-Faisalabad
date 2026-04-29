import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Dr. Abeera Ali | Best Gynecologist in Faisalabad | SAAHIL Hospital',
  description: 'Book an appointment with Dr. Abeera Ali, top-rated gynecologist at SAAHIL Hospital Faisalabad. 5-star rated, 265+ reviews, fertility specialist, open 24 hours. Call +92 320 6657377',
  keywords: 'best gynecologist Faisalabad, Dr Abeera Ali, SAAHIL Hospital, fertility doctor Faisalabad, gynecologist near me, online consultation',
  openGraph: {
    title: 'Dr. Abeera Ali | Best Gynecologist in Faisalabad | SAAHIL Hospital',
    description: 'Book an appointment with Dr. Abeera Ali, top-rated gynecologist at SAAHIL Hospital Faisalabad. 5-star rated, 265+ reviews, fertility specialist, open 24 hours. Call +92 320 6657377',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className="font-poppins antialiased text-[#1a1a1a] bg-[#FFF0F3]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
