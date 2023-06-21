"use client";
import React from "react";
<<<<<<< HEAD

export default function Home() {
  return (
    <>
      <header>
        <meta http-equiv="Refresh" content={`0; url='/landing'`} />
      </header>
      <main></main>
    </>
  );
=======
import Image from "next/image";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import BookTag from "./bookTag";
import MemberForm from "./components/memberForm";
import BorrowForm from "./components/borrowForm";
import MemberListCard from "./memberListComponent";
import BorrowListCard from "./components/borrowListCard";
import BorrowCardDetail from "./components/borrowCardDetail";
import SearchBar from "./components/searchBar";
import ReturnCard from "./components/returnCard";
import ReturnListCard from "./components/returnListCard";
import FeeListCard from "./components/feeListCard";
import RemindListCard from "./components/remindListCard";
import TopUp_payment from "./components/topUp_payment/topUp_payment";
import TransactionSuccess from "./landing/transactionSuccess/page";
import Configuration from "./components/configuration/configuration";
export default function Home() {
    return (
        <main className="d-flex justify-content-center align-items-center">
            <Configuration />
        </main>
    );
>>>>>>> b3450cfb647ace57e6652279fe2eb3c6217c96da
}
