"use client";
import React from "react";
import MemberForm from "../../../../../components/memberForm/memberForm";
export default function Page({ params }: { params: { readerId: string } }){
    return <div className="d-flex justify-content-center align-items-center">
        <MemberForm readerID={params.readerId}/>
    </div>
}