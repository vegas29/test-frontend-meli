import { create } from "zustand";
import { Item, ItemElement } from "../types/item";

type ItemState = {
    isLoading: boolean
    items: ItemElement[]
    categories: string[]
    addItems: (data: ItemElement[]) => void
    setLoading: (isLoading: boolean) => void
    setCategories: (data: string[]) => void
}

export const useItemsStore = create<ItemState>((set) => ({
    isLoading: false,
    items: [],
    categories: [],
    addItems: (data: ItemElement[]) => {
        set(() => ({
            items: data
        }))
    },
    setLoading: (isLoading) => {
        set(() => ({
            isLoading
        }))
    },
    setCategories: (data) => {
        set(() => ({
            categories: data
        }))
    }
}))