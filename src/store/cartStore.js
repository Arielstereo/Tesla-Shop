import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      info: {},
      isPaid: false,
      shipping: 100,
      setCart: (product, quantity, size) => {
        set((state) => ({
          cart: [...state.cart, { product, quantity, size }],
        }));
      },
      resetCart: () => set({ cart: [] }),
      setInfo: (values) => {
        set(() => ({ info: values }));
      },
      resetInfo: () => set({ info: {} }),
      removeItem: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.product.slug !== id),
        }));
      },
    }),
    {
      name: "cart",
    }
  )
);
