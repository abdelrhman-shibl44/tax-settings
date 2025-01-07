// links.ts or links.tsx
import { getTranslations } from "next-intl/server";

export default async function getLinks() {
  const t = await getTranslations("sidebar.labels");
  const alts = await getTranslations("sidebar.alts");

  return [
    {
      id: crypto.randomUUID(),
      label: t("home"),
      icon: "House",
      href: "/",
    },
    {
      id: crypto.randomUUID(),
      label: t("products"),
      icon: "Shirt",
      href: "/products",
    },
    {
      id: crypto.randomUUID(),
      label: t("orders"),
      icon: "Package2",
      href: "/orders",
    },
    {
      id: crypto.randomUUID(),
      label: t("customers"),
      icon: "Users",
      href: "/customers",
    },
    {
      id: crypto.randomUUID(),
      label: t("reports"),
      icon: "ChartPie",
      href: "/reports",
    },
    {
      id: crypto.randomUUID(),
      label: t("questions_reviews"),
      icon: "MessageSquareText",
      href: "/questions-reviews",
    },
    {
      id: crypto.randomUUID(),
      label: t("info_pages"),
      icon: "BookText",
      href: "/info-pages",
    },
    {
      id: crypto.randomUUID(),
      label: t("marketing_tools"),
      icon: "MicVocal",
      href: "/marketing-tools",
    },
    {
      title: t("channels"),
      nestedLinks: [
        {
          id: crypto.randomUUID(),
          label: t("sale_point"),
          icon: "MicVocal",
          href: "/channels/sale-point",
        },
        {
          id: crypto.randomUUID(),
          label: t("local"),
          icon: "MicVocal",
          new: t("new"),
          href: "/channels/local",
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
          href: "/support-tools/merchant-services",
        },
        {
          id: crypto.randomUUID(),
          label: t("influencers"),
          icon: "MicVocal",
          href: "/support-tools/influencers",
        },
        {
          id: crypto.randomUUID(),
          label: t("sweeply_ads"),
          icon: "MicVocal",
          new: t("new"),
          href: "/support-tools/sweeply-ads",
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
          href: "/settings/store-package",
        },
        {
          id: crypto.randomUUID(),
          label: t("store_settings"),
          icon: "MicVocal",
          href: "/settings/store-settings",
        },
        {
          id: crypto.randomUUID(),
          label: t("wallet_invoices"),
          icon: "MicVocal",
          href: "/settings/wallet-invoices",
        },
      ],
    },
    {
      title: t("store_appearance"),
      nestedLinks: [
        {
          id: crypto.randomUUID(),
          label: t("theme_store"),
          icon: "MicVocal",
          href: "/store-appearance/theme-store",
        },
        {
          id: crypto.randomUUID(),
          label: t("store_design"),
          icon: "MicVocal",
          href: "/store-appearance/store-design",
        },
        {
          id: crypto.randomUUID(),
          label: t("app_builder"),
          icon: "MicVocal",
          href: "/store-appearance/app-builder",
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
          href: "/app-store/installed-apps",
        },
        {
          id: crypto.randomUUID(),
          label: t("visit_app_store"),
          icon: "MicVocal",
          href: "/app-store/browse",
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
          isExternal: true,
        },
        {
          id: crypto.randomUUID(),
          label: t("app_store_label"),
          img: "https://cdn.assets.salla.network/prod/admin/cp/assets/images/appstore.png",
          href: "https://itunes.apple.com/sa/app/slt-ttbyq-altajr/id1148458340?mt=8",
          alt: alts("app_store"),
          isExternal: true,
        },
      ],
    },
  ];
}

export async function getOptionsLinks() {
  const t = await getTranslations("navbar");
  return [
    { name: t("profile"), icon: "CreditCard" },
    { name: t("platformUpdates"), icon: "User" },
    { name: t("notifications"), icon: "ChevronDown" },
    { name: t("suggestions"), icon: "Keyboard" },
  ];
}
