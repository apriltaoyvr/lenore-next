import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Bricolage_Grotesque } from 'next/font/google';
import type { ReactNode } from 'react';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={bricolage.className} suppressHydrationWarning>
      <body className='flex min-h-screen flex-col'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
