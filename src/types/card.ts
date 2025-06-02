// import { ITag } from "@/types/tag";

export interface ICard {
    slug: string;
    name: string;
    description: string;
    image: string;
    design?: string;
    // tags?: ITag[];
    isFavorite: boolean;
}
