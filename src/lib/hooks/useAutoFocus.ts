import { useCallback, useEffect, useRef } from "react"

const useAutoFocus = () => {
    // const inputRef = useRef(null);

    // useEffect(() => {
    //   if (inputRef.current) {
    //     inputRef.current.focus();
    //   }
    // }, []);

    const inputRef = useCallback((inputElement: HTMLInputElement) => {
        if (inputElement) {
            inputElement.focus();
        }
    }, [])

    return inputRef;
}

export default useAutoFocus