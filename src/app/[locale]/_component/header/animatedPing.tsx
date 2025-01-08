import { cn } from "@/lib/utils";
import React from "react";

const AnimatedPing = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        "relative h-3 w-3 flex justify-center items-center",
        className
      )}
    >
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ring opacity-75 colors"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-ring"></span>
    </span>
  );
};

export default AnimatedPing;
