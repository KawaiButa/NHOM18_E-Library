"use client";
import React, { useEffect, useState } from "react";
import BorrowListCard from "../../../../components/borrowCardList/borrowListCard";
import useProfile from "../../../../lib/useProfile";
import axios from "axios";
import { useSearchParams } from "next/navigation";
export default function Transaction() {
  const [member, setMember] = useState();
  const { profile } = useProfile();
  const search = useSearchParams();
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
          });
      }
    }
    onCreate();
  }, [profile]);
  if (profile)
    if (profile.role == "admin" || search.get("borrower"))
      return (
        <div>
          <BorrowListCard></BorrowListCard>
        </div>
      );
    else if (!member)
      return (
        <>
          <h2>{"You don't have a reader card connect to this account."}</h2>
          <h2>
            {"Please contact to the library admin to create a reader card"}
          </h2>
        </>
      );
    else {
      if (document.URL.includes("borrower")) {
        return (
          <div>
            <BorrowListCard></BorrowListCard>
          </div>
        );
      }
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
  else
    return (
      <main
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "40%" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
}
