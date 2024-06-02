import { create } from "zustand";
import { Item, ItemElement } from "../types/item";

type ItemState = {
    isLoading: boolean
    items: ItemElement[]
    addItems: (data: ItemElement[]) => void
    setLoading: (isLoading: boolean) => void
}

export const useItemsStore = create<ItemState>((set) => ({
    isLoading: false,
    items: [],
    addItems: (data: ItemElement[]) => {
        set(() => ({
            items: data
        }))
    },
    setLoading: (isLoading) => {
        set(() => ({
            isLoading
        }))
    }
}))