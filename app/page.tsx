"use client";
import React from "react";
import MemberCard from "../public/components/menberCard";
import User from "../models/user";

export default function Home() {
  const user = new User("21522441", "Pham Nguyen Nhat Duy", "21522007@gm.uit.edu.vn","Ho Chi Minh", "01/01/2002","01/01/2002 ")
  return (
    <>
      <header>
        <meta http-equiv="Refresh" content={`0; url='/landing'`} />
      </header>
      <main></main>
    </>
  );
}
