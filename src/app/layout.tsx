import type {Metadata} from 'next';
import './globals.css';
import { AppHeader } from '@/components/header';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Luz, Câmera & Vendas',
  description: 'Sua loja de equipamentos de fotografia e vídeo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <AppHeader />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
