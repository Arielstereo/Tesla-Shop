"use client";

import { FaRegCreditCard } from "react-icons/fa6";
import Title from "../../../../components/title/Title";
import { Progress } from "@nextui-org/react";
import { useState } from "react";
import clsx from "clsx";
import { useCartStore } from "../../../../store/cartStore";
import DeliveryCard from "../../../../components/card/DeliveryCard";
import Image from "next/image";

export default function Order({ params }) {
  const { id } = params;

  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);

  const info = useCartStore((state) => state.info);
  const cart = useCartStore((state) => state.cart);
  const resetCart = useCartStore((state) => state.resetCart);
  const setOrder = useCartStore((state) => state.setOrder);

  const shipping = 100;
  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const total = shipping + subtotal;

  const handlePaid = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaid(true);
    }, 5000);
    setOrder(id, info, cart, total);
    resetCart();
  };

  return (
    <div className="mx-4 lg:mx-8 xl:mx-24 2xl:mx-48 grid lg:grid-cols-2 lg:gap-12">
      <div>
        <Title title={`ORDER # ${id}`} />
        {loading && (
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            label="PROCESSING..."
            className="max-w-md my-4 ml-8"
          />
        )}{ !paid ?(
          <DeliveryCard
            info={info}
            cart={cart}
            shipping={shipping}
            subtotal={subtotal}
            handlePaid={handlePaid}
            paid={paid}
          />
        ): (
          <Image
          src="/teslaLogo.png"
          alt="logo"
          width={400}
          height={600}
          className="mx-auto"
          />
        )}
      </div>
      <div
        className={clsx(
          "flex item-center md:gap-8 py-0 md:py-4 h-16 mt-4 md:mt-40 rounded-lg px-4",
          {
            "bg-green-700 text-center": paid,
            "bg-red-500": !paid,
          }
        )}
      >
        <FaRegCreditCard size={30} className="my-4 md:my-1" />
        {paid ? (
          <div className="w-full pt-2">
            <span className="text-center">your payment has been approved</span>
            <h2 className="mt-16 md:mt-32 text-center">
              thank you for your purchase!
            </h2>
          </div>
        ) : (
          <span className="pt-5 md:pt-2 ml-8">pending payment</span>
        )}
      </div>
    </div>
  );
}
