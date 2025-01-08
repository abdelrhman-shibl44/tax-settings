"use client";

// import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { House, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useLocale, useTranslations } from "next-intl";
import { Switch } from "@/components/ui/switch";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const ChangeSettigsBtn = () => {
  // const [active, setActive] = useState(true);
  const locale = useLocale();
  const t = useTranslations("vat.change-settings-dialog");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">{t("text_btn")}</Button>
      </DialogTrigger>
      <DialogOverlay
        className="fixed inset-0 bg-primary opacity-50  z-[9999]" // Fullscreen backdrop with opacity
      />
      <DialogContent
        dir={locale}
        className="sm:max-w-[725px] z-[9999] fixed p-0 gap-0 top-56"
        hideCloseButton
      >
        <DialogHeader className="bg-secondary-50 dark:bg-[#2c2c2c] rounded-md text-primary dark:text-[#ddd] py-[15px] px-5 text-start">
          <DialogTitle className="text-[15px] flex items-center justify-start">
            {t("business_tax_number")}
          </DialogTitle>
          <DialogClose
            asChild
            className="absolute end-3 top-2.5 text-sm font-normal cursor-pointer"
          >
            <X size={20} />
          </DialogClose>
        </DialogHeader>
        <div className="grid gap-4 p-5">
          <ol className="flex justify-between gap-3 mb-2.5">
            <li
              className={`rounded-full ${
                true ? "w-full bg-secondary-50 flex-1 gap-3 py-1 px-2" : ""
              } flex justify-start items-center text-link-color`}
            >
              <span
                className={`-right-4 ${
                  true ? "bg-primary text-secondary-50" : ""
                } text-link-color w-8 h-8 text-center flex items-center justify-center rounded-full text-sm`}
              >
                1
              </span>
              <span className={true ? "text-primary text-[14px]" : ""}>
                {t("enter_tax_number")}
              </span>
            </li>
            <li
              className={`flex items-center justify-start py-1 px-2 ${
                false
                  ? "bg-secondary-50 flex-1 rounded-full gap-3 px-2"
                  : "bg-transparent"
              }`}
            >
              <span
                className={`-right-4 ${
                  false
                    ? "bg-primary gap-3 text-secondary-50"
                    : "bg-transparent"
                } text-primary w-8 h-8 text-center flex items-center justify-center rounded-full text-sm`}
              >
                2
              </span>
              <span
                className={cn(
                  "text-primary",
                  true && "text-link-color text-[14px]"
                )}
              >
                {" "}
                {t("verify_with_platform")}
              </span>
            </li>
          </ol>

          {/* Input Section */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="tax-number"
              className="text-start text-accent-dark-200 dark:text-[#bbb] text-[13px]"
            >
              {t("business_tax_number")}
            </Label>
            <div className="flex items-center border border-gray-200 dark:border-[#444]  rounded-md w-full bg-white dark:bg-[#272727]">
              <div className="px-3 flex items-center">
                <House size={18} className="text-gray-400" />
              </div>
              <Input
                id="tax-number"
                maxLength={30}
                type="number"
                defaultValue="546987552"
                className="w-full border-none text-accent-dark-200 dark:text-[#bbb] !text-xs shadow-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 rounded-none px-2"
              />
            </div>
          </div>

          <div className="items-top flex space-x-2 gap-4">
            <Checkbox id="show-tax-num" className="border-link-color" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="show-tax-num"
                className="text-[15px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-accent-dark-200 dark:text-[#ccc]"
              >
                {t("display_tax_number")}
              </Label>
              <p className="text-xs text-muted-foreground dark:text-[#bbbb]">
                {t("display_tax_number_note")}
              </p>
            </div>
          </div>
          <Separator />
          <div className="items-center flex flex-row-reverse justify-between gap-4 text-[15px]">
            <Switch lang={locale} id="tax-icon-switch" />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="tax-icon-switch"
                className="text-[15px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-accent-dark-200 dark:text-[#ccc]"
              >
                {t("display_tax_icon")}
              </Label>
              <p className="text-xs text-muted-foreground dark:text-[#bbbb]">
                {t("display_tax_icon_note")}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <DialogFooter className="p-5 flex !justify-between items-center py-[14px] px-5 bg-gray-100 dark:bg-[#2c2c2c] ">
          <Button
            className="bg-secondary-50 text-primary shadow-none hover:bg-secondary-50"
            type="submit"
          >
            {t("save")}
          </Button>
          <DialogClose className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md cursor-pointer">
            {t("close")}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChangeSettigsBtn;
