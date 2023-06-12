"use client";

import React, { useState } from "react";
import MemberListCard from "../../../components/memberCardList/memberListComponent";
import MemberCard from "../../../components/memberCard/menberCard";
import MemberFrom from "../../../components/memberForm/memberForm"

export default function Member() {
  const [tab, setTab] = useState("memberList")
  return (
    <div className="d-flex justify-content-center align-items-center">
      {changeTab(tab, setTab)}
    </div>
  );
}
const changeTab = (tab, setTab) => {
    if(tab == "memberList")
        return <MemberListCard onAdd={ () => setTab("memberForm")}/>   
    if(tab == "memberForm")
        return <MemberFrom/>
}
