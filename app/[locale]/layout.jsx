import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Luxury Travel",
  description: "Luxury Travel ilə xoş səyahətlərdən həzz alın!",
};

export default function RootLayout({ children, params: {locale} }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div>
          <NextIntlClientProvider messages={messages}>
          <Header />
            <main>{children}</main>
          <Footer />
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
