import FooterComponent from "@/components/footer/footerComponent";
import Navigation from "@/components/navigation/navigation";
import type { Metadata, Viewport } from "next";

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

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
      <FooterComponent />
    </>
  );
}
