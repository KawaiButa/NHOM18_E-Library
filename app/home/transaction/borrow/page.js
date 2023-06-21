"use client";
import React, { useEffect, useState } from "react";
import BorrowListCard from "../../../../components/borrowCardList/borrowListCard";
import useProfile from "../../../../lib/useProfile";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Transaction() {
  const [member, setMember] = useState();
  const { profile } = useProfile();
  const router = useRouter();
  useEffect(() => {
    async function onCreate() {
      if (profile) {
        console.log(profile.id);
        await axios
          .get("/api/profile/" + profile?.id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            if (response.status == 200) setMember(response.data);
            if (response.status == 204) setMember(null);
          })
      }
    }
    onCreate();
  }, [profile]);
  if (member == null)
    return (
      <>
        <h2>{"You don't have a reader card connect to this account."}</h2>
        <h2>{"Please contact to the library admin to create a reader card"}</h2>
      </>
    );
  if (member && profile)
    if (profile.role == "admin")
      return (
        <div>
          <BorrowListCard></BorrowListCard>
        </div>
      );
    else {
      var endpoint = "/home/transaction/borrow?borrower=" + member.readerId;
      return (
        <>
          <header>
            <meta http-equiv="Refresh" content={`0; url='` + endpoint + `'`} />
          </header>
          <main></main>
        </>
      );
    }
  else return <></>;
}
