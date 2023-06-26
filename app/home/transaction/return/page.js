"use client";
import React, { useState, useEffect } from "react";
import ReturnListCard from "../../../../components/returnListCard/returnListCard";
import axios from "axios";
import useProfile from "../../../../lib/useProfile";
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
          <ReturnListCard />
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
      var endpoint = "/home/transaction/return?borrower=" + member.readerId;
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
