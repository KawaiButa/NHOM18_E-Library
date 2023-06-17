"use client";
import React from "react";
import BookForm from "../../../../../components/bookForm/bookForm";

export default function Page({ params }: { params: { id: string } }){
    return <BookForm id = {params.id}></BookForm>
}