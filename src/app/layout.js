import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/providers";
import { dbConnect } from "@/lib/mongo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/auth";


import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "task managements",
  description: "mohammed emad emad doing this for a company to colaborate work",
};

export default async function RootLayout({ children }) {

  const session = await auth();
  const loggedInUser = session?.user;
  const userName = loggedInUser?.name;

  await dbConnect();


  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();


  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers>
        <NextIntlClientProvider messages={messages}>
          <Navbar session={session} loggedInUser={loggedInUser} userName={userName}  />
          <br /> <br /> <br /> <br />
          {children}
          <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
