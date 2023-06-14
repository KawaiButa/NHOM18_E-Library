"use client";
import {
    Button,
    Card,
    Container,
    Form,
    Row,
    Image,
    Col,
    FormGroup,
    Stack,
} from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import useBook from "../../lib/useBook";
import useUser from "../../lib/useUser";
import styles from "./borrowForm.module.css";

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["vietnamese"],
});

export default function BorrowForm() {
    const { user } = useUser();
    const { books } = useBook();

    const [count, setCount] = useState(0);

    useEffect(() => {
        var list = document.getElementById("book");
        list.replaceChildren([]);
        books?.forEach((element) => {
            var option = document.createElement("option");
            option.value = element.name;
            option.id = element.id;
            list.appendChild(option);
        });
        var memberName = document.getElementById("memberName");
        memberName.value = user?.name;
    }, [books, user]);
    return (
        <>
            <Row
                className="justify-content-center"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div
                    style={{
                        width: "403px",
                        height: "85px",
                        background: "black",
                        borderRadius: "10px",
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
                        Borrow Card
                    </h2>
                    <div
                        className="d-flex justify-content-end"
                        style={{
                            position: "relative",
                            top: "-25px",
                            right: "15px",
                        }}
                    ></div>
                </div>
                <Card
                    style={{
                        width: "1055px",
                        height: "880px",
                        position: "relative",
                        top: "-45px",
                    }}
                >
                    <Form
                        style={{
                            width: "860px",
                            alignSelf: "center",
                            position: "relative",
                            top: "70px",
                        }}
                    >
                        <Stack gap={5}>
                            <Col md={8}>
                                <Form.Group>
                                    <Form.Label
                                        className={montserrat.className}
                                    >
                                        Member Name
                                    </Form.Label>
                                    <input
                                        id="memberName"
                                        type="text"
                                        list="name"
                                        className="form-control"
                                        disabled={
                                            user?.role == "admin" ? false : true
                                        }
                                    />
                                    <datalist id="name"></datalist>
                                </Form.Group>
                            </Col>

                            <Stack direction="horizontal" gap={5}>
                                <Col md={8}>
                                    <Stack direction="horizontal">
                                        <Form.Group>
                                            <Form.Label
                                                className={montserrat.className}
                                            >
                                                Book Name
                                            </Form.Label>
                                            <Form.Control
                                                as="input"
                                                className="shadow-none"
                                                list="book"
                                                style={{ width: "492px" }}
                                            ></Form.Control>
                                            <datalist id="book"></datalist>
                                        </Form.Group>
                                        <Stack
                                            direction="horizontal"
                                            style={{
                                                marginTop: "32px",
                                                marginLeft: "0px",
                                            }}
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="100"
                                                readOnly
                                                className="shadow-none"
                                                style={{
                                                    textAlign: "left",
                                                    width: "80px",
                                                }}
                                            />
                                            <Stack
                                                direction="vertical"
                                                style={{
                                                    marginLeft: "-30px",
                                                    marginTop: "5px",
                                                }}
                                            >
                                                <Image
                                                    src="/up.png"
                                                    style={{
                                                        width: "20px",
                                                        top: "1px",
                                                        position: "relative",
                                                        height: "20px",
                                                    }}
                                                ></Image>
                                                <Image
                                                    src="/down.png"
                                                    style={{
                                                        width: "20px",
                                                        bottom: "2px",
                                                        position: "relative",
                                                        height: "20px",
                                                    }}
                                                ></Image>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Col>

                                <Button
                                    variant="primary"
                                    size="lg"
                                    className={montserrat.className}
                                    style={{
                                        width: "130px",
                                        top: "15px",
                                        left: "-12px",
                                        position: "relative",
                                        fontWeight: "700",
                                        background: "#44B8CB",
                                        borderColor: "#44B8CB",
                                    }}
                                >
                                    Add
                                </Button>
                            </Stack>

                            <Stack direction="horizontal" gap={5}>
                                <Col md={9}>
                                    <Form.Group>
                                        <Form.Label
                                            className={montserrat.className}
                                        >
                                            Book order list
                                        </Form.Label>
                                        <table
                                            className={`${styles.tableFixed} table`}
                                        >
                                            <thead>
                                                <tr>
                                                    <th class="col-xs-3">
                                                        STT
                                                    </th>
                                                    <th class="col-xs-3">
                                                        Name
                                                    </th>
                                                    <th class="col-xs-6">
                                                        {" "}
                                                        Amount
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody></tbody>
                                        </table>
                                    </Form.Group>
                                </Col>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className={montserrat.className}
                                    style={{
                                        width: "130px",
                                        top: "15px",
                                        position: "relative",
                                        color: "black",
                                        fontWeight: "700",
                                        background: "#D9D9D9",
                                        borderColor: "#D9D9D9",
                                    }}
                                >
                                    Undo
                                </Button>
                            </Stack>

                            <Container className="d-flex justify-content-center">
                                <Button
                                    className={montserrat.className}
                                    style={{
                                        width: "231px",
                                        height: "76px",
                                        borderRadius: "20px",
                                        position: "absolute",
                                        backgroundColor: "#44B8CB",
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "35px",
                                        borderColor: "#44B8CB",
                                        padding: "0px",
                                        bottom: "-250px",
                                    }}
                                >
                                    Summit
                                </Button>
                            </Container>
                        </Stack>
                    </Form>
                </Card>
            </Row>
        </>
    );
}
