import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.scss";

const mono = Ubuntu_Mono({weight: ["400", "700"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Frontend Developer | Climax Mba",
  description: `Frontend web developer, proficient in TypeScript, Next.js, and Redux, with a solid foundation in React, JavaScript and unit testing.
    Experienced in contributing to open-source projects and collaborating with teams.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
