import {
    Button,
    Card,
    Container,
    Form,
    Row,
    Col,
    FormGroup,
    Stack,
} from "react-bootstrap";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["vietnamese"],
});

export default function BorrowForm() {
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
                        height: "1102px",
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
                                    <Form.Control as="select" size="lg">
                                        <option>Nguyễn Minh Pháp</option>
                                        <option>Cao Quảng An Hưng</option>
                                        <option>Phạm Nguyễn Nhật Duy</option>
                                        <option>Lý Thanh Tú Anh</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label
                                        className={montserrat.className}
                                    >
                                        Member ID
                                    </Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="id"
                                        disabled={true}
                                    />
                                </Form.Group>
                            </Col>
                            <Stack direction="horizontal" gap={5}>
                                <Col md={8}>
                                    <Form.Group>
                                        <Form.Label
                                            className={montserrat.className}
                                        >
                                            Book Name
                                        </Form.Label>
                                        <Form.Control as="select" size="lg">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Button
                                    variant="primary"
                                    size="lg"
                                    className={montserrat.className}
                                    style={{
                                        width: "130px",
                                        top: "15px",
                                        position: "relative",
                                    }}
                                >
                                    Add
                                </Button>
                            </Stack>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label
                                        className={montserrat.className}
                                    >
                                        Book ID
                                    </Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="id"
                                        disabled={true}
                                    />
                                </Form.Group>
                            </Col>
                            <Stack direction="horizontal" gap={5}>
                                <Col md={9}>
                                    <Form.Group>
                                        <Form.Label
                                            className={montserrat.className}
                                        >
                                            Book order list
                                        </Form.Label>
                                        <Form.Control
                                            size="lg"
                                            as="textarea"
                                            rows={10}
                                        />
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
                                        height: "88px",
                                        borderRadius: "20px",
                                        backgroundColor: "#44B8CB",
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "35px",
                                        borderColor: "#44B8CB",
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