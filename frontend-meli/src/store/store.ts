import { create } from "zustand";
import { Item } from "../types/item";

type ItemState = {
    items: Item[]
    addItems: (data: Item[]) => void
}

export const useItemsStore = create<ItemState>((set) => ({
    items: [],
    addItems: (data: Item[]) => {
        console.log('data', data)
        set(() => ({
            items: data
        }))
    }
}))