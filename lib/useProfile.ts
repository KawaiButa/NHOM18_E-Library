import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useSWR from 'swr'
import { User } from '../models/user'
import axios from 'axios'

export default function useProfile({
  redirectTo = '',
  redirectIfFound = false,
  backwardIfFound = true,
} = {}) {
  const router = useRouter()
  const fetcher = async (url) => await axios.get(url).then((res) => res.data).catch((error) => {router.push("/landing/login")});
  const { data: profile, mutate: mutateProfile } = useSWR<User>('/api/profile', fetcher)
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !profile) return
    
    if (
      // If redirectTo is set, redirect if the profile was not found.
      (redirectTo && !redirectIfFound && !profile) ||
      // If redirectIfFound is also set, redirect if the profile was found
      (redirectIfFound && profile)
      ) {
        router.push(redirectTo)
      }
      if(backwardIfFound && profile)
      {
        var previousURL = document.referrer
        console.log(previousURL.split("/").at(-1))
        if(previousURL.split("/").at(-1) != "signup" && previousURL.split("/").at(-1) != "landing")
          router.back()
      }
      router.push("/home")
  }, [profile, redirectIfFound, redirectTo])

  return { profile, mutateProfile }
}