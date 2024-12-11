interface Dimension {
    value: string;
    unit: string;
}

export interface IFormat {
    name: string;
    slug: string;
    width: Dimension;
    height: Dimension;
    thickness: Dimension;
}
