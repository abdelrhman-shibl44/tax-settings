import React from "react";
import ChangeSettigsBtn from "./change-settings-btn";
import { useLocale, useTranslations } from "next-intl";
import { Switch } from "@/components/ui/switch";
import TaxCreateUpdate from "./tax-create-update";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

const TaxSettingsTable = ({
  countries,
}: {
  countries: { id: string; name: string }[];
}) => {
  const t = useTranslations("vat");
  const locale = useLocale();
  return (
    <table className="w-full">
      <tbody>
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
                  <Button variant="link">{t("countriesTaxPercentage")}</Button>
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
  );
};

export default TaxSettingsTable;
