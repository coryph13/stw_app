'use client'

// import { RiMenuSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

export default function SearchBtn() {
    return (
        <CiSearch
            className={`cursor-pointer flex-1`}
        color={`white`} size={`1.75rem`}/>
    );
}
