import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200
       fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12"
    >
      <Link href="/" className="flex items-center gap-1">
        {/* <Image
          src={"/assets/images/logo-dark.png"}
          width={23}
          height={23}
          alt="ErrorBook"
        /> */}
        <p className="h2-bold text-dark-100 dark:text-light-900 max-sm:hidden ">
          <span className="text-[#ff0033] font-extrabold">SharpCareer</span>
        </p>
      </Link>
      {/* Link to other pages */}
      Pages
      <div className="flex-between gap-5">ThemeToggle</div>
    </nav>
  );
};
export default Navbar;
