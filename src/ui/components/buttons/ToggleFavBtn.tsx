import FavIcon from "@/ui/icons/FavIcon";

interface IToggleFavBtnProps {
    active: boolean;
}

// TODO: Toggle Favorite by async request.

export default function ToggleFavBtn({ active }: IToggleFavBtnProps) {
    return (
        <button
            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        >
            <span className="sr-only">Wishlist</span>
            <FavIcon fill={active ? '#cc3333' : 'none'}/>
        </button>
    );
}
