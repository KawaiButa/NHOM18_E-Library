"use client";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
const roboto = Roboto({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["vietnamese"],
  });

export default function BookPreview () {
    return(<>        <Suspense fallback={<></>}>
    <Container
      style={{
        width: "147px",
        height: "274px",
        padding: "0px",
        margin: "0px",
        justifyContent: "center",
      }}
    >
      <Image
        src="/../public/Rectangle20.png"
        alt=""
        width={146}
        height={206}
      />
      <h5
        className={roboto.className}
        style={{
          fontWeight: "500",
          fontSize: "17px",
          width: "100%",
          textAlign: "center",
          marginTop: "7px",
        }}
      >
        Ticket to childhood
      </h5>
      <p
        className={roboto.className}
        style={{
          fontWeight: "400",
          fontSize: "14px",
          width: "100%",
          textAlign: "center",
          opacity: "0.7",
        }}
      >
        Nguyen Nhat Anh
      </p>
    </Container>
  </Suspense></>);
}