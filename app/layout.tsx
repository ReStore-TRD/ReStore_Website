import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import "@fontsource/montserrat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReStore",
  description: "Generated by ReStore Developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
