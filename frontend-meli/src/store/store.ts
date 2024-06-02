import { create } from "zustand";
import { Item } from "../types/item";

type ItemState = {
    isLoading: boolean
    items: Item[]
    addItems: (data: Item[]) => void
    setLoading: (isLoading: boolean) => void
}

export const useItemsStore = create<ItemState>((set) => ({
    isLoading: false,
    items: [],
    addItems: (data: Item[]) => {
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