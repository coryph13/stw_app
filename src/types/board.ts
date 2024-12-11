import { IMedia } from "@/types/media";
import { IFormat } from "@/types/format";

export interface IBoard {
    code: string;
    name: string;
    slug: string;
    description: string;
    formats: IFormat[];
    media: {
        photo: IMedia
    }
}
