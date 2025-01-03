// links.ts or links.tsx
import { getTranslations } from "next-intl/server";

export async function getLinks() {
  const t = await getTranslations("sidebar.labels");
  const alts = await getTranslations("sidebar.alts");

  return [
    { id: crypto.randomUUID(), label: t("home"), icon: "House" },
    { id: crypto.randomUUID(), label: t("products"), icon: "Shirt" },
    { id: crypto.randomUUID(), label: t("orders"), icon: "Package2" },
    { id: crypto.randomUUID(), label: t("customers"), icon: "Users" },
    { id: crypto.randomUUID(), label: t("reports"), icon: "ChartPie" },
    {
      id: crypto.randomUUID(),
      label: t("questions_reviews"),
      icon: "MessageSquareText",
    },
    { id: crypto.randomUUID(), label: t("info_pages"), icon: "BookText" },
    { id: crypto.randomUUID(), label: t("marketing_tools"), icon: "MicVocal" },
    {
      title: t("channels"),
      nestedLinks: [
        { id: crypto.randomUUID(), label: t("sale_point"), icon: "MicVocal" },
        {
          id: crypto.randomUUID(),
          label: t("local"),
          icon: "MicVocal",
          new: t("new"),
        },
      ],
    },
    {
      title: t("support_tools"),
      nestedLinks: [
        {
          id: crypto.randomUUID(),
          label: t("merchant_services"),
          icon: "MicVocal",
        },
        {
          id: crypto.randomUUID(),
          label: t("influencers"),
          icon: "MicVocal",
        },
        {
          id: crypto.randomUUID(),
          label: t("sweeply_ads"),
          icon: "MicVocal",
          new: t("new"),
        },
      ],
    },
    {
      title: t("settings"),
      nestedLinks: [
        {
          id: crypto.randomUUID(),
          label: t("store_package"),
          icon: "MicVocal",
        },
        {
          id: crypto.randomUUID(),
          label: t("store_settings"),
          icon: "MicVocal",
        },
        {
          id: crypto.randomUUID(),
          label: t("wallet_invoices"),
          icon: "MicVocal",
        },
      ],
    },
    {
      title: t("store_appearance"),
      nestedLinks: [
        { id: crypto.randomUUID(), label: t("theme_store"), icon: "MicVocal" },
        {
          id: crypto.randomUUID(),
          label: t("store_design"),
          icon: "MicVocal",
        },
        {
          id: crypto.randomUUID(),
          label: t("app_builder"),
          icon: "MicVocal",
        },
      ],
    },
    {
      title: t("app_store"),
      nestedLinks: [
        {
          id: crypto.randomUUID(),
          label: t("installed_apps"),
          icon: "MicVocal",
        },
        {
          id: crypto.randomUUID(),
          label: t("visit_app_store"),
          icon: "MicVocal",
        },
      ],
    },
    {
      title: t("merchant_app"),
      nestedLinks: [
        {
          id: crypto.randomUUID(),
          label: t("google_play"),
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/googleplay.png",
          href: "https://play.google.com/store/apps/details?id=com.emoney.sallacp",
          alt: alts("google_play"),
        },
        {
          id: crypto.randomUUID(),
          label: t("app_store_label"),
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/appstore.png",
          href: "https://itunes.apple.com/sa/app/slt-ttbyq-altajr/id1148458340?mt=8",
          alt: alts("app_store"),
        },
      ],
    },
  ];
}
