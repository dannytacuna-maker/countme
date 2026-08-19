import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Countme | Contabilidad, impuestos, auditoría y planillas en Costa Rica",
    template: "%s | Countme",
  },
  description:
    "Countme, fundada en 2007, ofrece outsourcing en contabilidad, cumplimiento tributario, planillas, auditoría, zona franca y administración para empresas en Costa Rica.",
  metadataBase: new URL("https://www.countmecr.com"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Countme",
    title: "Countme | Contabilidad, impuestos, auditoría y planillas en Costa Rica",
    description:
      "Outsourcing en contabilidad, impuestos, planillas, auditoría y administración en Costa Rica. Fundada en 2007.",
    url: "https://www.countmecr.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
