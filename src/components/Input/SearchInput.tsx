// import useAutoFocus from "@/lib/hooks/useAutoFocus";
import { SearchBarContext } from "@/context/SearchBarContext";
import { SearchBarContextType } from "@/types/searchbar";
import { useTranslations } from "next-intl";
import { useContext, useEffect, useRef } from "react";

export default function SearchInput() {
    const t = useTranslations('Search')
    // const locale = useLocale();
    const {term, setTerm, fetchOptions} = useContext(SearchBarContext) as SearchBarContextType;

    const searchRef = useRef(null);

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
            // console.log(searchRef.current);
        }
        
        const delayDebounceFn = setTimeout(() => {
            console.log(term)
            
            // Send Fetch request here
            if (term.length > 1) {
                fetchOptions()
            }
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [term]);

    const onChange = (e) => {
        // async load instances by term
        setTerm(e.target.value)
    }
    
    return (
        <form action="/search" method="GET">
            <input
                className="duration-100 w-full bg-transparent text-oxblue-950 placeholder:text-oxblue-700 focus:placeholder:text-oxblue-800 dark:placeholder:text-oxblue-100 focus:dark:placeholder:text-white dark:text-white p-4 font-bold text-2xl border-0 border-l-4 border-oxblue-700 focus:border-oxblue-800 dark:border-white ring-0 focus:ring-0 outline-none focus:outline-none"
                type="text"
                name="term" 
                placeholder={t('Input.placeholder')} 
                ref={searchRef}
                autoComplete="off"
                onChange={onChange}
                value={term} />
        </form>
    );
}