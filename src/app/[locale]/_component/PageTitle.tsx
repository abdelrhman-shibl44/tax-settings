"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, Home, LifeBuoy } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Messages } from "@/types/i18n";

const Breadcrumb = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("sidebar.labels");

  // Split the path into segments and remove empty strings
  const pathSegments = pathname.split("/").filter(Boolean);

  // Function to generate the URL for each segment
  const getSegmentUrl = (index: number) => {
    return `/${locale}/${pathSegments.slice(0, index + 1).join("/")}`;
  };

  // Function to format segment text
  const formatSegmentText = (
    text: keyof Messages["sidebar"]["labels"]
  ): string => {
    return t(text)
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const ChevronIcon = () => (
    <ChevronRight
      size={16}
      className={`mx-2 text-gray-400 ${isRTL ? "rotate-180" : "rotate-0"}`}
    />
  );

  return (
    <nav
      className="flex items-center justify-between text-sm container mt-2.5 py-5"
      dir={locale}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href={`/${locale}`}
            className="text-link-color hover:text-link-hover flex items-center me-2"
          >
            <Home size={16} />
          </Link>
        </li>

        {pathSegments.map((segment, index) => (
          <React.Fragment key={index}>
            <span className="text-primary">/</span>
            <li>
              <Link
                href={getSegmentUrl(index)}
                className={`text-sm ${
                  index === pathSegments.length - 1
                    ? "text-gray-400 hover:text-link-hover"
                    : "font-medium text-link-color hover:text-link-hover"
                }`}
              >
                {formatSegmentText(
                  segment as keyof Messages["sidebar"]["labels"]
                )}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
      <div className="bg-secondary-50 text-primary p-2 rounded-full max-h-7 text-sm flex items-center gap-1 cursor-pointer hover:!bg-secondary-50 transition-colors">
        <LifeBuoy size={17} />
        {t("help")}
        <ChevronDown size={17} className="ps-1 font-bold" />
      </div>
    </nav>
  );
};

export default Breadcrumb;
