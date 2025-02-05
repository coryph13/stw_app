import { Link } from '@/i18n/routing';
import { ITag } from '@/types/tag';

interface IProps {
  entity: ITag;
}

export default function Tag({ entity }: IProps) {
  return (
    <Link
      href={`/tags/${entity.slug}`}
      className={`mb-2 mr-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-white float-right`}
    >
      #{entity.name}
    </Link>
  );
}
