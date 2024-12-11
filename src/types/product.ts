import { IMedia } from '@/types/media'
import { IManufacturer } from '@/types/manufacturer';
import { ICategory } from '@/types/category';
import { IMaterial } from '@/types/material';
import { IBoard } from '@/types/board';
import { IFeature } from '@/types/feature';
import { IUsage } from '@/types/usage';

export interface IProduct {
    name: string;
    code: string;
    slug: string;
    description: string;

    media: {
        photo: IMedia,
        design: IMedia
    };

    manufacturer: IManufacturer;
    category: ICategory;
    material: IMaterial;
    board: IBoard;

    features: IFeature[];
    usages: IUsage[];
}

interface IProductProps {
    products: IProduct[];
}

// export type Product = {
//     slug: string;
//     name: string;
//     description: string;
//     // media: [IMedia];
//     media: [Media]
// }
