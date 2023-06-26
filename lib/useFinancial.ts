/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Financial from '../models/financial'

export default function useFinancial() {
  const fetcher = async (url) => await axios.get(url).then((res) => {if(res.status == 200) return res.data; else return new Financial("","",0,0)}).catch((error) => {console.log(error); return new Financial("","",0,0)});
  const { data: financial, mutate: mutateFinancial } = useSWR<Financial>('/api/financial', fetcher)
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
  }, [financial])

  return { financial, mutateFinancial }
}