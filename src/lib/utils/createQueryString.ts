'use client'

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";


const createQueryString = useCallback(
    (name: string, value: string) => {

        const searchParams = useSearchParams();

        const params = new URLSearchParams(searchParams)
    }
)
