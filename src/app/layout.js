import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Aivons Business Consulting",
  description:
    "Aivons Business Consulting: Grow with expert strategy, management, and marketing services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
