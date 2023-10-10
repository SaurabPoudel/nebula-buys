import './globals.css';
import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';

import { NavMenu, Providers } from '../components';

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nebula Buys',
  description: 'AI Powered ecommerce website',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={orbitron.className}>
        <Providers>
          <NavMenu />
          <br />
          {children}
        </Providers>
      </body>
    </html>
  );
}
