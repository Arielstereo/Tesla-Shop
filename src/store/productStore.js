import {create} from 'zustand'
import { persist } from 'zustand/middleware'



export const useProductStore = create(
  persist(
  (set) => ({
  products: [],
  setProduct: (data) => {
    set (() => ({products: {data}})) } 
}),
{
  name: 'products'
}
))

