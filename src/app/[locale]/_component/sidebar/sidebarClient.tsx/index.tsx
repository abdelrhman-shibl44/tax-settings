"use client";

import Image from "next/image";
import Link from "next/link";
import IconRenderer from "../iconRenderer";
import { BaseLink, TSidebarLink } from "@/types/sidebar";
import { LANGUAGES } from "@/constants/enum";
import { useSidebar } from "@/context/sidebar";
import { useLocale } from "next-intl";
import { RefObject, useRef } from "react";
import useClickoutside from "@/components/ui/useClickoutside";
import Mask from "@/components/ui/mask";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarHeader } from "@/components/ui/sidebar";
import Sidebarheader from "../sidbarHeader";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarClient = ({ links }: { links: any }) => {
  const lang = useLocale();
  const { isOpen, closeSideBar } = useSidebar();
  const sidebarRef = useRef<HTMLElement>(null);
  useClickoutside(sidebarRef as RefObject<HTMLElement>, closeSideBar);

  const isAr = lang === LANGUAGES.ARABIC;
  const isMobile = useIsMobile();
  return (
    <>
      {isOpen && isMobile ? (
        <Mask isVisible={isOpen} onClick={closeSideBar} />
      ) : (
        ""
      )}
      <aside
        ref={sidebarRef}
        className={`overflow-auto max-h-screen className="min-h-[calc(100vh-56px)] fixed trasnform bottom-0 top-14 z-[3000] min-w-[260px] bg-primary transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : `${
                isAr ? "translate-x-full" : "-translate-x-full"
              } md:translate-x-0`
        }`}
      >
        <div className="flex items-center flex-col gap-1 justify-center mx-auto py-5 px-[18px]">
          <Sidebarheader />
        </div>
        {/* sidebar links */}
        <nav>
          <ul>
            {links.map((link: TSidebarLink, i: number) => (
              <li key={i}>{SidebarLink(link, lang)}</li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

const SidebarLink = (link: TSidebarLink, lang: string) => (
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
              <Link
                href={`${lang}${nestedLink.href}`}
                className="flex items-center gap-2 w-full"
              >
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
      <Link href={`/${lang}${link.href}`} className="block">
        <div className="flex items-center gap-2 py-3 p-5 text-white">
          {link.icon && <IconRenderer iconName={link.icon} size={18} />}
          <span className="text-sm">{link.label}</span>
        </div>
      </Link>
    )}
  </>
);

export default SidebarClient;
