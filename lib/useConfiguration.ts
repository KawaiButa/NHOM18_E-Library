import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useSWR from 'swr'
import axios from 'axios'
export default function useConfiguration() {
    const router = useRouter()
    const fetcher = async (url) => await axios.get(url).then((res) => res.data).catch((error) => { alert(error.response.data) });
    const { data: configuration, mutate: mutateConfiguration } = useSWR<{
        ageMin,
        ageMax,
        expiredMonth,
        numberOfBooks,
        publicationYear,
        borrowingDate
    }>('/api/configuration', fetcher)
    useEffect(() => {
        // if no redirect needed, just return (example: already on /dashboard)
        // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    }, [configuration])

    return { configuration, mutateConfiguration }
}