'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return <FiSun className="animate-spin w-6 h-6 mr-2"/>
    }
    
    if (resolvedTheme === 'dark') {
        return <FiSun className="hover:animate-spin cursor-pointer w-6 h-6 mr-2" onClick={() => setTheme('light')} />
    }
    
    if (resolvedTheme === 'light') {
        return <FiMoon className="hover:animate-pulse cursor-pointer w-6 h-6 mr-2" onClick={() => setTheme('dark')} />
    }
}