"use client";

import Link from "next/link";
import Title from "../../../components/title/Title";
import { useCartStore } from "../../../store/cartStore";
import { redirect } from "next/navigation";
import TeslaButton from "../../../components/button/TeslaButton";
import OrderListCard from "../../../components/card/OrderListCard";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const shipping = useCartStore((state) => state.shipping);

  cart.length === 0 && redirect("/cart/empty");

  return (
    <div className="mx-4 lg:mx-8 xl:mx-24 2xl:mx-48 grid lg:grid-cols-2 lg:gap-4">
      <div>
        <Title title="CART" />
        <Link href={"/"} className="text-sm underline text-slate-400">
          CONTINUE SHOPPING
        </Link>
        <OrderListCard cart={cart} removeItem={removeItem} />
      </div>
      <div className="bg-slate-900 w-full h-64 border-t-4 border-slate-100 my-16 md:mt-48 rounded-b-lg">
        <div className="pt-8 px-12">
          <h2>ORDER SUMMARY</h2>
          <div className="flex justify-between mt-6">
            <span className="text-sm text-slate-500">SHIPPING</span>
            <span className="text-sm text-slate-500">u$s {shipping}</span>
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
          <TeslaButton title={"CONTINUE"} href={"/checkout/address"} />
        </div>
      </div>
    </div>
  );
}
