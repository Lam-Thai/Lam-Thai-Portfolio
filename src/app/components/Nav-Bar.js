"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-zinc-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={30}
            className="brightness-0 saturate-100 invert sepia hue-rotate-[10deg] saturate-[5]"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(58%) sepia(89%) saturate(2476%) hue-rotate(1deg) brightness(102%) contrast(101%)",
            }}
          />
        </Link>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <Link
            href="/work"
            className="text-zinc-400 hover:text-orange-400 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-zinc-400 hover:text-orange-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-zinc-400 hover:text-orange-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
