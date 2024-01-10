"use client";

import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { IoTicketOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { useMenuStore } from "../../store/menuStore";
import clsx from "clsx";
import {Divider} from "@nextui-org/react";
import { IoShirtSharp } from "react-icons/io5";

const Sidebar = () => {
  const isOpenSideBar = useMenuStore((state) => state.isOpenSideBar);  
  const closeSideBar = useMenuStore((state) => state.closeSideBar);

  return (
    <div>
      {isOpenSideBar && (
        <div>
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>

          <div className="fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
        </div>
      )}

      <div className={
        clsx("fixed p-5 z-20 top-0 right-0 bg-slate-950 shadow-lg shadow-slate-600 w-[250px] md:w-[500px] h-screen transform transition-all duration-300",
        {
          "translate-x-full" : !isOpenSideBar
        })

      }>
        <button onClick={() => closeSideBar()}>
          <IoClose  size={30} className="absolute top-2 right-2 text-slate-400" />
        </button>
        <div className="flex flex-col gap-4 mt-8 text-slate-300 text-sm">
          <Link
            className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 w-full p-2 md:p-6 font-semibold"
            href={"/"}
          >
            <CgProfile size={20} />
            PROFILE
          </Link>

          <Link
            className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 w-full p-2 md:p-6 font-semibold"
            href={"/"}
          >
            <IoTicketOutline size={20} />
            ORDERS
          </Link>

          <Link
            className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 w-full p-2 md:p-6 font-semibold"
            href={"/auth/signin"}
          >
            <FiLogIn size={20} />
            LOGIN
          </Link>

          <Link
            className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 w-full p-2 md:p-6 font-semibold"
            href={"/"}
          >
            <CgLogOut size={20} />
            LOGOUT
          </Link>
          <Divider className="my-4 bg-slate-400 md:hidden" />
          <Link
            className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 w-full p-2 font-semibold md:hidden"
            href={"/category/men"}
          >
            <IoShirtSharp size={20} />
            MEN
          </Link>
          <Link
            className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 w-full p-2 font-semibold md:hidden"
            href={"/category/women"}
          >
            <IoShirtSharp size={20} />
            WOMEN
          </Link>
          <Link
            className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 w-full p-2 font-semibold md:hidden"
            href={"/category/kid"}
          >
            <IoShirtSharp size={20} />
            KID
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
