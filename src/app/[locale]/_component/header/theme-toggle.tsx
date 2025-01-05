"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function ThemeToggle({
  className,
  variant,
}: {
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "secondary"
    | null;
}) {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("navbar");

  return (
    <DropdownMenu
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          document.body.style.pointerEvents = "auto";
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant ?? "outline"}
          size="default"
          className={cn(
            "rounded-full border-secondary-50 text-primary-1 md:w-9 h-9",
            className
          )}
        >
          {/* Conditionally render icons */}
          {theme === "dark" ? (
            <div className="flex flex-row-reverse items-center gap-3 ">
              <Sun className="transition-all" />
              <span className="md:hidden">{t("dayMode")}</span>
            </div>
          ) : (
            <div className="flex flex-row-reverse items-center gap-3">
              <Moon className="transition-all" />
              <span className="md:hidden">{t("nightMode")}</span>
            </div>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[9999]">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
