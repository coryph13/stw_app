import { baseApiUrl } from "@/config";
import { EMedia, IMedia } from "@/types/media";
import Image from "next/image";

interface IProps {
    className: string;
    media: IMedia;
    dimension: EMedia;
    alt: string;
};
export default function Photo({
    className,
    media,
    dimension,
    alt,
}: IProps) {
    // w-16 md:w-32 lg:w-48
    const data = getImageParameters(media, dimension);

    console.log(media, dimension)

    return (
        <Image
            // className={`${className} w-16 md:w-32 lg:w-48`}
            className={`${className}`}
            src={data.src.href}
            width={data.width}
            height={data.height}
            alt={alt} />
    )
}

function getImageParameters(media: IMedia, dimension: EMedia) {
    switch (dimension) {
        case EMedia.SMALL: {
            return {
                src: new URL(media.small, baseApiUrl),
                width: 480,
                height: 480
            }
            break;
        }
        case EMedia.MEDIUM: {
            return {
                src: new URL(media.medium, baseApiUrl),
                width: 768,
                height: 768
            }
            break;
        }
        case EMedia.LARGE: {
            return {
                src: new URL(media.large, baseApiUrl),
                width: 1024,
                height: 1024
            }
            break;
        }
    }

    return {
        src: new URL(media.original, baseApiUrl),
        width: 1280,
        height: 1280
    }
}
