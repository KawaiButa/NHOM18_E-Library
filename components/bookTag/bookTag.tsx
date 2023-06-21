import React, { Suspense, useEffect, useState } from "react";
import { Col, Row, Container, Button, Stack } from "react-bootstrap";
import Image from "next/image";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import styles from "./bookTag.module.css";
import axios from "axios";
import BookAPI from "../../endpoint/bookAPI";
import useProfile from "../../lib/useProfile";
const roboto = Roboto({
    weight: ["400", "700"],
    style: "normal",
    subsets: ["vietnamese"],
});
const open_sans = Open_Sans({
    weight: ["400", "500"],
    style: "normal",
    subsets: ["vietnamese"],
});
const montserrat = Montserrat({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
});
type Book = {
    id: string;
    name: string;
    author: string;
    publicationYear: string;
    imgUrl: string;
    description: string;
    ratingsAverage: string;
    price: string;
};
export default function BookTag({ id }) {
    const { profile } = useProfile();
    const [book, setBook] = useState({
        id: "",
        name: "",
        author: "",
        publicationYear: "",
        imgUrl: "",
        ratingsAverage: "",
        description: "",
        price: "",
    } as Book);
    useEffect(() => {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: BookAPI.oneBookEndpoint + id,
        };
        axios
            .request(config)
            .then((response) => {
                const data = response.data.data.doc;
                console.log(data);
                setBook({
                    id: data._id,
                    name: data.nameBook,
                    author: data.author,
                    publicationYear: data.publicationYear,
                    description: data.description,
                    imgUrl: data.photoUrls[0],
                    ratingsAverage: data.ratingsAverage,
                    price: data.price,
                } as Book);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, profile]);
    return (
        <>
            <Container
                as="div"
                className={`${styles.bookTag} border-bottom border-top border-4`}
            >
                <Row style={{ height: "100%", borderRadius: "10px" }}>
                    <Col
                        style={{
                            height: "100%",
                            borderRadius: "10px",
                        }}
                        xs="auto"
                    >
                        <Image
                            src={book.imgUrl}
                            crossOrigin="anonymous"
                            alt="Icon"
                            width={161}
                            height={243}
                            className={styles.bookTagImage}
                        />
                    </Col>
                    <Col style={{ borderRadius: "10px" }} auto>
                        <Row
                            style={{ width: "100%", height: "117px" }}
                            className=" d-flex justify-content-end align-items-center"
                        >
                            <Button
                                className="d-flex round-circle justify-content-center align-items-center"
                                size="sm"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    margin: "0px",
                                    padding: "0px",
                                    borderRadius: "50px",
                                    borderWidth: "5px",
                                    borderColor: "#D9D9D9",
                                    backgroundColor: "transparent",
                                    visibility:
                                        profile && profile.role == "admin"
                                            ? "visible"
                                            : "hidden",
                                }}
                                href={"/home/book/add/" + id}
                            >
                                <Image
                                    src="/icon_pen_add.ico"
                                    alt="iconPenAdd"
                                    width={20}
                                    height={20}
                                    className="d-flex"
                                />
                            </Button>
                        </Row>
                        <h1
                            className={roboto.className}
                            style={{ color: "black", fontSize: "40px" }}
                        >
                            {book.name}
                        </h1>
                        <h2
                            className={roboto.className}
                            style={{ opacity: "0.5", fontSize: "24px" }}
                        >
                            {book.author}
                        </h2>
                        <Stack
                            direction="horizontal"
                            gap={3}
                            className="justified-content-center"
                        >
                            <Col sm="auto">
                                <p
                                    className={roboto.className}
                                    style={{
                                        fontWeight: "700",
                                        fontSize: "25px",
                                    }}
                                >
                                    {book.publicationYear}
                                </p>
                            </Col>
                            <div className="vr" style={{ height: "29px" }} />
                            <Col sm="auto">
                                <p
                                    className={open_sans.className}
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "24px",
                                    }}
                                >
                                    {"Price: " +
                                        new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(Number.parseInt(book.price))}
                                </p>
                            </Col>
                        </Stack>
                        {/* <h1
                            className={roboto.className}
                            style={{ fontSize: "25px" }}
                        >
                            {book.ratingsAverage == "0"
                                ? ""
                                : "Rating: " + book.ratingsAverage}
                        </h1> */}

                        <h1
                            className={roboto.className}
                            style={{
                                fontWeight: "700",
                                fontSize: "35px",
                                marginLeft: "10px",
                            }}
                        >
                            Description
                        </h1>
                        <Stack className="d-flex">
                            <Container
                                className="rounded-pill"
                                style={{
                                    width: "100%",
                                    height: "3px",
                                    backgroundColor: "#D9D9D9",
                                }}
                            />
                            <Container
                                style={{
                                    width: "200px",
                                    height: "3px",
                                    backgroundColor: "#4BC1D2",
                                    position: "absolute",
                                }}
                            />
                        </Stack>
                        <p
                            className={roboto.className}
                            style={{
                                marginLeft: "6px",
                                marginRight: "6px",
                                fontSize: "20px",
                                lineHeight: "34px",
                                maxHeight: "280px",
                                overflowY: "auto",
                            }}
                        >
                            {book.description}
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
