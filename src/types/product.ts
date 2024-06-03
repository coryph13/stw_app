export interface IProduct {
    slug: string;
    description: string;
}

export type ProductContextType = {
    products: IProduct[];
}