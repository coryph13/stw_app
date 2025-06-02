import IApplication from "./application";
import ICategory from "./category";
import IManufacturer from "./manufacturer";
import { ISpec } from "./spec";

export interface IProduct {
    name: string;
    slug: string;
    code: string;
    description: string;
    in_stock: boolean;
    image: string;
    design: string;
    manufacturer: IManufacturer;
    categories: ICategory[];
    applications: IApplication[];
    specs: ISpec[];
}


