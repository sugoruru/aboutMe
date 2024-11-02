import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "About Ruku",
  description: "自己紹介ページです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
