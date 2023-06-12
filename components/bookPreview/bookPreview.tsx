"use client";
import { Roboto } from "next/font/google";
import Link from "next/link";
import React, { Suspense } from "react";
import { Container, Image } from "react-bootstrap";

const roboto = Roboto({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["vietnamese"],
});

export default function BookPreview({ imgUrl, bookID, bookName, author }) {
  const id = bookID;
  return (
    <>
      {" "}
      <Suspense fallback={<></>}>
        <Link
          href={{ pathname: "/home/library/detail", query: { bookId: bookID } }}
          style={{ textDecoration: "none" }}
        >
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
              src={imgUrl}
              crossOrigin="anonymous"
              alt=""
              style={{ width: "146px", height: "206px", borderRadius: "5px" }}
            />
            <h5
              className={roboto.className}
              style={{
                fontWeight: "500",
                fontSize: "17px",
                width: "100%",
                textAlign: "center",
                marginTop: "7px",
                textDecoration: "none",
              }}
            >
              {bookName}
            </h5>
            <p
              className={roboto.className}
              style={{
                fontWeight: "400",
                fontSize: "14px",
                width: "100%",
                textAlign: "center",
                opacity: "0.7",
                textDecoration: "none",
              }}
            >
              {author}
            </p>
          </Container>
        </Link>
      </Suspense>
    </>
  );
}
