import { Link } from "@/i18n/routing";
import { ITag } from "@/types/tag";

interface IProps {
    entity: ITag;
}

export default function Tag({ entity }: IProps) {
    return (
        <Link href={`/tags/${entity.slug}`} className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
            {entity.name}
        </Link>
    );
}
