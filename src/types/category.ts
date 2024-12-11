import { IMedia } from "@/types/media";

export interface ICategory {
    slug: string;
    name: string;
    media: {
        photo: IMedia
    }
}
