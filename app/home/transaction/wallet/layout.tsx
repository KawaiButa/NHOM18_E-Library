"use client";
import { Roboto } from "next/font/google";
import React from "react";
import { useEffect } from "react";

const roboto = Roboto({
  weight: "700",
  subsets: ["vietnamese"],
});
export default function Layout({ children }) {
  useEffect(() => {
    var search = document.getElementById("searchFormGroup");
    if(search)
      search.replaceChildren("")
  }, []);
  return (
    <div
    >
      {children}
    </div>
  );
}
