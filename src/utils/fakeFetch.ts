import { mockProducts } from '@/mocks/products';
import { IProductList, IProduct } from '@/types/product';

export const fakeFetchProducts = async (locale: string): Promise<IProductList> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProducts[locale] || mockProducts['ru']);
        }, 1000);
    });
};

export const fakeFetchProductBySlug = async (slug: string, locale: string): Promise<IProduct | null> => {
    // Получаем продукт по слагу синхронно

    return new Promise((resolve) => {
        setTimeout(() => {
            // Возвращаем либо найденный продукт, либо null
            resolve(
                mockProducts[locale]?.products.find((p) => p.slug === slug) || null
            );
        }, 1000);
    });
};
