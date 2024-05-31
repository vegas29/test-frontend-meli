export interface Item {
    author:     Author;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    categories: any[];
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
    picture:       string;
    free_shipping: boolean;
    address:       null;
    category_id:   string;
}

export interface Price {
    currency: string;
    amount:   number;
    decimals: number;
}
