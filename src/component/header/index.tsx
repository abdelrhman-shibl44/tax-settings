import React from "react";
import { LanguageSwitcher } from "./local-switcher";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <div className="bg-white dark:bg-black min-h-svh flex items-center justify-between w-full">
      {/* <span>Header</span> */}
      <LanguageSwitcher />
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
