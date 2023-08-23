"use client";
import { signIn } from "next-auth/react";

export default function AuthBtn() {
  return (
    <div>
      <button className="btn_auth" onClick={() => signIn("google")}>
        Sign in with Google
      </button>
      <button className="btn_auth" onClick={() => signIn("github")}>
        Sign in with Github
      </button>
    </div>
  );
}
