import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useSWR from 'swr'
import { User } from '../models/user'
import axios from 'axios'
import Book from '../models/Book'

export default function useBook({
  redirectTo = '',
  redirectIfFound = false,
} = {}) {
  const router = useRouter()
  const fetcher = async (url) => await axios.get(url).then((res) => res.data).catch((error) => {});
  const { data: books, mutate: mutateBook } = useSWR<Book[]>('/api/book', fetcher)
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !books) return

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !books) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && books)
    ) {
      router.push(redirectTo)
    }
  }, [books, redirectIfFound, redirectTo])

  return { books, mutateBook }
}