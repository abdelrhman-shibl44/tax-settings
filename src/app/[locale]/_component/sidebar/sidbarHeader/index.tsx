import { LANGUAGES } from "@/constants/enum";
import { ChevronLeft, Crown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import StoreButton from "../../StoreButton";
import Image from "next/image";

const Sidebarheader = () => {
  const t = useTranslations("sidebar.store");
  const isAr = useLocale() === LANGUAGES.ARABIC;
  return (
    <>
      <Link
        href="https://demo.salla.sa/marketplace"
        className="relative w-16 h-16"
      >
        <span
          className={`absolute -top-1 ${
            isAr ? "end-1/2" : "start-1/2"
          } transform -translate-x-1/2 bg-colorYellow z-50 text-xs pt-[2px] pb-0.5 min-w-[76px] rounded-full text-center flex justify-around items-center ${
            !isAr ? "flex-row-reverse" : ""
          }`}
        >
          <Crown size={10} />
          {t("special")}
        </span>
        <Image
          className="object-cover rounded-full border-2 border-colorYellow border-dashed w-16 h-16"
          src={
            "https://cdn.salla.sa/EZZNYp/UDW9uMwIyNZtYUZvUOKltJpsOnLxZYNZGohuPNEx.jpg"
          }
          alt={t("alt")}
          loading="eager"
          fill
          priority={true}
        />
      </Link>
      <h6 className="font-bold text-white leading-7 text-base">
        {t("gift_store")}
      </h6>
      <div className="text-white flex items-center border-2 border-secondary-50 rounded-full">
        <Link
          target="_blank"
          className="flex items-center text-sm ps-2.5 pe-2 gap-1"
          href={
            "https://salla.sa/giftshop2024/?expires=1735873653&identifier=2094195128&utm_source=dashboard&signature=fc89d7149eaa5776253ca7fb8876bf11b5e60d5a3fb237f8cafaa0f328039cbe"
          }
        >
          {t("visit_store")}{" "}
          <ChevronLeft size={16} className={`${isAr ? "" : "rotate-180"}`} />
        </Link>
        <StoreButton />
      </div>
    </>
  );
};
export default Sidebarheader;
