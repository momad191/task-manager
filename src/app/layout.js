import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/providers";
import { dbConnect } from "@/lib/mongo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "task managements",
  description: "mohammed emad emad doing this for a company to colaborate work",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <br /> <br /> <br /> <br />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
