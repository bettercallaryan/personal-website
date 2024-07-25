import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { DESCRIPTION, KEYWORDS, TITLE } from "@/lib/constants";

import { ThemeProvider } from "@/components/theme-provider"

const schibstedGrotesk = Schibsted_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASEURL || "https://alvaro10.vercel.app"
  ),
  keywords: KEYWORDS,
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: process.env.NEXT_PUBLIC_BASEURL || "https://alvaro10.vercel.app",
    siteName: TITLE,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 627,
      },
    ],
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={schibstedGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
    </html>
  );
}
