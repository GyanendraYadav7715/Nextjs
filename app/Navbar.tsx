'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  
  return (
    <div className="flex gap-8 bg-slate-200 p-5 items-center justify-center">
      <Link href="/" className="uppercase">
        Logo
      </Link>
      <Link href="/users" className="uppercase">
        User
      </Link>
      <Link href="/admin" className="uppercase">
        Admin
      </Link>
      <Link href="/lastcom" className="uppercase">
       Images
      </Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name} <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin" className="uppercase">
          SIGN IN
        </Link>
      )}
    </div>
  );
};

export default Navbar;
