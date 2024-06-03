import React from 'react';
import { ISearchOption, SearchBarContextType } from "@/types/searchbar";
import { title } from 'process';

export const SearchBarContext = React.createContext<SearchBarContextType | null>(null);

const SearchBarProvider = ({ children }: { children: React.ReactNode }) => {
    const [visible, setVisible] = React.useState(false)
    const [term, setTerm] = React.useState('')
    const [options, setOptions] = React.useState<ISearchOption[]>([])
    
    const fetchOptions = () => {
        // fetch products through api call
        // transform result. Add url via type attribute.
        const id = Math.floor(Math.random() * 250);
        const newOptions = [
            {
                slug: 'test-product-' + id,
                url: '/products/test-product-' + id,
                description: "Test product description",
                image: `https://picsum.photos/id/${id}/100/100`,
                title: 'Test Product ' + id,
            }
        ]

        // actual setter
        // setOptions([...newOptions]);

        // for test purposes only!!!
        setOptions([...options, ...newOptions])
    }

    const toggleBar = () => {
        setVisible(!visible);
    }

    return (
        <SearchBarContext.Provider value={{ visible, options, term, fetchOptions, toggleBar, setTerm }}>
            {children}
        </SearchBarContext.Provider>
    )
}

export default SearchBarProvider