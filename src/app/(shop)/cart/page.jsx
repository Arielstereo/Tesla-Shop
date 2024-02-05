"use client";

import Link from "next/link";
import Title from "../../../components/title/Title";
import { useCartStore } from "../../../store/cartStore";
import { redirect } from "next/navigation";
import TeslaButton from "../../../components/button/TeslaButton";
import OrderListCard from "../../../components/card/OrderListCard";
import { useSession } from "next-auth/react";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const shipping = useCartStore((state) => state.shipping);
  const info = useCartStore((state) => state.info);

  const { data } = useSession();
  console.log(data);
  

  cart.length === 0 && redirect("/cart/empty");

  return (
    <div className="mx-4 lg:mx-8 xl:mx-24 2xl:mx-48 grid lg:grid-cols-2 lg:gap-4 text-slate-800 dark:text-slate-200">
      <div>
        <Title title="CART" />
        <Link href={"/"} className="text-sm underline">
          CONTINUE SHOPPING
        </Link>
        <OrderListCard cart={cart} removeItem={removeItem} />
      </div>
      <div className="bg-slate-200 dark:bg-slate-800 w-full h-64 border-t-4 border-slate-400 dark:border-slate-100 my-16 md:mt-48 rounded-b-lg">
        <div className="pt-8 px-12">
          <h2>ORDER SUMMARY</h2>
          <div className="flex justify-between mt-6">
            <span className="text-sm">SHIPPING</span>
            <span className="text-sm">u$s {shipping}</span>
          </div>
          <div className="flex justify-between mt-12">
            <h3>SUBTOTAL</h3>
            <span>
              u$s{" "}
              {cart.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              ) + shipping}
            </span>
          </div>
                {
                  data ? (
                    info.name?.length === undefined || info.surname?.length === undefined || info.address?.length === undefined || info.city?.length === undefined || info.country?.length === undefined || info.phone?.length === undefined ? (
                      <TeslaButton title={"CONTINUE"} href={"/checkout/address"} />
                    ) : (
                      <TeslaButton title={"CONTINUE"} href={"/checkout"} />
                    )
                  ) : (
                    <TeslaButton title={"LOGIN TO CONTINUE "} href={"/auth/signin"} />
                  )
                }
        </div>
      </div>
    </div>
  );
}
