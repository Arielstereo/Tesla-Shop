import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMenuStore = create(
  persist(
    (set) => ({
      isOpenSideBar: false,
      openSideBar: () => set({ isOpenSideBar: true }),
      closeSideBar: () => set({ isOpenSideBar: false }),
      isOpenSearch: false,
      inputValue: "",
      setInputValue: (value) => set({ inputValue: value }),
      filterResult: [],
      setFilterResult: (value) => set({ filterResult: value }),
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
    }),
    {
      name: 'menu'
    }
  )
);
