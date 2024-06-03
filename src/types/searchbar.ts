// import { IProduct } from "@/types//product";

export interface ISearchOption {
    slug: string;
    url: string;
    title: string;
    description: string;
    image: string;
}

export type SearchBarContextType = {
    visible: boolean;
    term: string;
    options: ISearchOption[];
    fetchOptions: () => void;
    toggleBar: () => void;
    setTerm: (value: string) => void;
    // setProducts: (products: IProduct[]) => void;
}