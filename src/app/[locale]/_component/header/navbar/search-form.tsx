"use client";
import { JSX, useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { AlertCircle, Loader, Search } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useLocale, useTranslations } from "next-intl";
import { LANGUAGES } from "@/constants/enum";
import { onSearch } from "@/app/[locale]/_actions/searchForm";

// Define types for options
type Option = {
  placeholder: string;
  icon: JSX.Element | string;
  tooltipMessage?: string;
};

type Options = {
  requests: Option;
  products: Option;
  clients: Option;
};

export default function SearchForm() {
  const t = useTranslations("searchForm");
  const lang = useLocale();
  const isAr = lang === LANGUAGES.ARABIC;
  const [selectedOption, setSelectedOption] =
    useState<keyof Options>("requests");
  const [inputValue, setInputValue] = useState("");
  // Placeholder and icon mapping
  const options: Options = {
    requests: {
      placeholder: t("placeholder.requests"),
      icon: <AlertCircle size={18} className="text-primary" />,
      tooltipMessage: t("tooltipMessage.requests"),
    },
    products: {
      placeholder: t("placeholder.products"),
      icon: "",
    },
    clients: {
      placeholder: t("placeholder.clients"),
      icon: "",
    },
  };

  const initialState = {};
  const [state, formAction, isPending] = useActionState(onSearch, initialState);
  return (
    <form
      action={formAction}
      // onSubmit={handleSearch}
      className="hidden md:flex items-center min-w-48 w-[300px]! md:w-[400px] lg:w-[580px]"
    >
      {/* Input Field */}
      <div className="relative flex-1">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={options[selectedOption]?.placeholder ?? ""}
          className="pl-10 rounded-e-none"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl">
          {options[selectedOption]?.tooltipMessage ? (
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span>{options[selectedOption].icon}</span>
                </Tooltip.Trigger>
                <Tooltip.Content className="p-2 bg-secondary-50 text-primary-1 max-w-48 rounded mt-3 text-xs">
                  {options[selectedOption].tooltipMessage}
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          ) : (
            options[selectedOption]?.icon ?? ""
          )}
        </span>
      </div>

      <Select
        value={selectedOption}
        onValueChange={(value) => setSelectedOption(value as keyof Options)}
      >
        <SelectTrigger className="w-32 rounded-none border-r-0">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="requests">{t("requests")}</SelectItem>
          <SelectItem value="products">{t("products")}</SelectItem>
          <SelectItem value="clients">{t("clients")}</SelectItem>
        </SelectContent>
      </Select>

      {/* Search Button */}
      <Button
        type="submit"
        disabled={isPending}
        className="flex items-center rounded-s-none bg-secondary-50 text-primary-1"
      >
        {isPending ? (
          <Loader className="animate-spin" />
        ) : (
          <Search className={isAr ? "" : "rotate-90"} />
        )}
      </Button>
    </form>
  );
}
