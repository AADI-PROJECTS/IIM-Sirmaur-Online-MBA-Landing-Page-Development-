import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { IoIosMailUnread } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#041C32] px-6 py-16 text-gray-300 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2  lg:grid-cols-4">
          <div>
            <Image
              src="/logo.avif"
              alt="Logo"
              width={170}
              height={70}
              className="mb-5 object-contain"
            />

            <p className="text-sm leading-7 text-gray-300">
              To build a high-performance, responsive, and conversion-optimized landing page for the IIM Sirmaur Online MBA in Data Science & AI. The page should be designed to capture leads and provide all essential program details clearly. 
            </p>

            <button className="mt-5 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#F4C430]">
              Apply Now
            </button>
          </div>

          <div>
            <h5 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h5>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm transition-all duration-300 hover:pl-2 hover:text-[#D4AF37]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm transition-all duration-300 hover:pl-2 hover:text-[#D4AF37]"
                >
                 About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm transition-all duration-300 hover:pl-2 hover:text-[#D4AF37]"
                >
                  Courses
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm transition-all duration-300 hover:pl-2 hover:text-[#D4AF37]"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm transition-all duration-300 hover:pl-2 hover:text-[#D4AF37]"
                >
                  Contact 
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-xl font-semibold text-white">
              Program Highlights
            </h5>

            <ul className="space-y-3">
              <li className="text-sm">100% Live Weekend Classes</li>

              <li className="text-sm">Direct IIM Alumni Status</li>

              <li className="text-sm">24-Month Duration with Campus Immersions</li>

              <li className="text-sm">AI-Powered Finance</li>

              <li className="text-sm">Marketing, and Operations</li>
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-xl font-semibold text-white">
              Contact Us
            </h5>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                  <FaPhoneAlt className="text-sm" />
                </div>

                <div>
                  <p className="font-semibold text-white">Call Us</p>

                  <p className="mt-1 text-gray-300">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                  <IoIosMailUnread className="text-lg" />
                </div>

                <div>
                  <p className="font-semibold text-white">Email Us</p>

                  <p className="mt-1 text-gray-300">eklovey@learningshala.in</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                  <FaMapMarkerAlt className="text-sm" />
                </div>

                <div>
                  <p className="font-semibold text-white">Address</p>

                  <p className="mt-1 leading-6 text-gray-300">
                    Noida Office -<br />
                    B-21, Block B, Sector 3,
                    <br />
                    Noida, Uttar Pradesh 201301
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 IIM Sirmaur Online MBA in Data Science & AI. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
