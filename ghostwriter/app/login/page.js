"use client";

import styles from "./login.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  let router = useRouter();
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          src="/images/Ghostwriter.svg"
          alt="logo_image"
          width={250}
          height={250}
          className="logo"
        />
      </Link>
      <div>
        <h3>LOG IN</h3>
      </div>
    </div>
  );
}
