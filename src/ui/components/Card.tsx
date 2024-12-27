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

    let _url = `http://stw.test/${type}/${entity.slug}`;
    let _img_link = (
        <Link href={_url}
            className="relative h-[350px] sm:h-[450px]">
            <Image className="w-full object-cover"
                width={640}
                height={640}
                src={entity.media.photo.medium}
                // overrideSrc={entity.media.photo.medium}
                alt={entity.name} />
        </Link>
    );

    if (entity.media.design != undefined) {
        _img_link = (
            <Link href={`http://stw.test/${type}/${entity.slug}`}
                className="relative h-[350px] sm:h-[450px]">
                <Image className="w-full object-cover opacity-100 group-hover:opacity-0"
                    width={640}
                    height={640}
                    src={entity.media.photo.medium}
                    // overrideSrc={entity.media.photo.medium}
                    alt={entity.name} />
                {entity.media.design != undefined &&
                <Image className="w-full object-cover opacity-0 group-hover:opacity-100"
                        width={640}
                        height={640}
                        src={entity.media.design.medium}
                        alt={entity.name} />
                }
            </Link>
        );
    }

    return (
        <div className="group relative max-w-sm rounded overflow-hidden shadow-lg">
            <ToggleFavBtn active={entity.isFavorite} />
            {_img_link}
            <div className="px-6 py-4">
                <Link className="font-bold text-xl mb-4 hover:opacity-50" href={_url}>{entity.name}</Link>
                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: entity.description }} ></p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {entity.tags.map((tag: ITag, i: number) => (
                    <Tag key={i} entity={tag} />
                ))}
            </div>
        </div>
    );
}
