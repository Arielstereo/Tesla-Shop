"use client";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import {
  Badge,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenuStore } from "../../store/menuStore";
import { useCartStore } from "../../store/cartStore";
import clsx from "clsx";
import SearchInput from "../../components/search/SearchInput";
import { Suspense } from "react";


const TopMenu = () => {
  const openSideBar = useMenuStore((state) => state.openSideBar);
  const openSearch = useMenuStore((state) => state.openSearch);
  const search = useMenuStore((state) => state.isOpenSearch);
  const setInputValue = useMenuStore((state) => state.setInputValue) 
  const cart = useCartStore((state) => state.cart);

  const badgeCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  const pathname = usePathname();

  return (
    <Navbar className="bg-[#111111] text-slate-400 fixed z-10">
      <NavbarBrand>
        <Link className="font-semibold text-slate-50" href="/">
          TESLA | SHOP
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem>
          <Link
            className={
              pathname !== "/category/men"
                ? " hover:bg-gray-800 px-6 py-2 hover:text-slate-100"
                : "px-6 py-2 hover:text-slate-100 text-sky-300 font-semibold"
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
                ? " hover:bg-gray-800 px-6 py-2 hover:text-slate-100"
                : "px-6 py-2 hover:text-slate-100 text-sky-300 font-semibold"
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
                ? " hover:bg-gray-800 px-6 py-2 hover:text-slate-100"
                : "px-6 py-2 hover:text-slate-100 text-sky-300 font-semibold"
            }
            href="/category/kid"
          >
            KID
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className={
          pathname === "/" || pathname === "/category/men" || pathname === "/category/women" || pathname === "/category/kid"
          ? "hidden md:flex"
          : "hidden"
        }>
          {search ? (
            <SearchInput setValue={setInputValue} />
          ) : (
            <button onClick={() => openSearch()}>
              <IoSearchOutline className="" size={23} />
            </button>
          )}
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
              <IoCartOutline className="" size={25} />
            </Link>
          </Badge>
          </Suspense>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={() => openSideBar()}
            className="bg-transparent text-slate-400 font-semibold pt-1"
          >
            MENU
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopMenu;
