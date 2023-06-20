"use client";
import { Montserrat } from "next/font/google";
import React from "react";
import { Button, Card, Container, Form, Stack } from "react-bootstrap";
import BookTag from "../../../../components/bookTag/bookTag";
import { useRouter } from "next/navigation";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});
export default function BookDetail({ params }: { params: { id: string } }) {
  const route = useRouter();
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-start flex-column"
    >
      <Button
        className= {montserrat.className}
        style={{
          backgroundColor: "#4BC1D2",
          borderWidth: "0px",
          marginBottom: "30px",
          fontWeight: "700",
          fontSize: "20px",
          width: "100px",
          height: "32px",
          padding: "0px "
        }}
        onClick={() => {route.back()}}
      >
        Back
      </Button>
      <BookTag id = {params.id}></BookTag>
    </Container>
  );
}
