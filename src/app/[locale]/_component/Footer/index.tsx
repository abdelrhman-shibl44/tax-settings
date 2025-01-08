import { buttonVariants } from "@/components/ui/button";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

const Footer = async () => {
  const t = await getTranslations("common");
  const locale = await getLocale();
  return (
    <div
      className="container fixed text-white w-full h-4 bottom-3 text-end flex justify-end items-center"
      dir={locale}
    >
      <Link
        href={"/"}
        className={`${buttonVariants({ variant: "link" })} pe-1`}
      >
        {t("sala")}
      </Link>{" "}
      <span className="text-accent-dark-200">&copy; 2025</span>
    </div>
  );
};

export default Footer;
