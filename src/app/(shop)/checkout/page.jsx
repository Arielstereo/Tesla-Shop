"use client";

import Link from "next/link";
import Title from "../../../components/title/Title";
import { useCartStore } from "../../../store/cartStore";
import DeliveryCard from "../../../components/card/DeliveryCard";
import OrderListCard from "../../../components/card/OrderListCard";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function CheckoutPage() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const info = useCartStore((state) => state.info);
  const isPaid = useCartStore((state) => state.isPaid);
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = useCartStore((state) => state.shipping);
  const total = shipping + subtotal;
  const id = Math.floor(Math.random() * 90000) + 10000;

  const handleOrder = async () => {
    const newOrder = await axios.post("https://tesla-shop-arielstereo.vercel.app/api/orders", {
      id,
      info,
      cart,
      total,
      isPaid,
    });
    router.push(`/orders/${newOrder.data._id}`);
  };

  return (
    <div className="mx-4 lg:mx-8 xl:mx-24 2xl:mx-48 grid lg:grid-cols-2 lg:gap-12">
      <div>
        <Title title="CHECK ORDER" />
        <Link href={"/cart"} className="text-sm underline text-slate-800 dark:text-slate-200">
          EDIT ORDER
        </Link>
        <OrderListCard cart={cart} isCheckout={true} />
      </div>
      <DeliveryCard
        info={info}
        cart={cart}
        shipping={shipping}
        subtotal={subtotal}
        isCheckout={true}
        handleOrder={handleOrder}
      />
    </div>
  );
}
