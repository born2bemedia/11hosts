import type { Metadata } from 'next';
import './globals.css';
import 'modern-normalize/modern-normalize.css';
import { Header } from '@/shared/ui/components/header';
import { Footer } from '@/shared/ui/components/footer';
import { Preloader } from '@/shared/ui/components/preloader';

export const metadata: Metadata = {
  title: '11Hosts | Reliable Hosting & Smart Domain Solutions',
  description:
    'Discover 11Hosts, offering fast, secure hosting and smart domain solutions. We provide full control, 24/7 support, and high-speed services to help you launch and grow your online presence.',
  openGraph: {
    title: '11Hosts | Reliable Hosting & Smart Domain Solutions',
    description:
      'Discover 11Hosts, offering fast, secure hosting and smart domain solutions. We provide full control, 24/7 support, and high-speed services to help you launch and grow your online presence.',
    images: [
      {
        url: 'https://11hosts.com/images/meta/md.png',
        width: 1024,
        height: 517,
        alt: '11Hosts Meta Image',
      },
      {
        url: 'https://11hosts.com/images/meta/sm.png',
        width: 500,
        height: 264,
        alt: '11Hosts Meta Image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Preloader />
        <Footer />
      </body>
    </html>
  );
}
