"use client";

import Title from "../../components/title/Title";
import ProductCard from "../../components/card/ProductCard";
// import { data } from "../../mockup/mockup";
import { useMenuStore } from "../../store/menuStore";
import { useEffect } from "react";
import axios from "axios";
import { useProductStore } from "../../store/productStore";

export default function Home() {
  // const { products } = data;
  const setProducts = useProductStore((state) => state.setProduct);
  const products = useProductStore((state) => state.products);
  const { data } = products;

  const inputValue = useMenuStore((state) => state.inputValue);
  const filterResult = useMenuStore((state) => state.filterResult);
  const setFilterResult = useMenuStore((state) => state.setFilterResult);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (products.length === 0) {
      fetchProducts();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const searchProducts = () => {
    if (!data) {
      return [];
    }
    const res = data.filter((product) =>
      product.title.toLowerCase().includes(inputValue)
    );
    return res;
  };

  useEffect(() => {
    const res = searchProducts();
    setFilterResult(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
