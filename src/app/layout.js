import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/ReactToastify.min.css';
import 'react-photo-view/dist/react-photo-view.css';
// import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Header from "../components/Header";

import { ToastContainer } from "react-toastify";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OrangeThink Image Hosting - Fast, Secure, and Easy-to-Use Photo Storage",
  description: "OrangeThink offers reliable and secure image hosting solutions designed for individuals and businesses. Enjoy fast upload speeds, easy management, and sharing capabilities. Ideal for photographers, designers, and anyone in need of high-quality image storage.",
  keywords: "OrangeThink, image hosting, secure photo storage, fast image upload, photo sharing, online photo gallery, cloud storage for images, picture hosting service"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header>
        <link rel="icon" href="/img/logo.png" type="image/png" sizes="32x32" />
      </header>
      <body className={inter.className + ' min-h-screen flex flex-col'}>
        <Nav />
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={1200}
          hideProgressBar={true}
          pauseOnHover
          theme="dark"
          toastClassName="bg-gray-800 text-white rounded-lg shadow-lg"
          bodyClassName="text-sm"
        />
      </body>
      {
        // <GoogleAnalytics gaId="G-JVKEXR5XSG" />
      }
    </html>
  );
}
