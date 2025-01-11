// import { IMedia } from "@/types/media";
import { ITag } from "@/types/tag";
import Image from "next/image";
import Tag from "@/ui/components/Tag";
import ToggleFavBtn from "@/ui/components/buttons/FavoriteButton";
import { ICard } from "@/types/card";
import { genApiUrlFromPath } from "@/utils/uri";
import Photo from "./Photo";
import { EMedia } from "@/types/media";
// import LocaleLink from "@/ui/components/locale-link";
import { Link } from "@/i18n/routing";
import FavoriteButton from "@/ui/components/buttons/FavoriteButton";

interface IProps {
    entity: ICard;
    type: string;
    href: string;
};

export default function Card({ entity, href, type }: IProps) {

    // Test purposes.
    const authorized = true;

    return (
        <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
            {authorized && <FavoriteButton entity={entity} slug={entity.slug} type={type}/>}
            <Link
                className="relative h-[350px] sm:h-[450px]"
                href={href}>
                <Photo
                    className="w-full object-cover"
                    media={entity.media.photo}
                    dimension={EMedia.LARGE}
                    alt={entity.name} />
            </Link>
            <div className="px-6 py-4">
                <Link className="block mb-2 mt-2 font-bold text-xl hover:opacity-50"
                    href={href}>{entity.name}</Link>
                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: entity.description }} ></p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {Array.isArray(entity) && entity.tags.map((tag: ITag, i: number) => (
                    <Tag key={i} entity={tag} />
                ))}
            </div>
        </div>
    );
}
