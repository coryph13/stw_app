'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

import defaultMessages from '@/messages/en.json';

export default function LocalizedNotFound() {
    const [messages, setMessages] = useState(defaultMessages.NotFound);
    const { locale } = useParams();

    useEffect(() => {
        import(`@/messages/${locale}.json`)
            .then(({ NotFound }) => {
                setMessages(NotFound)
            });
    }, [locale])

    return (
        <h1>{ messages.heading }</h1>
    )
}
