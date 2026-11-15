import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { ContactModal } from "@/components/ContactModal";
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
  title: "Md Arif Ansari · Software Engineer & Full-Stack Developer",
  description: "Software Engineer specializing in scalable full-stack web applications, distributed APIs, and clean system architecture. Available for global remote & on-site engineering opportunities.",
  keywords: [
    "Md Arif Ansari",
    "Software Engineer",
    "Full Stack Developer",
    "ASP.NET Core",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Docker",
    "Distributed Systems",
    "Bengaluru",
    "Global Remote"
  ],
  authors: [{ name: "Md Arif Ansari", url: "https://github.com/mdarifanwar" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Md Arif Ansari · Software Engineer & Full-Stack Developer",
    description: "Building scalable distributed systems, robust APIs, and modern digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Arif Ansari · Software Engineer",
    description: "Building scalable distributed systems, robust APIs, and modern digital experiences.",
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
          <ContactModalProvider>
            <CustomCursor />
            <Navbar />
            <FixedRail />
            <ContactModal />
            {children}
          </ContactModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}