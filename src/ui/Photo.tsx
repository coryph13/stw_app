import { baseApiUrl } from "@/config";
import { EMedia, IMedia } from "@/types/media";
import Image from "next/image";

interface IProps {
    className: string;
    media: IMedia;
    alt: string;
};
export default function Photo({
    className,
    media,
    alt,
}: IProps) {
    // w-16 md:w-32 lg:w-48
    const data = getImageParameters(media);

    // console.log(media, dimension)

    return (
        <picture>
            <source
                srcSet={data.small.src.href}
                width={data.small.width}
                height={data.small.height}
                media="(max-width: 480px)" />
            <source
                srcSet={data.medium.src.href}
                width={data.medium.width}
                height={data.medium.height}
                media="(max-width: 768px)" />
            <source
                srcSet={data.large.src.href}
                width={data.large.width}
                height={data.large.height}
                media="(min-width: 769px)" />
            <Image
                // className={`${className} w-16 md:w-32 lg:w-48`}
                className={`${className}`}
                src={data.original.src.href}
                width={data.original.width}
                height={data.original.height}
                alt={alt} />
        </picture>
    )
}

function getImageParameters(media: IMedia) {
    return {
        'small': {
            src: new URL(media.small, baseApiUrl),
            width: 480,
            height: 480
        },
        'medium': {
            src: new URL(media.medium, baseApiUrl),
            width: 768,
            height: 768
        },
        'large': {
            src: new URL(media.large, baseApiUrl),
            width: 1024,
            height: 1024
        },
        'original': {
            src: new URL(media.original, baseApiUrl),
            width: 1920,
            height: 1920
        }
    };
}
