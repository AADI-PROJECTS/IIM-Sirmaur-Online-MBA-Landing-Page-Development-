"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCalendarAlt, FaPhoneAlt, FaUserGraduate } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";

const slides = ["/slide1.avif", "/slide2.avif", "/slide3.avif", "/slide4.avif"];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#041C32]">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide}
                alt={`Hero Background`}
                fill
                priority={index === 0}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/65"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="max-w-3xl pt-10">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-5xl">
                India's First
                <span className="text-[#D4AF37] pl-3">AI-Native MBA</span> for
                Working Professionals.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-200 md:text-xl">
                Earn an MBA degree from IIM Sirmaur without quitting your job.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#"
                  className="rounded-xl bg-[#D4AF37] px-8 py-4 text-center text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
                >
                  Download Brochure
                </Link>

                <Link
                  href="#"
                  className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-center text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Apply Now
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-8 bg-[#D4AF37]"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="bg-gradient-to-r from-black via-blue-900 to-black py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-[#ffff] md:text-5xl">
              Program Features
            </h2>

            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#D4AF37]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="group relative h-[420px] overflow-hidden rounded-3xl shadow-xl"
              >
                <Image
                  src={slide}
                  alt="Image Loading"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#041C32]/60 transition-all duration-500 group-hover:bg-[#041C32]/80" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold leading-snug text-white">
                    {index === 0 && "100% Live Online Weekend Classes"}

                    {index === 1 && "Direct IIM Alumni Status"}

                    {index === 2 && "24-Month Duration with Campus Immersions"}

                    {index === 3 &&
                      "Specializations: AI-Powered Finance, Marketing, and Operations"}
                  </h3>

                  <button className="mt-10 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#F4C430]">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/background2.jpg"
            alt="Background"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center text-white">
            <h2 className="text-4xl font-bold md:text-5xl">
              Eligibility & Important Dates
            </h2>

            <p className="mt-4 text-lg text-gray-200">
              Important admission details for the Online MBA Program
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:bg-white/20">
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37] text-4xl text-black">
                  <FaUserGraduate />
                </div>
              </div>

              <h4 className="mb-4 text-2xl font-bold text-white">
                Eligibility
              </h4>

              <p className="text-sm leading-7 text-gray-200">
                Bachelor&apos;s Degree (50%+) with a minimum of 2 years of
                professional work experience.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:bg-white/20">
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37] text-4xl text-black">
                  <FaCalendarAlt />
                </div>
              </div>

              <h4 className="mb-4 text-2xl font-bold text-white">
                Application Deadline
              </h4>

              <p className="text-sm leading-7 text-gray-200">
                Submit your application before
                <span className="font-semibold text-[#D4AF37] pl-1">
                  31st July 2026
                </span>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:bg-white/20">
              <div className="mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37] text-4xl text-black">
                  <FaPhoneAlt />
                </div>
              </div>

              <h4 className="mb-4 text-2xl font-bold text-white">
                Contact for Queries
              </h4>

              <p className="text-sm leading-7 text-gray-200">
                For admission assistance and program details, contact us at
                <span className="font-semibold text-[#D4AF37] pl-1">
                  +91 98765 43210
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-black via-blue-900 to-black py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 text-center">
            <h2 className="relative inline-block text-4xl font-bold text-white md:text-5xl">
              Contact Us
              <span className="absolute left-1/2 top-full mt-3 h-1 w-16 -translate-x-1/2 rounded-full bg-[#D4AF37]" />
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[550px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/NewAI.webp"
                alt="Contact"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="rounded-2xl bg-gray-400 text-white p-8 shadow-2xl md:p-10 ">
              <h2 className="mb-2 text-3xl font-bold ">Apply Now</h2>

              <p className="mb-8 ">
                Fill out the form and our admission counselor will contact you.
              </p>

              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Current Designation"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Experience"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#D4AF37] px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-[#F4C430]"
                >
                  Submit Inquiry
                </button>
              </form>

              <div className="mt-8 space-y-4 text-sm ">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                    <IoIosMailUnread className="text-lg" />
                  </div>

                  <p className="text-base font-medium">
                    eklovey@learningshala.in
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                    <FaPhoneAlt className="text-sm" />
                  </div>

                  <p className="text-base font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
