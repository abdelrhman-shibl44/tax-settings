"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Check, Copy, Share2 } from "lucide-react";
import React, { useState } from "react";

const StoreButton = () => {
  const [urlStored, setUrlStored] = useState(false);
  const handleCopy = () => {
    const storeUrl =
      "https://salla.sa/giftshop2024/?expires=1735873653&identifier=2094195128&utm_source=dashboard&signature=fc89d7149eaa5776253ca7fb8876bf11b5e60d5a3fb237f8cafaa0f328039cbe";
    navigator.clipboard.writeText(storeUrl);
    setUrlStored(true);
    setTimeout(() => setUrlStored(false), 1500);
  };

  const handleWhatsApp = () => {
    const message = "Check out this store!";
    const phoneNumber = "+1234567890"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    const width = 500;
    const height = 700;

    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    window.open(
      url,
      "_blank",
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-secondary-50 hover:bg-secondary-50 text-primary-1 h-full py-1 pe-2 rounded-e-full relative">
          {urlStored ? <Check /> : <Share2 size={12} />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-white text-start rounded-lg shadow-lg mt-2 w-36 text-accent-dark-300 text-sm"
      >
        <DropdownMenuItem
          onClick={handleCopy}
          className="cursor-pointer border-b-2 flex justify-end p-2 items-center gap-2 transition-colors"
        >
          نسخ الرابط المتجر
          <Copy size={12} />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleWhatsApp}
          className="cursor-pointer flex justify-end p-2 items-center gap-2 transition-colors"
        >
          واتساب <FaWhatsapp size={12} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StoreButton;
