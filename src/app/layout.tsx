import { Providers } from '@/providers';

import type { Metadata } from 'next';

// eslint-disable-next-line import/no-unassigned-import
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'My App name',
  description: 'My App description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>{children}</Providers>
    </html>
  );
}
