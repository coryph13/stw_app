import { ISearchOption } from "@/types/searchbar"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const SearchOption = ({option}: {option: ISearchOption}) => {
    return (
        <div className="text-oxblue-950 dark:text-white">
            <Link href={option.url}>{option.title}</Link>
            <Image 
                src={option.image}
                alt={option.title} 
                width={100}
                height={100}
                unoptimized 
            />
            <p>{option.description}</p>
        </div>
    )
}

export default SearchOption