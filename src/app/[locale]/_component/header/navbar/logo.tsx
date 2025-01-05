import { Routes } from "@/constants/enum";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ className }: { className?: string }) => {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}/${Routes.Root}`}
      className={cn(
        "flex items-center justify-start px-[5px] py-[18px] flex-shrink-0 md:fixed top-0 start-0",
        className
      )}
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
  );
};

export default Logo;
