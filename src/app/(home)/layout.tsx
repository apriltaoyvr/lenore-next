import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      className='place-content-center-safe place-items-center-safe'
    >
      {children}
    </HomeLayout>
  );
}

export const metadata: Metadata = {
  title: 'Lenore Thomson Exegesis Wiki',
};
