import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import TaxCreateUpdate from "../../_component/tax-settings/tax-create-update";
import { Plus } from "lucide-react";
import TaxSettingsTable from "../../_component/tax-settings/tax-settings-table";
import { getCountriesOptions } from "@/constants/vat";

export default async function Vat() {
  const t = await getTranslations("vat");
  const countries = await getCountriesOptions();

  return (
    <div className="container">
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex items-center w-fit rounded-full mb-5">
              <Button
                size={"lg"}
                variant={"secondary"}
                className="rounded-full p-5 text-primary"
              >
                <Plus />
                {t("addTax")}
              </Button>
            </div>
          </DialogTrigger>
          <TaxCreateUpdate mode="create" countries={countries} />
        </Dialog>
      </div>
      <div className="border border-gray-200 dark:border-[#333] rounded-md mt-3">
        <div>
          <header className="p-5 dark:bg-[#2c2c2c] rounded-md">
            <h6 className="text-[17px] text-accent-dark-200 dark:text-[#bbb] ">
              {t("vatHeader")}
            </h6>
          </header>
          <div>
            <TaxSettingsTable countries={countries} />
          </div>
        </div>
      </div>
    </div>
  );
}
