"use client";

import React, { useState } from "react";
import ChangeSettigsBtn from "./change-settings-btn";
import { useLocale, useTranslations } from "next-intl";
import { Switch } from "@/components/ui/switch";
import TaxCreateUpdate from "./tax-create-update";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const TaxSettingsTable = ({
  countries,
  taxPercentage = 15,
}: {
  countries: { id: string; name: string }[];
  taxPercentage?: number;
}) => {
  const t = useTranslations("vat");
  const locale = useLocale();

  const [isTaxEnabled, setIsTaxEnabled] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [prices, setPrices] = useState<number[]>([100, 200, 300]);

  const handleTaxToggle = async () => {
    setIsTaxEnabled((prev) => !prev);
    const adjustedPrices = prices.map((price) => {
      return !isTaxEnabled
        ? price * (1 + taxPercentage / 100)
        : price / (1 + taxPercentage / 100);
    });
    setPrices(adjustedPrices);
    // try {
    //   const res = await fetch("/api/tax-status", {});
    // } catch (e) {
    //   console.error(e);
    // }
  };
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files?.[0]);
    }
    const formData = new FormData();
    formData.append("vatFile", uploadedFile ?? "");
    // try {
    //   const res = await fetch("/api/upload", {
    //     body: JSON.stringify(formData),
    //     headers: { "Content-Type": "multipart/form-data" },
    //   });
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <div>
      {/* example  */}
      <div className="mb-4 px-5">
        <h2 className="text-lg font-semibold">{t("adjustedPrices")}</h2>
        <ul className="list-disc list-inside">
          {prices.map((price, index) => (
            <li key={index}>
              {price.toFixed(2)}
              {""}
              {isTaxEnabled ? `(+${taxPercentage}% tax)` : ""}
            </li>
          ))}
        </ul>
      </div>
      <table className="w-full">
        <tbody>
          {/* Tax On/Off Toggle */}
          <tr className="border-t border-t-gray-25 dark:border-[#333] text-sm text-accent-dark-300 dark:[#ccc]">
            <td className="py-3 px-5">{t("enableTax")}</td>
            <td className="text-left px-5">
              <Switch
                id="tax-toggle-switch"
                checked={isTaxEnabled}
                dir={locale}
                lang={locale}
                onCheckedChange={handleTaxToggle}
                className="!bg-transparent"
              />
            </td>
          </tr>
          {/* CR/VAT Upload */}
          <tr className="border-t border-t-gray-25 dark:border-[#333] text-sm text-accent-dark-300 dark:[#ccc]">
            <td className="px-5">{t("UploadCRVAT")}</td>
            <td className="px-5 max-w-44">
              <Input
                type="file"
                id="cr-vat-upload"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileUpload}
              />
            </td>
          </tr>

          <tr className="border-t border-t-gray-25 dark:border-[#333] text-sm text-accent-dark-300 dark:[#ccc]">
            <td className="py-3 px-5">{t("taxNumber")}</td>
            <td className="text-left">
              <ChangeSettigsBtn />
            </td>
          </tr>
          <tr className="border-t border-t-gray-25 dark:border-[#333] text-sm text-accent-dark-300 dark:[#ccc]">
            <td className="py-3 px-5">{t("linkToAuthority")}</td>
            <td className="text-left">
              <Link
                className={buttonVariants({ variant: "link" })}
                href="https://demo.salla.sa/apps/install/747360824"
              >
                {t("link")}
              </Link>
            </td>
          </tr>
          <tr className="border-t border-t-gray-25 dark:border-[#333] text-sm text-accent-dark-300 dark:[#ccc]">
            <td className="py-3 px-5">{t("shippingFeeExcludesTax")}</td>
            <td className="text-left px-5">
              <Switch
                dir={locale}
                className="!bg-transparent"
                lang={locale}
                id="tax-icon-switch"
              />
            </td>
          </tr>
          <tr className="border-t border-t-gray-25 dark:border-[#333] text-sm text-accent-dark-300 dark:[#ccc]">
            <td className="py-3 px-5">{t("showPricesIncludingTax")}</td>
            <td className="text-left px-5">
              <Switch dir={locale} lang={locale} id="tax-icon-switch" />
            </td>
          </tr>
          <tr className="border-t border-t-gray-25 dark:border-[#333] text-sm text-accent-dark-300 dark:[#ccc]">
            <td className="py-3 px-5">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center">
                    <span>15%</span>
                    <Button variant="link">
                      {t("countriesTaxPercentage")}
                    </Button>
                  </div>
                </DialogTrigger>
                <TaxCreateUpdate mode="edit" countries={countries} />
              </Dialog>
            </td>
            <td className="text-left px-5">
              <Switch dir={locale} lang={locale} id="tax-icon-switch" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxSettingsTable;
