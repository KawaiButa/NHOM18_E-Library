/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import FeeReceipt from '../models/feeReceipt';

export default function useFee() {
  const fetcher = async (url) => await axios.get(url).then((res) => res.data).catch((error) => {alert(error.response.data)});
  const { data: feeReceipts, mutate: mutateFeeReceipts } = useSWR<FeeReceipt[]>('/api/fee', fetcher)
  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
  }, [feeReceipts])

  return { feeReceipts, mutateFeeReceipts }
}