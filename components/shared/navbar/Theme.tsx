"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Menubar className="relative border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
            {mode === "light" ? (
              <Image
                src="/assets/icons/sun.svg"
                width={20}
                height={20}
                alt="sun"
                className="active-theme"
              />
            ) : (
              <Image
                src="/assets/icons/moon.svg"
                width={20}
                height={20}
                alt="moon"
                className="active-theme"
              />
            )}
          </MenubarTrigger>
          <MenubarContent className="absolute -right-12 mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
            {themes.map((theme) => (
              <MenubarItem
                key={theme.value}
                className="flex cursor-pointer items-center gap-4 px-2.5 py-2 focus:bg-light-800 dark:focus:bg-dark-400"
                onClick={() => {
                  setMode(theme.value);

                  if (theme.value !== "system") {
                    localStorage.theme = theme.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
              >
                <Image
                  src={theme.icon}
                  width={16}
                  height={16}
                  alt={theme.value}
                  className={`${mode === theme.value && "active-theme"}`}
                />
                <p
                  className={`body-semibold text-light-500 ${mode === theme.value ? "text-[#137bbb]" : "text-dark100_light900"}`}
                >
                  {theme.label}
                </p>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Suspense>
  );
};

export default Theme;
