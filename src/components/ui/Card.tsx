// import { IMedia } from "@/types/media";
import { ITag } from '@/types/tag';
import Image from 'next/image';
import Tag from '@/components/Tag';
// import ToggleFavBtn from '@/components/favorite/FavoriteButton';
import { ICard } from '@/types/card';
import { genApiUrlFromPath } from '@/utils/uri';
import Photo from './Photo';
import { EMedia } from '@/types/media';
// import LocaleLink from "@/ui/components/locale-link";
import { Link } from '@/i18n/routing';
import FavoriteButton from '@/components/favorite/FavoriteButton';

interface IProps {
  entity: ICard;
  type: string;
  href: string;
}

export default function Card({ entity, href, type }: IProps) {
  return (
    <div className="group relative max-w-sm overflow-hidden rounded bg-white shadow-lg">
      {/* {authorized && (
        <FavoriteButton entity={entity} slug={entity.slug} type={type} />
      )} */}
      <Link className="relative h-[350px] sm:h-[450px]" href={href}>
        <Photo
          className="w-full object-cover"
          media={entity.media.photo}
        //   dimension={EMedia.LARGE}
          alt={entity.name}
        />
      </Link>
      <div className="px-2 py-4">
        <h2 className="mb-2 mt-2">
          <Link
            className="text-md font-bold text-gray-800 hover:text-gray-600"
            href={href}
          >
            {entity.name}
          </Link>
        </h2>
        <p
          className="mt-1 text-sm text-gray-600"
          //   dangerouslySetInnerHTML={{ __html: entity.description }}
        >
          {entity.description.slice(0, 70) + `...`}
        </p>
      </div>
      <div className="px-2 py-2">
        {Array.isArray(entity.tags) &&
          entity.tags.map((tag: ITag, i: number) => (
            <Tag key={i} entity={tag} />
          ))}
      </div>
    </div>
  );
}
