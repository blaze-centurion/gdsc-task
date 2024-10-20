"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdOutlineInventory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import SidebarLinkItem from "./SidebarLinkItem";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <>
      <div
        className={cn(
          "transition-all border-0 border-r-2 border-[#eee] h-[100vh] overflow-auto bg-white pb-3 md:relative fixed",
          isSidebarActive ? `lg:w-[300px] w-[0]` : `lg:w-[0] w-[300px]`
        )}
      >
        <h1 className="text-[2rem] relative h-[60px] pl-3 font-semibold text-left border-0 border-b-2 border-[#eee] flex items-center justify-start">
          <button
            className={cn(
              "absolute right-[10px] top-[50%] translate-y-[-50%] text-[30px] md:hidden block"
            )}
            onClick={() => setIsSidebarActive(prev => !prev)}
          >
            <RxCross2 />
          </button>
          <Link href="/">
            <Image src="/assets/logo.svg" alt="Logo" width={140} height={140} />
          </Link>
        </h1>

        <ul className="w-[100%]  mt-[2rem] pl-3">
          <SidebarLinkItem active={true} title="Dashboard" icon={<FiHome />} />
          <SidebarLinkItem title="Products" icon={<FiShoppingCart />} />
          <SidebarLinkItem title="Sales" icon={<AiOutlineStock />} />
          <SidebarLinkItem title="Customers" icon={<PiUsersThreeBold />} />
          <SidebarLinkItem title="Inventory" icon={<MdOutlineInventory />} />
          <SidebarLinkItem title="Settings" icon={<IoSettingsOutline />} />
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
