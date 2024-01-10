import { create } from "zustand";

export const useMenuStore = create((set) => ({
  isOpenSideBar: false,
  openSideBar: () => set({ isOpenSideBar: true }),
  closeSideBar: () => set({ isOpenSideBar: false }),
  isOpenSearch: false,
  openSearch: () => set({ isOpenSearch: true }),
  closeSearch: () => set({ isOpenSearch: false }),
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  filterResult: [],
  setFilterResult: (value) => set({ filterResult: value }),
}));
