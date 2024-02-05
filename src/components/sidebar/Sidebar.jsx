"use client";

import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { IoTicketOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { useMenuStore } from "../../store/menuStore";
import clsx from "clsx";
import { Divider } from "@nextui-org/react";
import { IoShirtSharp } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";

const Sidebar = () => {
  const isOpenSideBar = useMenuStore((state) => state.isOpenSideBar);
  const closeSideBar = useMenuStore((state) => state.closeSideBar);

  const { data } = useSession();

  return (
    <div>
      {isOpenSideBar && (
        <div>
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-slate-800 opacity-30"></div>
          <div className="fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
        </div>
      )}
      <div
        className={clsx(
          "fixed p-5 z-20 top-0 right-0 bg-slate-200 dark:bg-slate-800 shadow-lg shadow-slate-600 w-[250px] md:w-[500px] h-screen transform transition-all duration-300",
          {
            "translate-x-full": !isOpenSideBar,
          }
        )}
      >
        <button onClick={() => closeSideBar()}>
          <IoClose
            size={30}
            className="absolute top-2 right-2 text-slate-800 dark:text-slate-400"
          />
        </button>
        <div className="flex flex-col gap-4 mt-8 text-slate-600 dark:text-slate-300 text-sm">
          {data?.user?.isAdmin && (
            <div>
              <Link
                className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-200 dark:hover:text-slate-800 w-full p-2 md:p-6 font-semibold"
                href={"/dashboard"}
              >
                <CgProfile size={20} />
                PROFILE
              </Link>
              <Link
                className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-200 dark:hover:text-slate-800 w-full p-2 md:p-6 font-semibold"
                href={"/orders"}
              >
                <IoTicketOutline size={20} />
                ORDERS
              </Link>
              <button
                className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-200 dark:hover:text-slate-800 w-full p-2 md:p-6 font-semibold"
                onClick={() => signOut()}
              >
                <CgLogOut size={20} />
                LOGOUT
              </button>
            </div>
          )} 
          {
            data?.user?.isAdmin === false &&  
            (
              (
                <div>
                  <Link
                    className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-200 dark:hover:text-slate-800 w-full p-2 md:p-6 font-semibold"
                    href={"/dashboard"}
                  >
                    <CgProfile size={20} />
                    PROFILE
                  </Link>
                  <button
                    className="flex gap-4 hover:bg-slate-800 hover:text-slate-50  dark:hover:bg-slate-200 dark:hover:text-slate-800 w-full p-2 md:p-6 font-semibold"
                    onClick={() => signOut()}
                  >
                    <CgLogOut size={20} />
                    LOGOUT
                  </button>
                </div>
              )
            )
          } 
          
          {!data && (
            <Link
              className="flex gap-4 hover:bg-slate-800 hover:text-slate-50 dark:hover:bg-slate-200 dark:hover:text-slate-800 w-full p-2 md:p-6 font-semibold"
              href={"/auth/signin"}
            >
              <FiLogIn size={20} />
              LOGIN
            </Link>
          )}
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
