import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vikava Labs",
  description:
    "Vikava Labs is on mission to make end to end operations of any fashion business easy, ecomical & optimal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
