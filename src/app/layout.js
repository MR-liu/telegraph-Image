import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/ReactToastify.min.css';
import 'react-photo-view/dist/react-photo-view.css';
// import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "图床",
  description: "图床",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
      {
        // <GoogleAnalytics gaId="G-JVKEXR5XSG" />
      }
    </html>
  );
}
