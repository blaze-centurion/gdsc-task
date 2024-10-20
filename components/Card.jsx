import { cn } from "@/lib/utils";
import React from "react";

const Card = ({ title, children, span }) => {
  return (
    <>
      <div className={cn("bg-white rounded-md card", span)}>
        <div className="card-header flex items-center justify-between py-3 px-4 border-0 border-b-2 border-custom_gray">
          <h2 className="font-semibold text-[20px]">{title}</h2>
        </div>
        <div className="card-content py-3 px-2">{children}</div>
      </div>
    </>
  );
};

export default Card;
