"use client";
import React, { useEffect } from "react";
export default function Home() {
  var url: String;
  useEffect(() => {
    url = document.URL + "/landing";
  }, []);
  return (
    <>
      <header>
        <meta http-equiv="Refresh" content={`0; url='${url}'`} />
      </header>
      <main></main>
    </>
  );
}
