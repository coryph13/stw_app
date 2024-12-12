import { IMedia } from "@/types/media";

export interface IManufacturer {
    name: string;
    slug: string;
    media: {
        photo: IMedia
    }
}
