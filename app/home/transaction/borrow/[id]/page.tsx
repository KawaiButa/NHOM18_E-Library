/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import BorrowCardDetail from "../../../../../components/borrowCardList/borrowCardDetail/borrowCardDetail";

export default function Transaction({ params }: { params: { id: string } }) {
  return (
    <div>
      <BorrowCardDetail id={params.id} />
    </div>
  );
}