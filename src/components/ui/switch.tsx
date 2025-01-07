"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { LANGUAGES } from "@/constants/enum";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<
    typeof SwitchPrimitives.Root & { lang: LANGUAGES }
  >
>(({ className, lang, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5.5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-gray-300 bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:!bg-[#76e8cd]",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.4)] ring-0 transition-transform",
        {
          "data-[state=checked]:!translate-x-4 data-[state=unchecked]:translate-x-0":
            lang === LANGUAGES.ENGLISH,
          "data-[state=checked]:-translate-x-4 data-[state=unchecked]:translate-x-0":
            lang === LANGUAGES.ARABIC,
        }
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
