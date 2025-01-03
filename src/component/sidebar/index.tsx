import StoreButton from "@/app/[locale]/_component/StoreButton";
import { ChevronLeft, Crown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconRenderer from "./iconRenderer";
import { getLinks } from "@/constants/sidebar";
import { BaseLink, TSidebarLink } from "@/types/sidebar";
import { getLocale, getTranslations } from "next-intl/server";
import { LANGUAGES } from "@/constants/enum";
const Sidebar = async () => {
  const links = (await getLinks()) as TSidebarLink[];
  const lang = await getLocale();
  const t = await getTranslations("sidebar.store");

  const isAr = lang === LANGUAGES.ARABIC;
  return (
    <aside className="overflow-auto max-h-screen">
      <div className="flex items-center flex-col gap-1 justify-center mx-auto py-[18px]">
        <Link
          href="https://demo.salla.sa/marketplace"
          className="relative w-16 h-16"
        >
          <span
            className={`absolute -top-1 start-1/2 transform -translate-x-1/2 bg-colorYellow z-50 text-xs pt-[2px] pb-0.5 min-w-[76px] rounded-full text-center flex justify-around items-center ${
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
      </div>
      <nav>
        <ul>
          {links.map((link: TSidebarLink) => (
            <li key={link.id}>{SidebarLink(link)}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;

const SidebarLink = (link: TSidebarLink) => (
  <>
    {"title" in link ? (
      <div className="font-medium py-3 p-5 text-secondary text-[15px] mt-2.5">
        <h3 className="font-medium pb-3 text-secondary text-[15px]">
          {link.title}
        </h3>
        {link.nestedLinks?.map((nestedLink: BaseLink) => (
          <div
            key={nestedLink.id}
            className="flex items-center py-3 justify-between gap-2 text-white"
          >
            {"img" in nestedLink ? (
              <div className="inline-block items-center w-full">
                <Link href={nestedLink.href || ""}>
                  <div className="relative">
                    <Image
                      width={140}
                      height={42}
                      src={nestedLink.img || ""}
                      alt={nestedLink.alt || ""}
                      className="w-auto h-auto"
                    />
                  </div>
                </Link>
              </div>
            ) : (
              <Link href={""} className="flex items-center gap-2 w-full">
                {nestedLink.icon && (
                  <IconRenderer iconName={nestedLink.icon} size={18} />
                )}
                <div className="flex justify-between w-full">
                  <span className="text-sm">{nestedLink.label}</span>
                  {nestedLink.new && (
                    <span className="text-xs font-semibold bg-secondary-50 text-primary rounded-full py-[4px] px-2.5">
                      {nestedLink.new}
                    </span>
                  )}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    ) : (
      <Link href="" className="block">
        <div className="flex items-center gap-2 py-3 p-5 text-white">
          {link.icon && <IconRenderer iconName={link.icon} size={18} />}
          <span className="text-sm">{link.label}</span>
        </div>
      </Link>
    )}
  </>
);
