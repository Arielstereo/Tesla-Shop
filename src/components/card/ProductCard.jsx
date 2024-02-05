"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ product }) => {

  const [image, setImage] = useState(product.images[0]);

  return (
    <div>
      <Card shadow="sm" isPressable className="w-full h-full dark:bg-slate-800">
        <CardBody className="overflow-hidden">
          <Link href={`/product/${product.slug}`}>
            <Image
              width={600}
              height={600}
              alt={product.title}
              className="w-full object-cover rounded-md"
              src={`/products/${image}`}
              onMouseEnter={() => setImage(product.images[1])}
              onMouseLeave={() => setImage(product.images[0])}
            />
          </Link>
        </CardBody>
        <CardFooter className="flex flex-col md:flex-row text-[12px] md:text-sm text-slate-800 dark:text-slate-100 md:justify-between">
          <Link
            href={`/product/${product.slug}`}
            className="hover:text-sky-400"
          >
            <b>{product.title.toUpperCase()}</b>
          </Link>
          <p className="font-semibold">$ {product.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
