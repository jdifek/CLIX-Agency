import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CLIX - Modern Web Development Agency',
  description: 'CLIX is a leading web development agency specializing in React, Next.js, TypeScript, and modern backend technologies. We create fast, scalable, and SEO-optimized web applications.',
  keywords: 'CLIX, web development, React, Next.js, TypeScript, PostgreSQL, MySQL, frontend development, backend development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}