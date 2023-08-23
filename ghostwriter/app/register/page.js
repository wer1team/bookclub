import styles from "./register.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
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

      <div className="register_box">
        <h4>CREATE ACCOUNT</h4>
        <form method="POST" action="/api/auth/signup">
          <label htmlFor="name">Ghostname</label>
          <input id="name" name="name" type="text" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
          <label htmlFor="confirm_password">Confirm password</label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            required
          />
          <button type="submit">JOIN</button>
        </form>
      </div>
    </div>
  );
}
