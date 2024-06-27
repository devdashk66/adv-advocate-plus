import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ADV - Welcome to Advocate Plus",
  description:
    "Welcome to Advocate Plus, your trusted partner in legal advocacy. Discover how we champion your rights and provide expert guidance for a just society.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className + " overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
