import { IMedia } from "@/types/media";
import { ITag } from "@/types/tag";

export interface ICard {
    slug: string;
    name: string;
    description: string;
    media: {
        photo: IMedia;
        design?: IMedia;
    };
    tags?: ITag[];
    isFavorite: boolean;
}
