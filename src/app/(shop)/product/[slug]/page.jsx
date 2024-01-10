"use client";

import { notFound, usePathname } from "next/navigation";
import { data } from "../../../../mockup/mockup";
import { titleFont } from "../../../../config/fonts";
import Quantity from "../../../../components/quantity/Quantity";
import { useState } from "react";
import clsx from "clsx";
import Slider from "../../../../components/slider/Slider";
import { useCartStore } from "../../../../store/cartStore";
import TeslaButton from "../../../../components/button/TeslaButton";

export default function ProductPage() {
  const pathname = usePathname();
  const path = pathname.slice(9);
  const { products } = data;
  const product = products.find((item) => item.slug === path);

  const addProductToCart = useCartStore((state) => state.setCart);

  const [sizeSelected, setSizeSelected] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid md:grid-cols-3 py-8 gap-8 md:gap-0 px-2">
      <div className="md:col-span-2 w-[300px] md:w-full">
        <Slider images={product.images} title={product.title} />
      </div>
      <div className="py-4 md:px-12 px-6">
        <h1 className={`${titleFont.className} md:text-2xl pb-8`}>
          {product.title}
        </h1>
        <span className="font-semibold">$ {product.price}</span>
        <div className="my-8 flex flex-col gap-4">
          <span>SIZE</span>
          <div className="flex gap-6 text-slate-100">
            {product.sizes.map((item, i) => (
              <button
                onClick={() => setSizeSelected(item)}
                key={i}
                className={clsx(
                  "font-semibold text-sm hover:underline hover:decoration-2 px-2 pt-4",
                  {
                    "underline decoration-2": item === sizeSelected,
                  }
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 my-4">
          <span>QUANTITY</span>
          <Quantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <TeslaButton
          title={"ADD TO CART"}
          href={"/cart"}
          onClick={() => addProductToCart(product, quantity, sizeSelected)}
        />
        <div className="my-8 flex flex-col gap-4">
          <span className="text-slate-200">DESCRIPTION</span>
          <span className="font-semibold text-md text-slate-400">
            {product.description}
          </span>
        </div>
      </div>
    </div>
  );
}
