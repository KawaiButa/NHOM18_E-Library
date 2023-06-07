"use client";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import { Card, Button, Container, Row, Col, Stack } from "react-bootstrap";
import Image from "next/image";
import BookTag from "../components/bookTag/bookTag";
import { Montserrat, Roboto } from "next/font/google";
import BookPreview from "../components/bookPreview/bookPreview";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});


export default function Home() {
  return (
    <main className="d-flex justify-content-center">
      <Stack direction="vertical" style={{ paddingLeft: "52px" }} gap={3}>
        <header
          className="rounded"
          style={{
            width: "985px",
            backgroundColor: "black",
            paddingLeft: "52px",
            color: "white",
          }}
        >
          <h1
            className={montserrat.className}
            style={{ paddingTop: "5px", fontWeight: "700", fontSize: "45px" }}
          >
            Book List
          </h1>
        </header>
        <Stack direction="horizontal" gap={2}>
          {prepareAlphabets()}
        </Stack>
      </Stack>
    </main>
  );
}

const prepareAlphabets = () => {
  let result = [];
  for (let i = 65; i < 91; i++) {
    result.push(
      <Button
        key={i}
        onClick={() => {}}
        value={String.fromCharCode(i)}
        className="d-flex border-0"
        style={{
          width: "30px",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        {String.fromCharCode(i)}
      </Button>
    );
  }
  return result;
};
