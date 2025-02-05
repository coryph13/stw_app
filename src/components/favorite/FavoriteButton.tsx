'use client'

import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { toggleFavorite } from "@/lib/fetch/favorite";

interface IFavoriteButton {
    entity: {
        isFavorite: boolean
    };
    slug: string;
    type: string;
}

// TODO: Toggle Favorite by async request.

export default function FavoriteButton({
    entity,
    slug,
    type
}: IFavoriteButton) {
    const [isActive, setIsActive] = useState(entity.isFavorite);
    let className = isActive ? 'text-red-700 ' : 'text-white '
    className += 'size-6 inline-flex items-center justify-center';

    const clickFavorite = async () => {
        const data = await toggleFavorite(slug, type);

        entity.isFavorite = data.isActive;
        setIsActive(data.isActive);
    }
    return (
        <button
            className="absolute end-4 top-4 z-10 rounded-fullp-1.5 transition"
            onClick={clickFavorite}
        >
            <span className="sr-only">Wishlist</span>
            {/* <FavIcon fill={isActive ? '#cc3333' : 'none'}/> */}
            <HeartIcon className={`${className}`}></HeartIcon>
        </button>
    );
}
