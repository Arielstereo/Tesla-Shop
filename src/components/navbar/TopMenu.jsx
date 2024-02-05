"use client";

import { IoCartOutline } from "react-icons/io5";
import {
  Badge,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenuStore } from "../../store/menuStore";
import { useCartStore } from "../../store/cartStore";
import clsx from "clsx";
import SearchInput from "../../components/search/SearchInput";
import { Suspense, useEffect } from "react";

const TopMenu = () => {
  const openSideBar = useMenuStore((state) => state.openSideBar);
  const setInputValue = useMenuStore((state) => state.setInputValue);
  const cart = useCartStore((state) => state.cart);

  const badgeCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  const pathname = usePathname();
  const theme = useMenuStore((state) => state.isDarkMode);
  const changeTheme = useMenuStore((state) => state.toggleDarkMode);

  useEffect(() => {
    if (theme === true) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    changeTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Navbar className="bg-slate-200 dark:bg-slate-900 text-slate-800 dark:text-slate-200 fixed z-20 py-2">
      <NavbarBrand>
        <NavbarItem>
          <Button
            onClick={handleChangeTheme}
            className="bg-transparent text-slate-800 dark:text-slate-200 font-semibold pb-1"
          >
            {theme ? <FiSun size={25} /> : <FaRegMoon size={20} />}
          </Button>
        </NavbarItem>
        <Link
          className="font-semibold text-slate-800 dark:text-slate-50"
          href="/"
        >
          TESLA | SHOP
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-2">
        <NavbarItem>
          <Link
            className={
              pathname !== "/category/men"
                ? " hover:bg-slate-800 dark:hover:bg-slate-200 px-6 py-2 hover:text-slate-100 dark:hover:text-slate-800"
                : "px-6 py-2 hover:text-slate-100 text-sky-600 dark:text-sky-300 font-semibold"
            }
            href="/category/men"
          >
            MEN
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={
              pathname !== "/category/women"
                ? " hover:bg-slate-800 dark:hover:bg-slate-200 px-6 py-2 hover:text-slate-100 dark:hover:text-slate-800"
                : "px-6 py-2 hover:text-slate-100 text-sky-600 dark:text-sky-300 font-semibold"
            }
            href="/category/women"
          >
            WOMEN
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={
              pathname !== "/category/kid"
                ? " hover:bg-slate-800 dark:hover:bg-slate-200 px-6 py-2 hover:text-slate-100 dark:hover:text-slate-800"
                : "px-6 py-2 hover:text-slate-100 text-sky-600 dark:text-sky-300 font-semibold"
            }
            href="/category/kid"
          >
            KID
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem
          className={
            pathname === "/" ||
            pathname === "/category/men" ||
            pathname === "/category/women" ||
            pathname === "/category/kid"
              ? "hidden md:flex"
              : "hidden"
          }
        >
          <SearchInput setValue={setInputValue} />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Suspense>
            <Badge
              color="primary"
              size="lg"
              content={badgeCart}
              showOutline={false}
              className={clsx("mb-4", { hidden: badgeCart === 0 })}
            >
              <Link href="/cart">
                <IoCartOutline size={25} />
              </Link>
            </Badge>
          </Suspense>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={() => openSideBar()}
            className="bg-transparent text-slate-800 dark:text-slate-200 font-semibold text-md"
          >
            MENU
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopMenu;
