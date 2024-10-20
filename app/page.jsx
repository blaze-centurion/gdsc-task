import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <main>
        <Navbar />
        <div className="login-container lg:w-[900px] md:w-[95vw] w-[90vw] m-auto bg-[#fff] mt-[3rem] relative flex justify-center items-center min-h-[550px] p-3 rounded-[5px]">
          <div className="p-[2rem] md:w-[50%] w-[100%] h-full">
            <h2 className="text-center text-[2rem] font-semibold">Login</h2>
            <div className="flex flex-col my-5">
              <input
                type="text"
                className="p-3 my-1 rounded-[7px] border border-[#d3d3d3] text-[17px] transition-all focus:border-secondary_purple"
                placeholder="Enter your name"
              />
              <input
                type="password"
                className="p-3 my-1 rounded-[7px] border border-[#d3d3d3] text-[17px] transition-all focus:border-secondary_purple"
                placeholder="Enter your password"
              />
              <button
                data-twe-ripple-init
                className="bg-primary_gradient mt-3 py-3 px-4 rounded-[7px] text-white font-semibold text-[17px]"
              >
                Login
              </button>
            </div>

            <p className="text-center text-[#7e7c7c] text-md">OR</p>

            <div className="flex justify-between items-center gap-4">
              <button
                data-twe-ripple-init
                className="flex items-center justify-center gap-3 p-3 my-2 rounded-[7px] border border-[#d3d3d3] flex-1 transition-all hover:border-secondary_purple"
              >
                <FaGoogle className="text-[19px]" />
                Google
              </button>
              <button
                data-twe-ripple-init
                className="flex items-center justify-center gap-3 p-3 my-2 rounded-[7px] border border-[#d3d3d3] flex-1 transition-all hover:border-secondary_purple"
              >
                <FaFacebookF className="text-[19px]" />
                Facebook
              </button>
            </div>
          </div>
          <div className="img-container min-w-[50%] min-h-[450px] h-full relative md:block hidden">
            <Image
              src="/assets/login.jpg"
              alt="Login Image"
              fill={true}
              className="m-auto"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
