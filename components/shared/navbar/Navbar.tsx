import Image from "next/image";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200
       fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12"
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
      {/* Link to other pages */}
      Pages
      <div className="flex-between gap-5">ThemeToggle</div>
    </nav>
  );
};
export default Navbar;
