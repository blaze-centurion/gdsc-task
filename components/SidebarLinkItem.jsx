
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const SidebarLinkItem = ({title, icon, active}) => {
  return (
    <>
      <li className={cn("flex items-center font-[500] text-[19px] py-4 px-3 my-2 text-black transition-all cursor-pointer hover:text-white hover:bg-secondary_purple rounded-s-[15px]", active && 'active-db-item')}>
        {icon}

        <Link className="pl-2" href="/dashboard">
          {title}
        </Link>
      </li>
    </>
  );
};

export default SidebarLinkItem;
