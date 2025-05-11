import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barbra = localFont({
  src: "../../public/fonts/Barbra/Barbra-Regular.otf",
  variable: "--font-barbra",
});
const barbraBold = localFont({
  src: "../../public/fonts/Barbra/Barbra-High.otf",
  variable: "--font-barbra-bold",
});
const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Regular.woff2",
  variable: "--font-cabinetRegular",
});
const cabinetBold = localFont({
  src: "../../public/fonts/CabinetGrotesk-Bold.woff2",
  variable: "--font-cabinetBold",
});

// Metadata
export const metadata: Metadata = {
  title: "Reetta Salmela",
  description: "Portfolio of Reetta Salmela, journalist.",
  keywords: ["portfolio", "journalist", "Reetta Salmela"],
  authors: [{ name: "Reetta Salmela", url: "https://reettasalmela.fi" }],
  creator: "Don Hämäläinen",
  publisher: "Reetta Salmela",
  openGraph: {
    type: "website",
    locale: "fi-FI",
    siteName: "Reetta Salmela",
    url: "https://reettasalmela.fi",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fi"
      className={`${barbra.variable} ${barbraBold.variable} ${cabinet.variable} ${cabinetBold.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
