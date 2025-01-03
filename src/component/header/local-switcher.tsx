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
import { useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (locale: string) => {
    setIsOpen(false);
    router.push(`/${locale}`);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-16 px-2 text-gray-700 hover:bg-gray-100"
        >
          <Globe className="h-4 w-4 mr-1" />
          {/* Show current language code in uppercase */}
          <span className="text-sm font-medium">
            {new URL(window.location.href).pathname
              .split("/")[1]
              ?.toUpperCase() || "AR"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLanguage(language.code)}
            className="text-sm cursor-pointer hover:text-[#FF3D00] hover:bg-gray-50"
            dir={language.dir}
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
