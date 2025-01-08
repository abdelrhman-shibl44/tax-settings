import React from "react";
import SearchForm from "./search-form";
import UserOptions from "./user-options";

const Navbar = () => {
  return (
    <div className="container flex justify-between gap-4 bg-primary min-h-14 md:bg-transparent">
      <SearchForm className="hidden md:flex max-xl:self-baseline" />
      <UserOptions />
    </div>
  );
};

export default Navbar;
