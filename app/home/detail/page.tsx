"use client";
import { Montserrat } from "next/font/google";
import React from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import BookTag from "../../../components/bookTag/bookTag";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", '900'],
  style: "normal",
  subsets: ["vietnamese"],
});
export default function BookDetail() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <BookTag></BookTag>
    </Container>
  );
}
