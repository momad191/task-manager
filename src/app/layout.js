import { Inter } from "next/font/google";
import "./globals.css";

import { dbConnect } from "@/lib/mongo";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "task managements",
  description: "mohammed emad emad doing this for a company to colaborate work",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
