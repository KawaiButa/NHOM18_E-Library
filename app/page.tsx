"use client";
import React from "react";
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
export default function Home() {
    return (
        <main className="d-flex justify-content-center align-items-center">
            <TopUp_payment />
        </main>
    );
}
