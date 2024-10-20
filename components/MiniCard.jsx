import { cn } from "@/lib/utils";
import React from "react";

const MiniCard = ({ title, value, bg_class, title_color, value_color }) => {
  return (
    <>
      <div className={cn("card flex-1 min-w-[250px] min-h-[120px] max-w-[450px] bg-[#fff] p-5 pb-7 rounded-md", bg_class)}>
        <div className="content">
          <h3 className={cn("text-[14px]", title_color)}>{title}</h3>
          <h2 className={cn("text-[26px] font-bold", value_color)}>{value}</h2>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
