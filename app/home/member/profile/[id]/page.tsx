"use client";

import React from "react";
import MemberCard from "../../../../../components/memberCard/menberCard";

export default function Page({ params }: { params: { id: String } }) {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <MemberCard user={params.id} />
    </div>
  );
}
