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

export default function ReturnCard() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <>
            <Row
                className="justify-content-center"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div
                    style={{
                        width: "403px",
                        height: "70px",
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
                            top: "15px",
                            position: "relative",
                        }}
                    >
                        Return Card
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
                        height: "900px",
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
                                        Borrow card ID
                                    </Form.Label>
                                    <Form.Control as="select" size="lg">
                                        <option>borrowid001</option>
                                        <option>borrowid002</option>
                                        <option>borrowid003</option>
                                        <option>borrowid004</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={8}>
                                <Form.Group>
                                    <Form.Label
                                        className={montserrat.className}
                                    >
                                        Member name
                                    </Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="id"
                                        disabled={true}
                                    />
                                </Form.Group>
                            </Col>

                            <Stack direction="horizontal" gap={3}>
                                <Col md={5}>
                                    <Form.Group>
                                        <Form.Label
                                            className={montserrat.className}
                                        >
                                            Book order list
                                        </Form.Label>
                                        <Form.Control
                                            size="lg"
                                            as="select"
                                            multiple
                                            style={{ height: "345px" }}
                                            // disabled={true}
                                        >
                                            <option>Book Name 1</option>
                                            <option>Book Name 2</option>
                                            <option>Book Name 3</option>
                                            <option>Book Name 4</option>
                                            <option>Book Name 5</option>
                                            <option>Book Name 6</option>
                                            <option>Book Name 7</option>
                                            <option>Book Name 8</option>
                                            <option>Book Name 9</option>
                                            <option>Book Name 10</option>
                                            <option>Book Name 11</option>
                                            <option>Book Name 12</option>
                                            <option>Book Name 13</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className={montserrat.className}
                                        style={{
                                            width: "130px",
                                            top: "15px",
                                            position: "relative",
                                            color: "white",
                                            fontWeight: "700",
                                            background: "#44B8CB",
                                            borderColor: "#44B8CB",
                                        }}
                                    >
                                        Add
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        className={montserrat.className}
                                        style={{
                                            width: "130px",
                                            top: "30px",
                                            position: "relative",
                                            color: "black",
                                            fontWeight: "700",
                                            background: "#D9D9D9",
                                            borderColor: "#D9D9D9",
                                        }}
                                    >
                                        Undo
                                    </Button>
                                </Col>
                                <Col md={5}>
                                    <Form.Group>
                                        <Form.Label
                                            className={montserrat.className}
                                        >
                                            Lost book list
                                        </Form.Label>
                                        <Form.Control
                                            size="lg"
                                            as="select"
                                            multiple
                                            style={{ height: "345px" }}
                                            // disabled={true}
                                        ></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Stack>

                            <Container className="d-flex justify-content-center">
                                <Button
                                    className={montserrat.className}
                                    style={{
                                        width: "195px",
                                        height: "65px",
                                        borderRadius: "20px",
                                        backgroundColor: "#44B8CB",
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "30px",
                                        borderColor: "#44B8CB",
                                        marginLeft:"30px"
                                    }}
                                >
                                    Create
                                </Button>
                            </Container>
                        </Stack>
                    </Form>
                </Card>
            </Row>
        </>
    );
}
