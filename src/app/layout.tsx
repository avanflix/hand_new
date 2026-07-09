import type { Metadata } from "next";
import "./globals.css";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";
const siteUrl = "https://www.handngo.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "HAND NGO | Human Action for Need and Development",
    template: "%s | HAND NGO",
  },

  description:
    "HAND NGO is a nonprofit organization dedicated to empowering communities through climate action, sustainable livelihoods, education, women empowerment, healthcare, and community development across India.",

  applicationName: "HAND NGO",

  authors: [
    {
      name: "HAND NGO",
      url: siteUrl,
    },
  ],

  creator: "HAND NGO",
  publisher: "HAND NGO",

  category: "Nonprofit Organization",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "HAND NGO | Human Action for Need and Development",
    description:
      "Empowering communities through climate action, sustainable livelihoods, education, women empowerment, healthcare, and community development.",

    url: siteUrl,
    siteName: "HAND NGO",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HAND NGO - Human Action for Need and Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HAND NGO",
    description:
      "Empowering communities through climate action, education, women empowerment and sustainable development.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-96x96.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <WebsiteSchema />
        {children}
      </body>
    </html>
  );
}
