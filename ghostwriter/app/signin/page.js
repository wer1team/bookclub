import styles from "./signin.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthBtn from "./AuthBtn";

export default function Signin() {
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

      <div className="login_box">
        <h4>SIGN IN</h4>
        <AuthBtn />
        <form method="POST" action="/api/auth/login">
          <input
            id="email"
            name="email"
            type="text"
            required
            placeholder="Email address"
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button type="submit">JOIN</button>
        </form>
        <div className="signin_box">
          <span>Don't have an account?&nbsp;&nbsp;&nbsp;</span>
          <Link href="/register" className="signin_link">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
