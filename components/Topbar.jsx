import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";


const Topbar = ({ setIsSidebarActive}) => {
  return (
    <>
      <div className="topbar h-[60px] py-5 px-3 bg-white w-[100%] flex justify-between items-center">
      <button onClick={() => setIsSidebarActive(prev => !prev)} className="hover:bg-custom_gray transition-all w-[40px] h-[40px] rounded-[50%] items-center justify-center flex mx-1">
          <RxHamburgerMenu className="text-[22px]" />
        </button>

        <div className="flex items-center">
            <button className="hover:bg-custom_gray transition-all w-[40px] h-[40px] rounded-[50%] items-center justify-center flex mx-1">
            <IoNotificationsOutline className="text-[22px]" />
            </button>
            <button className="hover:bg-custom_gray transition-all w-[40px] h-[40px] rounded-[50%] items-center justify-center flex mx-1">
            <FiUser className="text-[22px]" />
            </button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
