'use client'

import { updateIsOpen } from "@/lib/features/searchSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { FiSearch, FiX } from "react-icons/fi";

export default function Search() {
    const isOpen = useAppSelector((state) => state.searching.isOpen);
    const dispatch = useAppDispatch();

    const closeSearch = () => {
        dispatch(updateIsOpen(!isOpen))
    }

    const baseClassName = "bg-white dark:bg-oxblue-950 text-oxblue-950 dark:text-white z-30 fixed overflow-hidden right-0 top-0 left-0 ";
    
    return (
        <div className={
            isOpen
                ? baseClassName + "ease-in-out duration-100 h-screen opacity-100"
                : baseClassName + "ease-in-out duration-300 h-0 opacity-0"
        }>
            <FiX onClick={closeSearch} className="absolute right-2 top-2 cursor-pointer w-6 h-6" />
            <div className="flex flex-row w-full my-20 mx-4 align-middle items-center overflow-hidden">
                <FiSearch className="text-oxblue-950 dark:text-white mx-4 text-2xl"></FiSearch>
                <input
                    className="w-full bg-transparent text-oxblue-950 placeholder:text-oxblue-700 dark:text-white p-4 font-bold text-2xl border-0 border-l-4 border-oxblue-950 dark:border-white focus:ring-0"
                    type="text" name="search" placeholder="Search..." />
            </div>
        </div>
    );
}