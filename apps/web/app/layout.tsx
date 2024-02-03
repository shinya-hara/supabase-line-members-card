import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LiffProvider } from "~/providers/LiffProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LINE de 会員証",
  description: "あなたの会員証をLINEで管理しましょう",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <LiffProvider liffId={process.env.NEXT_PUBLIC_LIFF_IF}>
          {children}
        </LiffProvider>
      </body>
    </html>
  );
}
