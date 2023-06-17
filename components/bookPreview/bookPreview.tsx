"use client";
import { Roboto } from "next/font/google";
import Link from "next/link";
import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";

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
                    href={"/home/book/" + bookID}
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
                            width={146}
                            height={206}
                            style={{ borderRadius: "5px" }}
                        />
                        <h5
                            className={roboto.className}
                            style={{
                                fontWeight: "500",
                                fontSize: "17px",
                                width: "146px",
                                textAlign: "center",
                                marginTop: "7px",
                                textDecoration: "none",
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                            }}
                        >
                            {bookName}
                        </h5>
                        <p
                            className={roboto.className}
                            style={{
                                fontWeight: "400",
                                fontSize: "14px",
                                width: "146px",
                                textAlign: "center",
                                opacity: "0.7",
                                textDecoration: "none",
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
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
