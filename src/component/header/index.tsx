import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";
import { Routes } from "@/constants/enum";

const Header = async () => {
  const locale = await getLocale();
  console.log(locale);

  return (
    <header className="h-full flex items-center w-full">
      {/* Sidebar-like section */}
      <Link
        href={`/${locale}/${Routes.Root}`}
        className="w-[260px] bg-primary flex items-center justify-start h-full px-[5px] py-[18px]"
      >
        <Image
          className="object-contain"
          src={"https://cdn.salla.network/images/logo/logo-light-wide.svg"}
          alt="Logo"
          loading="eager"
          width={90}
          height={40}
          priority={true}
        />
      </Link>
      {/* Navbar Section */}
      <div className="flex-1">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
