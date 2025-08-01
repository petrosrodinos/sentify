import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import QueryProvider from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentify - AI-Powered Financial Intelligence",
  description: "Real-time monitoring of Twitter, Reddit, and news sites. AI-powered sentiment analysis delivers instant alerts about your portfolio assets.",
  keywords: ["Sentify", "AI", "Financial Intelligence", "Twitter", "Reddit", "News", "Portfolio", "Alerts", "Sentiment Analysis"],
  creator: "Sentify",
  openGraph: {
    title: "Sentify - AI-Powered Financial Intelligence",
    description: "Real-time monitoring of Twitter, Reddit, and news sites. AI-powered sentiment analysis delivers instant alerts about your portfolio assets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        <PostHogProvider>
          <QueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </QueryProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
