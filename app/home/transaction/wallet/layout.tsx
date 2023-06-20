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
    var search = document.getElementById("searchBar");
    search!.style.visibility = "hidden";
  }, []);
  return (
    <div
    >
      {children}
    </div>
  );
}
