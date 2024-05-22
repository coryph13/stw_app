// import useAutoFocus from "@/lib/hooks/useAutoFocus";
import { useEffect, useRef, useState } from "react";

export default function SearchInput() {
    const [value, setValue] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.focus();
        }
        
        const delayDebounceFn = setTimeout(() => {
            console.log(value)
            // Send Fetch request here and update redux store
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [value]);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <input
            className="duration-100 w-full bg-transparent text-oxblue-950 placeholder:text-oxblue-700 focus:placeholder:text-oxblue-800 dark:text-white p-4 font-bold text-2xl border-0 border-l-4 border-oxblue-700 focus:border-oxblue-800 dark:border-white ring-0 focus:ring-0 outline-none focus:outline-none"
            type="text" 
            placeholder="Search..." 
            ref={searchRef}
            autoComplete="off"
            onSubmit={onSubmit}
            onChange={onChange} />
    );
}