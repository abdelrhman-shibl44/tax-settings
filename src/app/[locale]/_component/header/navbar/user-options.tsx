import { ChevronDown, Gift, LogOut } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "../local-switcher";
import { LANGUAGES } from "@/constants/enum";
import AnimatedPing from "../animatedPing";
import IconRenderer from "../../sidebar/iconRenderer";
import { getLocale, getTranslations } from "next-intl/server";
import { getOptionsLinks } from "@/constants/sidebar";

const UserOptions = async () => {
  const lang = await getLocale();
  const t = await getTranslations("navbar");
  const optionLinks = await getOptionsLinks();
  const isAr = lang === LANGUAGES.ARABIC;

  return (
    <div className="flex items-center gap-1 md:gap-3 flex-wrap">
      <Link
        href=""
        className="rounded-full border text-primary-1 border-secondary-50 p-2"
      >
        <Gift size={19} />
      </Link>
      <ThemeToggle />
      <LanguageSwitcher />
      <Link href={""} className="flex flex-row-reverse gap-3 items-center">
        <span className="text-accent-dark-300 text-sm">
          {t("platformUpdates")}
        </span>
        <AnimatedPing className="hidden lg:flex" />
      </Link>
      <div className="flex items-center cursor-pointer">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="flex items-center justify-start text-sm text-accent-dark-300 bg-transparent shadow-none">
              <span>{t("giftStore")}</span>
              <ChevronDown size={15} className="mt-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align={`${isAr ? "start" : "end"}`}
            className="w-48 shadow-md bg-white"
          >
            <DropdownMenuGroup className="flex flex-col">
              {optionLinks.map((link, i) => (
                <DropdownMenuItem
                  key={i}
                  className="flex items text-accent-dark-300 text-sm w-full gap-3 focus-visible:outline-none hover:bg-gray-light py-2 px-3 "
                >
                  <IconRenderer
                    iconName={link.icon}
                    size={20}
                    key={link.icon}
                  />
                  <span>{link.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="text-accent-dark-300 w-full" />
            <DropdownMenuItem className="flex items text-sm mt-2 gap-3 text-ring p-3 focus-visible:outline-none hover:bg-gray-light ">
              <LogOut size={20} />
              <span>{t("logOut")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserOptions;
