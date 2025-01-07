"use client";

import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronsUpDown, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { DialogOverlay } from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaPercentage } from "react-icons/fa";

type TaxCreateUpdate = {
  mode: string;
  countries: { id: string; name: string }[];
};

const TaxCreateUpdate = ({ mode, countries }: TaxCreateUpdate) => {
  const locale = useLocale();
  const t = useTranslations("vat");
  const isEdit = mode === "edit";
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <DialogOverlay className="fixed inset-0 bg-primary-1 opacity-40 z-[9999]" />
      <DialogContent
        dir={locale}
        className="top-36 sm:max-w-[798px] w-full bg-white z-[9999] p-0 gap-0"
        hideCloseButton
      >
        <DialogHeader className="bg-secondary-50 rounded-md text-primary-1 py-[15px] px-5 text-start">
          <DialogTitle className="text-[15px] flex items-center justify-start">
            {isEdit ? t("dialog.update") : t("dialog.create")}
          </DialogTitle>
          <DialogClose
            asChild
            className="absolute end-3 top-2.5 text-sm font-normal cursor-pointer"
          >
            <X size={20} />
          </DialogClose>
        </DialogHeader>
        <div className="grid gap-4 p-5">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between w-full"
              >
                {value
                  ? countries.find((country) => country.name === value)?.name
                  : t("dialog.selectCountry")}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 z-[9999]  w-[750px] inline-block">
              <Command className="w-full">
                <CommandInput />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    {countries?.map((country) => (
                      <CommandItem
                        key={country.id}
                        value={country.name}
                        onSelect={(currentValue) => {
                          setValue(
                            currentValue === country.name ? currentValue : ""
                          );
                          setOpen(false);
                        }}
                      >
                        <span
                          className={`${
                            country.name === value
                              ? "text-primary-1"
                              : "cursor-pointer"
                          }`}
                        >
                          {country.name}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <div
            // dir={locale}
            className="flex items-center border border-gray-200 rounded-md w-full bg-white"
          >
            <Input
              dir={locale}
              id="tax-number"
              maxLength={30}
              type="number"
              placeholder={t("taxNumber")}
              className="w-full border-none text-accent-dark-200 !text-xs shadow-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 rounded-none px-2"
            />
            <div className="px-3 flex items-center border h-full">
              <FaPercentage size={18} className="text-gray-400" />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <DialogFooter className="p-5 flex !justify-between items-center py-[14px] px-5 bg-gray-100">
          <Button
            size={"lg"}
            className="bg-secondary-50 text-primary-1 shadow-none hover:bg-secondary-50"
            type="submit"
          >
            {isEdit ? t("dialog.save") : t("dialog.update")}
          </Button>
          {isEdit ? (
            <Button
              size={"lg"}
              className="border border-ring bg-transparent hover:bg-transparent text-ring shadow-none"
              type="button"
            >
              {t("dialog.delete")}
            </Button>
          ) : (
            ""
          )}
        </DialogFooter>
      </DialogContent>
    </>
  );
};

export default TaxCreateUpdate;
