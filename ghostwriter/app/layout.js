"use client";

import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let [isNavbarVisible, setNavbarVisible] = useState(false);
  let toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="btn_navbar" onClick={toggleNavbar}>
          <Image
            src="/images/menu.svg"
            alt="menu_button"
            width={25}
            height={25}
          />
        </div>
        <div className={`navbar ${isNavbarVisible ? "visible" : ""}`}>
          <div className="wrapLink">
            <Link href="/" className="link">
              BOOK CLUB OF GHOST
            </Link>
            <Link href="/" className="link">
              MY READING JOURNAL
            </Link>
            <Link href="/" className="link">
              VOTE FOR NEXT MONTH
            </Link>
            <Link href="/login" className="link">
              SIGN IN
            </Link>
            <Image
              src="/images/ghostwithoutpen.svg"
              alt="ghost"
              width={500}
              height={500}
              className="img_navbar"
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
