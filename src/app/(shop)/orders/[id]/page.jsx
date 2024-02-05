"use client";

import { FaRegCreditCard } from "react-icons/fa6";
import Title from "../../../../components/title/Title";
import { Progress } from "@nextui-org/react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useCartStore } from "../../../../store/cartStore";
import DeliveryCard from "../../../../components/card/DeliveryCard";
import Image from "next/image";
import axios from "axios";

export default function Order({ params }) {
  const { id } = params;

  const resetCart = useCartStore((state) => state.resetCart);
  const resetInfo = useCartStore((state) => state.resetInfo);
  const [loading, setLoading] = useState(false);

  const shipping = useCartStore((state) => state.shipping);

  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchOrdersById = async () => {
      const res = await axios.get("https://tesla-shop-arielstereo.vercel.app/api/orders/" + id);
      setOrder(res.data.data);
    };
    fetchOrdersById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subtotal = order?.cart?.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handlePaid = async () => {
    setLoading(true);
    await axios.post(`https://tesla-shop-arielstereo.vercel.app/api/orders/${id}/payment-order`);
    setTimeout(() => {
      setOrder((prevOrder) => ({ ...prevOrder, isPaid: true }));
    }, 3000);
    setLoading(false);
  };

  useEffect(() => {
    resetCart();
    resetInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-4 lg:mx-8 xl:mx-24 2xl:mx-48 grid lg:grid-cols-2 lg:gap-12">
      <div>
        <Title title={`ORDER # ${order.id}`} />
        {loading && (
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            label="PROCESSING..."
            className="max-w-md my-4 ml-8"
          />
        )}
        {!order.isPaid ? (
          <DeliveryCard
            order={order}
            shipping={shipping}
            subtotal={subtotal}
            handlePaid={handlePaid}
            paid={order.isPaid}
          />
        ) : (
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
            "bg-green-700 text-center": order.isPaid,
            "bg-red-500": !order.isPaid,
          }
        )}
      >
        <FaRegCreditCard size={30} className="my-4 md:my-1" />
        {order.isPaid ? (
          <div className="w-full pt-2">
            <span className="text-center">your payment has been approved</span>
            <h2 className="mt-16 md:mt-32 text-center text-slate-800 dark:text-slate-200">
              thank you {order.info.name} {order.info.surname} for your
              purchase!
            </h2>
          </div>
        ) : (
          <span className="pt-5 md:pt-2 ml-8">pending payment</span>
        )}
      </div>
    </div>
  );
}
