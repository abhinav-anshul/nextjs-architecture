import '../../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
// const queryClient = new QueryClient()
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <QueryClientProvider client={queryClient}> */}
      <body className={inter.className}>{children}</body>
      {/* </QueryClientProvider> */}
    </html>
  );
}
