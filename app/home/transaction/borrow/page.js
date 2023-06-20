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
        await axios
          .get("/api/profile/" + profile?.id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log(response);
            if (response.status == 200) setMember(response.data);
          })
          .catch((error) => {
            alert(error.message.data);
            router.back();
          });
      }
    }
    onCreate();
  }, [member]);
  if (member)
    return (
      <div>
        <BorrowListCard id={member?.readerId}></BorrowListCard>
      </div>
    );
  else return <></>;
}
