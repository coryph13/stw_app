export interface IMedia {
    large: string;
    small: string;
    medium: string;
    thumb: string;
    original: string;
}

export enum EMedia {
    THUMB = 'thumb',
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    ORIGINAL = 'original'
}

// export type Media = {
//     large: string;
//     medium: string;
//     thumb: string;
//     original: string;
// }
