"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/routing";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    setIsOpen(false);
    router.replace(`/${pathname}`, { locale });
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-center flex flex-row-reverse group md:p-0"
        >
          <div className="rounded-full md:border border-secondary-50 text-white md:text-link-color md:p-2.5">
            <Globe />
          </div>

          <span className="text-sm md:hidden">
            {new URL(window.location.href).pathname
              .split("/")[1]
              ?.toUpperCase() || "AR"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32 z-[9999]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className="text-sm cursor-pointer hover:text-ring hover:bg-gray-50"
            dir={language.dir}
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
