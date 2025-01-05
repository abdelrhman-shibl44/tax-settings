import React from "react";
import SidebarClient from "./sidebarClient.tsx";
import getLinks from "@/constants/sidebar";
const Sidebar = async () => {
  const links = await getLinks();
  return <SidebarClient links={links} />;
};

export default Sidebar;
