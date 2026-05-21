import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { OsDetection } from "./os-detection";
import { Footer } from "@/components/footer";
import { Popup } from "@/components/modals/popup";
import { QuoteModalProvider } from "@/hooks/use-quote-modal";
import { QuoteModal } from "@/components/modals/quote-modal";

const luminaire = localFont({
  src: "../fonts/Luminaire.otf",
  variable: "--font-luminaire",
  display: "swap",
});

const marltonSans = localFont({
  src: "../fonts/MarltonSans.otf",
  variable: "--font-marlton",
  display: "swap",
});

const marltonScript = localFont({
  src: "../fonts/MarltonScript.otf",
  variable: "--font-marlton-script",
  display: "swap",
});

const satoshi = localFont({
  src: "../fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "200 300 400 500 600 700 800 900",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Holiday Light Installation In South Florida",
  description:
    "We provide everything—premium lights, full installation, and hassle-free removal—so your South Florida home or business shines all season without the ladders or storage stress.",
  openGraph: {
    images: "/og.png",
    title: "Professional Holiday Light Installation In South Florida",
    description:
      "We provide everything—premium lights, full installation, and hassle-free removal—so your South Florida home or business shines all season without the ladders or storage stress.",
    url: "https://godlyholidaylights.com/",
    siteName: "Godly Windows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Holiday Light Installation In South Florida",
    description:
      "We provide everything—premium lights, full installation, and hassle-free removal—so your South Florida home or business shines all season without the ladders or storage stress.",
    images: "/og.png",
  },
  metadataBase: new URL("https://godlyholidaylights.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W9G48J8N');`}</script>
      </head>
      <body
        className={`antialiased ${luminaire.variable} overflow-x-clip ${marltonSans.variable} ${marltonScript.variable} ${satoshi.variable} ${inter.variable} min-h-svh flex flex-col items-center justify-center max-w-screen w-full h-full`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9G48J8N"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
        <QuoteModalProvider>
          <OsDetection />
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <Popup />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
