"use client";
import React from "react";


export default function Home() {
  const url = document.URL + "/landing";
  return <meta http-equiv="Refresh" content={`0; url='${url}'`} />

}
