"use client";
import React, { useEffect } from "react";
import BorrowForm from "../../../../../../components/borrowForm/borrowForm";

export default function Borrow({ params }: { params: { id: string }}){
    return <div >
        <BorrowForm id={params.id}/>
    </div>
}