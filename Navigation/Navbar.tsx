"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0  z-50 w-screen transition-all duration-500 ease-in-out  py-0 `}
      >
        <div
          className={`mx-auto flex items-center justify-between pl-5 pr-8 border border-white/20 transition-all duration-500 backdrop-blur-md
          
          ${
            isScrolled
              ? "max-w-[1200px] bg-white/10 px-6 py-3 shadow-lg rounded-full"
              : "max-w-full bg-transparent px-2 py-4"
          }
        `}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm">
              <Image
                src="/logo.avif"
                alt="IIM Sirmaur Logo"
                width={60}
                height={60}
                className="rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex flex-col leading-tight">
              <h1 className="text-lg font-bold tracking-wide text-white md:text-xl">
                IIM Sirmaur
              </h1>

              <span className="text-xs font-medium text-gray-300 md:text-sm">
                Online MBA in Data Science & AI
              </span>
            </div>
          </Link>

   
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <Link
                href="/"
                className="text-white transition hover:text-[#D4AF37]"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-white transition hover:text-[#D4AF37]"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="text-white transition hover:text-[#D4AF37]"
              >
                Courses
              </Link>
            </li>
             <li>
              <Link
                href="/services"
                className="text-white transition hover:text-[#D4AF37]"
              >
                Pricing 
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-white transition hover:text-[#D4AF37]"
              >
                Contact
              </Link>
            </li>
          </ul>

      
          <div className="hidden md:block">
            <button className="rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-black transition hover:bg-yellow-300">
              Apply Now
            </button>
          </div>

       
          <button
            className="text-white md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <TiThMenu size={28} /> : <TiThMenu size={28} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            mobileMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-1 rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl">
            <ul className="flex flex-col gap-5">
              <li>
                <Link
                  href="/"
                  className="text-white transition hover:text-[#D4AF37]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-white transition hover:text-[#D4AF37]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-white transition hover:text-[#D4AF37]"
                >
                  Courses
                </Link>
              </li>
 <li>
                <Link
                  href="/services"
                  className="text-white transition hover:text-[#D4AF37]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white transition hover:text-[#D4AF37]"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <button className="mt-6 w-full rounded-full bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:bg-yellow-300">
              Apply Now
            </button>
          </div>
        </div>
      </nav>

    
    </>
  );
}
