export interface Item {
    author:     Author;
    categories: string[];
    items:      ItemElement[];
}

export interface Author {
    name:     string;
    lastName: string;
}

export interface ItemElement {
    author:        Author;
    id:            string;
    title:         string;
    condition:     string;
    price:         Price;
    pictures:       PictureElement;
    free_shipping: boolean;
    address:       null;
    category_id:   string;
    thumbnail?:     string;
    description?:  string;
    initial_quantity?: number;
}
export interface PictureElement {
    secure_url?:    string;
}

export interface Price {
    currency: string;
    amount:   number;
    decimals: number;
}

export interface DataIsLoading {
    isLoading: boolean;
}

export interface ItemElementObject {
    item: ItemElement;
}

