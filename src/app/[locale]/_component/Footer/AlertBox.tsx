import { buttonVariants } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

const AlertBox = async () => {
  const t = await getTranslations("alertBox");

  return (
    <div className="fixed w-full bg-primary bottom-0 p-0 border-t-4 border-[rgba(30,47,50,.3)] z-[9999]">
      <div className="container text-center text-white flex justify-center items-center gap-2 md:gap-10 text-sm py-2">
        <article>
          <span className="text-start">
            <b>{t("message")}</b>
          </span>
        </article>
        <Link
          href="https://demo.salla.sa/demo/redirect"
          className={`${buttonVariants({
            size: "lg",
            variant: "secondary",
          })} btn-tiffany btn-xl px-1 max-sm:w-[40%] text-bold text-style-none`}
        >
          {t("buttonText")}
        </Link>
      </div>
    </div>
  );
};

export default AlertBox;
