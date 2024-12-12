import { IProduct } from "@/types/product";

interface IProps {
    entity: IProduct;
};

export function ProductCard({ entity }: IProps) {
    return (
        <li>
            <span>{entity.name}</span>
            <img src={entity.media.photo.medium} alt={entity.name} />
        </li>
    );
}

export default ProductCard;
