"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

if (typeof window !== "undefined") {
  import ("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en" className={inter.className}> {/* Apply the Inter font */}
      <body>
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}