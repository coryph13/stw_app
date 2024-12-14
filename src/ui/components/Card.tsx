import { IMedia } from "@/types/media";
import { ITag } from "@/types/tag";
import Image from "next/image";
import Tag from "@/ui/components/Tag";

interface IProps {
    title: string;
    description: string;
    media: IMedia;
    tags?: ITag[];
};


export default function Card({ title, description, media, tags = [] }: IProps) {

    tags = [
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
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full" width={640} height={640} src={media.medium} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            {/* <!-- Tags --> */}
            <div className="px-6 pt-4 pb-2">
                {tags.map((tag: ITag, i) => (
                    <Tag key={i} entity={tag} />
                ))}
            </div>
        </div>
    );
}
