'use client'

import { useSearchParams  } from "next/navigation"

export default function SearchBar() {
    const searchParams = useSearchParams();

    let queryString = searchParams.toString();

    if (queryString) {
        queryString = '?' + queryString;
    }

    return <>
        Search: {queryString}
    </>
}
