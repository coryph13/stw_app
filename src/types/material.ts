import { IMedia } from "@/types/media";

export interface IMaterial {
    code: string;
    name: string;
    slug: string;
    description: string;
    media: {
        photo: IMedia
    }
}
