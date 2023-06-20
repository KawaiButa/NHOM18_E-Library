import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useSWR from 'swr'
import { User } from '../models/user'
import axios from 'axios'
import Book from '../models/Book'
import BorrowForm from '../models/borrowForm'

export default function useBorrow() {
  const router = useRouter()
  const fetcher = async (url) => await axios.get(url).then((res) => res.data).catch((error) => {alert(error.response.data)});
  const { data: borrows, mutate: mutateBorrow } = useSWR<BorrowForm[]>('/api/borrow', fetcher)
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
  }, [borrows])

  return { borrows, mutateBorrow }
}