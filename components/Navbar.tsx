"use client";
import Link from "next/link";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const Navbar = () => {

  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <p className="text-[25px] font-extrabold text-white ">Tag</p>
      </Link>

      {/* for mobile compatiblity */}
      <div className="flex-between gap-5">
        {/* clerk user management */}
        <SignedIn>
          <UserButton />
        </SignedIn>

      </div>
    </nav>
  );
};
