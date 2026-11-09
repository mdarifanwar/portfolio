import type { Metadata, Viewport } from "next";
import { Manrope, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FixedRail } from "@/components/FixedRail";
import { Navbar } from "@/components/Navbar";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });

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
      <body className={`${manrope.variable} ${caveat.variable}`}>
        <ThemeProvider>
          <Navbar />
          <FixedRail />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}