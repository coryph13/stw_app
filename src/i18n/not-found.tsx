'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

import defaultMessages from '@/messages/en.json';

export default function LocalizedNotFound() {
    const [messages, setMessages] = useState(defaultMessages.notFound);
    const { locale } = useParams();

    useEffect(() => {
        if (locale && typeof locale === 'string') {
            import(`@/messages/${locale}.json`)
                .then((module: any) => {
                    if (module.NotFound) {
                        setMessages(module.NotFound);
                    }
                })
                .catch(() => {
                    // Fallback to default if locale file doesn't exist
                    setMessages(defaultMessages.notFound);
                });
        }
    }, [locale])

    return (
        <h1>{messages.heading}</h1>
    )
}