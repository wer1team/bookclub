// layout.js
"use client";
import "./layout.css";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { SessionProvider, useSession } from "next-auth/react";
import LogoutBtn from "./LogoutBtn";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      {/* <useSession> 훅을 <SessionProvider> 컴포넌트 내부로 이동 */}
      <LayoutContent>{children}</LayoutContent>
    </SessionProvider>
  );
}
function LayoutContent({ children }) {
  const [isNavbarVisible, setNavbarVisible] = useState(false);
  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };
  const { data: session } = useSession(); // 클라이언트 사이드에서 세션을 가져옵니다.
  console.log(session);
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
        <div className={`navbar ${isNavbarVisible ? "visible" : ""} `}>
          <div className="wrapLink">
            <Link href="/" className="link">
              BOOK CLUB OF GHOST
            </Link>
            <Link href="/myJournal" className="link">
              MY READING JOURNAL
            </Link>
            <Link href="/" className="link">
              VOTE FOR NEXT MONTH
            </Link>
            {session != null ? (
              <div>
                <LogoutBtn />
              </div>
            ) : (
              <Link href="/signin" className="link">
                SIGN IN
              </Link>
            )}
            <Image
              src="/images/ghostwithoutpen.svg"
              alt="ghost"
              width={500}
              height={500}
              className="img_navbar"
            />
            <p className="peekabook">PEEK A BOOK</p>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
