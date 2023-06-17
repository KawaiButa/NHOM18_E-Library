"use client";

import React, { useState } from "react";
import MemberListCard from "../../../components/memberCardList/memberListComponent";
import MemberFrom from "../../../components/memberForm/memberForm"

export default function Member() {
  const [tab, setTab] = useState("memberList")
  return (
    <div className="d-flex justify-content-center align-items-center">
      <MemberListCard/>
    </div>
  );
}
