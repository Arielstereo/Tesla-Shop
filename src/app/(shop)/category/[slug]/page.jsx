"use client";

import { notFound, usePathname } from "next/navigation";
// import { data } from "../../../../mockup/mockup";
import Title from "../../../../components/title/Title";
import ProductCard from "../../../../components/card/ProductCard";
import { useMenuStore } from "../../../../store/menuStore";
import { useEffect } from "react";
import { useProductStore } from "../../../../store/productStore";

export default function CategoryPage() {
  const pathname = usePathname();
  const category = pathname.slice(10);
  // const { products } = data;

  const products = useProductStore((state) => state.products);
  const {data} = products;

  const categoryData = data?.filter((item) => item.gender === category);

  if (categoryData?.length === 0) {
    notFound();
  }

  const inputValue = useMenuStore((state) => state.inputValue);
  const filterResult = useMenuStore((state) => state.filterResult);
  const setFilterResult = useMenuStore((state) => state.setFilterResult);
  const searchProducts = () => {
    const res = categoryData.filter((product) =>
      product.title.toLowerCase().includes(inputValue)
    );
    return res;
  };

  useEffect(() => {
    const res = searchProducts();
    setFilterResult(res);
  }, [inputValue, data]);

  return (
    <div className="px-5">
      <Title title={category} subtitle={"BEST SELLERS"} />
      <div className="gap-10 pb-10 grid grid-cols-2 sm:grid-cols-3">
        {filterResult
          ? filterResult.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))
          : categoryData.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
      </div>
    </div>
  );
}
