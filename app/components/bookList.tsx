import { Montserrat, Roboto } from "next/font/google";
import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    CloseButton,
    Col,
    Container,
    Form,
    Image,
    Modal,
    Row,
    Stack,
    Table,
} from "react-bootstrap";
import styles from "./borrowListCard.module.css";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function BookList() {
    const [bookList, setBookList] = useState({});

    return (
        <>
            <Row
                className="justify-content-center"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div
                    style={{
                        width: " 985px",
                        height: "85px",
                        background: "black",
                        borderRadius: "10px",
                        position: "relative",
                        top: "0px",
                        zIndex: "2",
                        alignSelf: "center",
                    }}
                >
                    <h2
                        className={montserrat.className}
                        style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                            top: "21px",
                            position: "relative",
                        }}
                    >
                        Book List
                    </h2>
                    <div
                        className="d-flex justify-content-end"
                        style={{
                            position: "relative",
                            top: "-25px",
                            right: "15px",
                        }}
                    >
                        <Button
                            className={styles.button}
                            style={{
                                height: "40px",
                                width: "105px",
                                backgroundColor: "#44B8CB",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}
                        >
                            <Stack direction="horizontal" gap={2}>
                                <Image
                                    src="/bookIcon.png"
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginBottom: "12px",
                                        marginLeft: "8px",
                                    }}
                                />
                                <p
                                    className={montserrat.className}
                                    style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        alignSelf: "center",
                                        position: "relative",
                                        top: "2px",
                                    }}
                                >
                                    Add
                                </p>
                            </Stack>
                        </Button>
                    </div>
                </div>
                <Card
                    style={{
                        width: "1055px",
                        height: "606px",
                        position: "relative",
                        top: "-45px",
                    }}
                >
                    <div
                        className="d-flex justify-content-center"
                        style={{ display: "block", marginTop: "100px" }}
                    >
                        <div
                            style={{
                                height: "350px",
                                maxHeight: "350px",
                                overflowY: "auto",
                            }}
                        >
                            <Table
                                responsive
                                hover
                                style={{
                                    borderBottomColor: "#D9D9D9",
                                    width: "1000px",
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Book ID</th>
                                        <th>Author</th>
                                        <th>Publisher</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {Array.from({ length: 5 }).map(
                                            (_, index) => (
                                                <td key={index}>
                                                    Table cell {index}
                                                </td>
                                            )
                                        )}
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <Container className="mt-4 d-flex justify-content-center">
                        <Button
                            className={styles.button}
                            style={{
                                width: "144px",
                                height: "58px",
                                borderRadius: "20px",
                                backgroundColor: "#44B8CB",
                                color: "white",

                                borderColor: "#44B8CB",
                            }}
                        >
                            <p
                                className={montserrat.className}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "24px",
                                    marginTop: "5px",
                                }}
                            >
                                Detail
                            </p>
                        </Button>
                    </Container>
                </Card>
            </Row>
        </>
    );
}
