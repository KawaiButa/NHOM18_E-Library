"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import BookTag from "./bookTag";
import MemberForm from "./components/memberForm";
import BorrowForm from "./components/borrowForm";
import MemberListCard from "./memberListComponent";
import BorrowListCard from "./components/borrowListCard";
import BorrowCardDetail from "./components/borrowCardDetail";
export default function Home() {
    return (
        <main className="d-flex justify-content-center align-items-center">
            <BorrowCardDetail />
        </main>
    );
}
