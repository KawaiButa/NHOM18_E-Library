'use client';

import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
