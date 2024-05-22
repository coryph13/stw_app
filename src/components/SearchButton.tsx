'use client'

import { updateIsOpen } from "@/lib/features/searchSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { FiSearch } from "react-icons/fi";

export default function SearchButton() {
    const isOpen = useAppSelector((state) => state.searching.isOpen);
    const dispatch = useAppDispatch();

    return (
        <FiSearch onClick={() => dispatch(updateIsOpen(!isOpen))} className="cursor-pointer w-6 h-6 mr-4"></FiSearch>
    )
}