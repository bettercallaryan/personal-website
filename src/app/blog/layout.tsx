import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";

const schibstedGrotesk = Schibsted_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujeet Gund’s personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={schibstedGrotesk.className}>{children}</body>
    </html>
  );
}