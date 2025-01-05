import React from "react";
import SearchForm from "./search-form";
import UserOptions from "./user-options";

const Navbar = () => {
  return (
    <div className="container flex justify-between gap-4 bg-primary h-14 md:bg-transparent">
      <SearchForm />
      <UserOptions />
    </div>
  );
};

export default Navbar;
