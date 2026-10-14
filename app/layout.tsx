import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SPARK | Energy, Snacks & Lab - Energia Pura de Alta Performance',
  description:
    'E-commerce premium da SPARK: energéticos zero açúcar com cafeína natural, taurina e eletrólitos, combos proteicos e edições experimentais SPARK Lab.',
  keywords: ['energético', 'energy drink', 'foco', 'treino', 'e-sports', 'zero açúcar', 'SPARK', 'snacks proteicos'],
  openGraph: {
    title: 'SPARK | Energy Drinks & Lab',
    description: 'Sinta a energia eletrizante. 100% focado, zero açúcar.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-[#050505] text-white selection:bg-[#39FF14] selection:text-black antialiased">
        {children}
      </body>
    </html>
  );
}
