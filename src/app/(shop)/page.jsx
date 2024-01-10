"use client";

import Title from "../../components/title/Title";
import ProductCard from "../../components/card/ProductCard";
import { data } from "../../mockup/mockup";
import { useMenuStore } from "../../store/menuStore";
import { useEffect } from "react";

export default function Home() {
  const { products } = data;
  const inputValue = useMenuStore((state) => state.inputValue);
  const filterResult = useMenuStore((state) => state.filterResult);
  const setFilterResult = useMenuStore((state) => state.setFilterResult);
  const searchProducts = () => {
    const res = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue)
    );
    return res;
  };

  useEffect(() => {
    const res = searchProducts();
    setFilterResult(res);
  }, [inputValue, products]);

  return (
    <main className="px-5">
      <Title title="SHOP" subtitle="BEST SELLERS" />
      <div className="gap-10 pb-10 grid grid-cols-2 sm:grid-cols-3">
        {filterResult
          ? filterResult.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))
          : products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
      </div>
    </main>
  );
}
