import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DCube Associates | Premier Real Estate Developers in Pune & Sangli",
  description: "Building lasting legacies through uncompromising quality and absolute transparency. DCube Associates develops premium residential and commercial spaces in Maharashtra.",
  keywords: "Real Estate Pune, Real Estate Sangli, Commercial Properties Maharashtra, Premium Residential Developers, DCube Associates, Property Developers Pune",
  icons: {
    icon: '/logo.jpeg',
  },
  openGraph: {
    title: "DCube Associates | Premier Real Estate Developers",
    description: "Building lasting legacies through uncompromising quality and absolute transparency in Maharashtra.",
    url: "https://dcubeassociates.com",
    siteName: "DCube Associates",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "DCube Associates Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${ibmPlexMono.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
