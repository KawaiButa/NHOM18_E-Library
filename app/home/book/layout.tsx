"use client";
import { Roboto } from "next/font/google";
import React from "react";
import { useEffect } from "react";
import SearchBar from "../../../components/searchBar/searchBar";

const roboto = Roboto({
  weight: "700",
  subsets: ["vietnamese"],
});
export default function Layout({ children }) {
  useEffect(() => {
    var search = document.getElementById("searchFormGroup");
    search!.style.visibility = "hidden";
  }, []);
  return (
    <div
      className="justify-content-center align-items-center"
      style={{ marginLeft: "90px", marginRight: "60px" }}
    >
      <h1
        className={roboto.className}
        style={{ position: "absolute", top: "40px", fontWeight: "40px" }}
      >
        Add book
      </h1>
      {children}
    </div>
  );
}
