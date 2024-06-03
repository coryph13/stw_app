import SearchOption from "@/components/Option/SearchOption"
import { SearchBarContext } from "@/context/SearchBarContext"
import { ISearchOption, SearchBarContextType } from "@/types/searchbar"
import React from "react"

const SearchOptions = () => {
    const { options } = React.useContext(SearchBarContext) as SearchBarContextType

    return (
        <div className="search-container">
            {options.map((option: ISearchOption) => (
                <SearchOption key={option.slug} option={option} />
            ))}
        </div>
    )
}

export default SearchOptions;