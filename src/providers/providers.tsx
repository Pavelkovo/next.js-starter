import { Inter } from 'next/font/google';

import QueryProvider from './query-provider';

const inter = Inter({ subsets: ['latin'] });

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryProvider>
      <body className={inter.className}>{children}</body>
    </QueryProvider>
  );
};

export default Providers;
