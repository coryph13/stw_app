'use client'

import { FiSearch } from "react-icons/fi"
import { useState, useEffect } from "react"

export default function Search() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    const testFunc = function () {
        alert('test event handler');
    }

    return (
        <FiSearch onClick={testFunc}className="cursor-pointer w-6 h-6 mr-2"></FiSearch>
    )
}