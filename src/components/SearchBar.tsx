'use client'
import { FiSearch, FiX } from "react-icons/fi";
import SearchInput from "@/components/Input/SearchInput";
import React from "react";
import { SearchBarContext } from "@/context/SearchBarContext";
import { SearchBarContextType } from "@/types/searchbar";
import SearchOptions from "@/containers/SearchOptions";

const SearchBar = ({}: {}) => {
    const { visible, toggleBar } = React.useContext(SearchBarContext) as SearchBarContextType;

    const baseClassName = "bg-white dark:bg-oxblue-950 text-oxblue-950 dark:text-white z-30 fixed overflow-hidden right-0 top-0 left-0 ";
    return (
        <div className={
            visible
                ? baseClassName + "ease-in-out duration-100 h-screen opacity-100"
                : baseClassName + "ease-in-out duration-300 h-0 opacity-0"
        }>
            <FiX onClick={() => toggleBar()} className="absolute right-2 top-2 cursor-pointer w-6 h-6" />
            <div className="flex flex-row w-full px-12 py-20 align-middle items-center overflow-hidden">
                <FiSearch className="w-8 h-8 text-oxblue-950 dark:text-white mx-4"></FiSearch>
                {visible && <SearchInput />}
                {visible && <SearchOptions />}
            </div>
        </div>
    );
}

export default SearchBar