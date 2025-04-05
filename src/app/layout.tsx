import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Bricolage_Grotesque } from 'next/font/google';
import type { ReactNode } from 'react';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={bricolage.variable} suppressHydrationWarning>
      <body className='flex min-h-screen flex-col'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL('https://github.com/apriltaoyvr/lenore-next'),
  description: 'A revival of the original Lenore Thomson Exegesis Wiki',
};
