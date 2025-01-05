import React from "react";
import Navbar from "./navbar";
import Logo from "./navbar/logo";
import NavMobile from "./navbar/nav-mobile.tsx";
import { getOptionsLinks } from "@/constants/sidebar";

const Header = async () => {
  const optionLinks = await getOptionsLinks();
  return (
    <header className="h-full flex items-center max-md:justify-between w-full max-md:bg-primary relative z-[9999]">
      {
        /* Sidebar-like section */
        <div className="hidden md:flex">
          <Logo className="w-[260px] bg-primary" />
        </div>
      }
      {/* for mobile */}
      <NavMobile optionLinks={optionLinks} />
      {/* Navbar Section */}
      <div className="hidden md:flex flex-1 ms-[260px] min-h-14 py-5 items-baseline">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
