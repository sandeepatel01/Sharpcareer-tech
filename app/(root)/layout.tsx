import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <section className="min-h-screen flex-1 flex-col pt-16 ">
          <div className="mx-auto w-full">{children}</div>
        </section>
      </div>
      Toast
    </main>
  );
};

export default Layout;
