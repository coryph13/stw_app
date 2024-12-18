import { IMedia } from "@/types/media";
import { ITag } from "@/types/tag";
import Image from "next/image";
import Tag from "@/ui/components/Tag";
import Link from "next/link";
import ToggleFavBtn from "@/ui/components/ToggleFavBtn";
import { ICard } from "@/types/card";

interface IProps {
    entity: ICard;
    type: string;
};


export default function Card({ entity, type }: IProps) {

    entity.tags = [
        {
            name: 'Gray',
            slug: 'gray',
        },
        {
            name: 'Wood',
            slug: 'wood',
        }
    ];

    return (
        <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
            <ToggleFavBtn active={entity.isFavorite} />
            <Link href={`http://stw.test/${type}/${entity.slug}`}
                className="relative h-[350px] sm:h-[450px]">
                <Image className="absolute w-full object-cover opacity-100 group-hover:opacity-0"
                    width={640}
                    height={640}
                    src={entity.media.photo.medium}
                    alt={entity.name} />
                {entity.media.design != undefined &&
                    <Image className="w-full object-cover opacity-0 group-hover:opacity-100"
                        width={640}
                        height={640}
                        src={entity.media.design.medium}
                        alt={entity.name} />
                }
            </Link>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{entity.name}</div>
                <p className="text-gray-700 text-base">
                    {entity.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {entity.tags.map((tag: ITag, i: number) => (
                    <Tag key={i} entity={tag} />
                ))}
            </div>
        </div>
    );
}
