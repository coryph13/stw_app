import { IMedia } from "./media";

export interface ISearchItem {
    name: string;
    code: string;
    slug: string;
    media: {
        photo: IMedia,
        design: IMedia
    };
}

export interface ISearchList {
    items: ISearchItem[]
}
