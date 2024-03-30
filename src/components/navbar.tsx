"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="">
      <div className="hidden items-center justify-center gap-8 md:flex">
        <Link href="/">Home</Link>
        <Link href="/event">Event</Link>
        <Link href="/about">About</Link>
      </div>

      <div onClick={() => setOpen((prev) => !prev)}>
        {!open ? (
          <Image
            src="/hamburger.svg"
            alt="hamburger menu"
            width={24}
            height={24}
          />
        ) : (
          <Image src="/close.svg" alt="close menu" width={24} height={24} />
        )}
      </div>
      <div
        className={`${!open ? "hidden" : "block min-h-screen bg-slate-600/35"}`}
      >
        <div className="flex flex-col gap-8 pl-8 pt-8">
          <Link href="/">Home</Link>
          <Link href="/event">Event</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
