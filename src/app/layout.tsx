import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Blog Evandro Calado',
  description: 'Blog pessoal de desenvolvedor frontend',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
