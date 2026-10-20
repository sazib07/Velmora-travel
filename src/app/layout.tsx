
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Velmora — A world of timeless discovery.",
    template: "%s | Velmora",
  },
  description:
    "Discover extraordinary destinations, curated luxury stays, and unforgettable journeys with Velmora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
