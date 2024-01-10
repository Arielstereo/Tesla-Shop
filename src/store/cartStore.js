import {create} from 'zustand'
import { persist } from 'zustand/middleware'



export const useCartStore = create(
  persist(
  (set) => ({
  cart: [],
  info: {},
  shipping: 100,
  order: [],
  setCart: (product, quantity, size) => {
    set((state) => ({cart: [...state.cart , {product, quantity, size} ]}))},
  resetCart: () => set({cart: []}),
  setInfo: (values) => {
    set(() => ({info: values}))
  },
  removeItem: (id) => {
    set((state) => ({cart: state.cart.filter((item) => item.product.slug !== id)}))
  },
  setOrder: (id, info, cart, total) => {
    set((state) => ({order: [...state.order , {id, info, cart, total}] }))
  }
}),
{
  name: 'cart'
}
))

