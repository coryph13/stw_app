'use client'

import { SearchBarContext } from "@/context/SearchBarContext";
import { SearchBarContextType } from "@/types/searchbar";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchButton() {
    // const isOpen = useAppSelector((state) => state.searching.isOpen);
    // const dispatch = useAppDispatch();
    const { toggleBar } = useContext(SearchBarContext) as SearchBarContextType;

    return (
        <FiSearch onClick={() => toggleBar()} className="cursor-pointer w-6 h-6 mr-4" />
    )
}