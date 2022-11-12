import './globals.css';

import { Be_Vietnam_Pro } from '@next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={beVietnamPro.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}
