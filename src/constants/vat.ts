import { getTranslations } from "next-intl/server";

export async function getCountriesOptions() {
  const t = await getTranslations("vat.countries");
  return [
    { id: "all", name: t("all") },
    { id: "sa", name: t("sa") },
    { id: "ae", name: t("ae") },
    { id: "kw", name: t("kw") },
    { id: "qa", name: t("qa") },
    { id: "bh", name: t("bh") },
    { id: "iq", name: t("iq") },
    { id: "eg", name: t("eg") },
    { id: "jo", name: t("jo") },
    { id: "lb", name: t("lb") },
    { id: "sy", name: t("sy") },
    { id: "om", name: t("om") },
    { id: "ye", name: t("ye") },
    { id: "ly", name: t("lb") },
    { id: "sd", name: t("sd") },
    { id: "ma", name: t("ma") },
    { id: "dz", name: t("dz") },
    { id: "tn", name: t("tn") },
    { id: "ps", name: t("ps") },
    { id: "mr", name: t("mr") },
    { id: "cm", name: t("cm") },
    { id: "ng", name: t("ng") },
    { id: "gh", name: t("gh") },
    { id: "ke", name: t("ke") },
  ];
}
