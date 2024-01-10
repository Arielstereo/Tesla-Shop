"use client";

import Link from "next/link";
import Title from "../../../components/title/Title";
import { useCartStore } from "../../../store/cartStore";
import DeliveryCard from "../../../components/card/DeliveryCard";
import OrderListCard from "../../../components/card/OrderListCard";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  const info = useCartStore((state) => state.info);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = useCartStore((state) => state.shipping);
  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  return (
    <div className="mx-4 lg:mx-8 xl:mx-24 2xl:mx-48 grid lg:grid-cols-2 lg:gap-12">
      <div>
        <Title title="CHECK ORDER" />
        <Link href={"/cart"} className="text-sm underline text-slate-400">
          EDIT ORDER
        </Link>
        <OrderListCard cart={cart} isCheckout={true} />
      </div>
      <DeliveryCard
        info={info}
        cart={cart}
        shipping={shipping}
        subtotal={subtotal}
        orderNumber={orderNumber}
        isLink={true}
      />
    </div>
  );
}
