"use client";

import React from "react";
import Logo from "../logo";
import Menu from "./menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Gift, LogOut } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { LANGUAGES } from "@/constants/enum";
import AnimatedPing from "../../animatedPing";
import Image from "next/image";
import { ThemeToggle } from "../../theme-toggle";
import { LanguageSwitcher } from "../../local-switcher";
import IconRenderer from "../../../sidebar/iconRenderer";

const NavMobile = ({
  optionLinks,
}: {
  optionLinks: { name: string; icon: string }[];
}) => {
  const lang = useLocale();
  const t = useTranslations("navbar");
  const isAr = lang === LANGUAGES.ARABIC;
  return (
    <div className="max-md:flex hidden relative justify-between items-center w-full h-14">
      <Menu />
      <Logo className="ms-10" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center justify-start text-sm bg-transparent shadow-none">
            <div className="relative">
              <Image
                className="rounded-full"
                width={28}
                height={28}
                src="https://www.gravatar.com/avatar/112e28edfaa501b1942f68247921fcec?s=80&d=mm&r=g"
                alt="user-profile"
              />
              <AnimatedPing className="flex lg:hidden absolute top-0 right-0" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={"start"}
          lang={isAr ? "Arabic" : "English"}
          className="w-screen mt-2 border-t border-t-primary right-0 left-0 shadow-md bg-primary text-white transform-none"
        >
          <DropdownMenuGroup>
            {optionLinks &&
              optionLinks.map((link) => (
                <DropdownMenuItem
                  key={link.name}
                  className={`flex items-center ${
                    isAr ? "flex-row-reverse" : "justify-start"
                  } text-right text-sm gap-3 focus-visible:outline-none py-2.5 px-[15px] cursor-pointer`}
                >
                  <IconRenderer iconName={link.icon} size={20} />
                  <div>{link.name}</div>
                </DropdownMenuItem>
              ))}

            <DropdownMenuItem
              className={`flex items-center ${
                isAr ? "flex-row-reverse" : "justify-start"
              } text-right text-sm gap-3 focus-visible:outline-none py-2.5 px-[15px] cursor-pointer`}
            >
              <div>
                <Gift size={20} />
              </div>
              <div>{t("loyaltyPoints")}</div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`flex items-center ${
                isAr ? "flex-row-reverse" : "justify-start"
              } text-right text-sm focus-visible:outline-none py-1 cursor-pointer`}
            >
              <ThemeToggle
                variant={"ghost"}
                className="border-none text-white shadow-none"
              />
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`flex items-center ${
                isAr ? "flex-row-reverse" : "justify-start"
              } text-right text-sm gap-3 focus-visible:outline-none py-1 px-1.5 cursor-pointer`}
            >
              <LanguageSwitcher />
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className=" w-full" />
          <DropdownMenuItem
            className={`flex items-center ${
              isAr ? "flex-row-reverse" : "justify-start"
            } text-right text-ring text-sm focus-visible:outline-none py-2.5 px-[15px] cursor-pointer`}
          >
            <LogOut size={20} />
            <Button className="font-bold text-ing shadow-none mt-0 pt-0">
              {t("logOut")}
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavMobile;
