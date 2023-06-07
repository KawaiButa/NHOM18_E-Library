"use client";
import React, { useEffect } from "react";
export default function Home() {
  url: String;
  useEffect(() => { this.url = document.URL + "/landing";
},[])
  return (
    <>
      <header>
        <meta http-equiv="Refresh" content={`0; url='${this.url}'`} />
      </header>
      <main></main>
    </>
  );
}
