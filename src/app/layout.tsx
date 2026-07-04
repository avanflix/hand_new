import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "HAND - Human Action for Need and Development",
  description: "Making a difference in rural communities through livelihood, climate action, and education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        {children}
      </body>
    </html>
  );
}
