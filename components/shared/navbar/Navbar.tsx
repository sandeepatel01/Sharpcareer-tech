import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200
       fixed z-50 w-full gap-5 p-3 shadow-light-soft dark:shadow-dark-deep sm:px-12"
    >
      <Link href="/" className="mt-1 flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/images/logo.png"}
            width={45}
            height={45}
            alt="SharpCareer Logo"
          />
          <p className="h2-bold flex items-center justify-center text-dark-200 dark:text-light-900 max-sm:hidden">
            <span className="text-xl font-extrabold sm:text-2xl md:text-3xl">
              SharpCareer
            </span>
          </p>
        </div>
      </Link>

      <ul className="flex gap-8 text-gray-600 dark:text-gray-300 max-lg:hidden">
        <li>
          <Link href="/program">Program</Link>
        </li>
        <li>
          <Link href="/mentors">Mentors</Link>
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li>
          <Link href="/placements">Placements</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        <Theme />

        <Link
          href="/apply"
          className="rounded bg-blue-500 px-4 py-2 text-white font-bold hover:bg-blue-600 max-lg:hidden"
        >
          Apply Now
        </Link>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
