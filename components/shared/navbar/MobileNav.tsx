"use client";

import React, { Suspense } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex h-full flex-col gap-6 pt-16">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                className={`${
                  isActive
                    ? "primary-gradient bg-blue-500 hover:bg-blue-600  rounded-[8px] text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-center gap-4 bg-transparent p-4`}
              >
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                  {item.label}
                </p>
              </Link>
            </SheetClose>
          );
        })}
      </section>
    </Suspense>
  );
};

const MobileNav = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger"
            className="invert-colors lg:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-light-900 dark:bg-dark-100"
        >
          <Link
            href="/"
            className="ml-[-150px] mt-1 flex flex-col items-center gap-1"
          >
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/images/logo.png"}
                width={45}
                height={45}
                alt="ErrorBook"
              />
              <p className="h2-bold flex items-center justify-center text-dark-200 dark:text-light-900">
                <span className="text-xl font-extrabold sm:text-2xl md:text-3xl">
                  SharpCareer
                </span>
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <NavContent />
            </SheetClose>

            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/apply">
                  <Button className="small-medium font-bold light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-xl px-4 py-3 shadow">
                    Apply Now
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </Suspense>
  );
};

export default MobileNav;
