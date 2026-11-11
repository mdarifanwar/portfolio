import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FixedRail } from "@/components/FixedRail";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";

const switzer = localFont({
  src: [
    {
      path: "./fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const caveat = localFont({
  src: "./fonts/Caveat.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Arif Ansari | Software Engineer",
  description: "Portfolio of Md Arif Ansari, a computer science student and software developer focused on full-stack development.",
  keywords: ["Md Arif Ansari", "Software Engineer", "Full Stack Developer", "Java", "React", "Spring Boot"],
  authors: [{ name: "Md Arif Ansari" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Md Arif Ansari | Software Engineer",
    description: "Building useful digital experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1117",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${switzer.variable} ${caveat.variable}`}>
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <FixedRail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}