import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masaki Aota | 機械学習エンジニア",
  description: "Kaggle Master・AtCoder水色の機械学習エンジニア。生存分析、自然言語処理、画像処理の専門家として年間数千万円規模のコスト削減実績。Python、PyTorch、AWS・GCP認定取得。",
  keywords: ["機械学習", "データサイエンス", "Python", "Kaggle", "AtCoder", "自然言語処理", "画像処理", "生存分析", "PyTorch", "AWS", "GCP", "機械学習エンジニア", "ポートフォリオ"],
  authors: [{ name: "Masaki Aota" }],
  creator: "Masaki Aota",
  publisher: "Masaki Aota",
  robots: "index, follow",
  manifest: '/manifest.json',
  metadataBase: new URL('https://masakiaota.pages.dev'),
  alternates: {
    canonical: 'https://masakiaota.pages.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://masakiaota.pages.dev',
    siteName: 'Masaki Aota Portfolio',
    title: 'Masaki Aota | 機械学習エンジニア',
    description: 'Kaggle Master・AtCoder水色の機械学習エンジニア。生存分析、自然言語処理、画像処理の専門家として年間数千万円規模のコスト削減実績。Python、PyTorch、AWS・GCP認定取得。',
    images: [
      {
        url: '/profile-192.webp',
        width: 192,
        height: 192,
        alt: 'Masaki Aota - Machine Learning Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Masaki Aota | 機械学習エンジニア',
    description: 'Kaggle Master・AtCoder水色の機械学習エンジニア。年間数千万円規模のコスト削減実績を持つ専門家のポートフォリオ。',
    images: ['/profile-192.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" type="image/png" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
