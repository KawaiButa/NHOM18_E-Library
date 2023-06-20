import { Montserrat, Roboto } from "next/font/google";
import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Modal,
    Row,
    Stack,
    InputGroup,
    Table,
} from "react-bootstrap";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function SearchBar() {
    return (
        <>
            <Container>
                <div className="d-flex">
                    <div
                        className="mb-3 d-flex"
                        style={{
                            width: "520px",
                            height: "38px",
                            background: "#151D3B",
                            borderColor: "#151D3B",
                            borderRadius: "16px",
                        }}
                    >
                        <Image
                            src="/Search.png"
                            alt="union"
                            style={{
                                width: "17px",
                                height: "17px",
                                position: "relative",
                                left: "15px",
                                top: "10px",
                                zIndex: "2",
                            }}
                        />
                        <FormControl
                            placeholder="Search"
                            style={{
                                background: "#151D3B",
                                borderColor: "#151D3B",
                                borderRadius: "16px",
                                overflow: "hidden",
                                color: "white",
                                outline: "none",
                                boxShadow: "none",
                                position: "relative",
                                left: "18px ",
                                fontSize: "14px",
                            }}
                        />
                        <Button
                            variant="primary"
                            style={{
                                borderRadius: "16px",
                                position: "relative",
                            }}
                        >
                            <Image
                                src="/Union.png"
                                alt="union"
                                style={{ width: "12px", height: "15px" }}
                            />
                        </Button>
                    </div>

                    <Button
                        variant="primary"
                        style={{
                            borderRadius: "17px",
                            position: "relative",
                            width: "78px",
                            height: "38px",
                            left: "40px",
                        }}
                    >
                        <p
                            className={montserrat.className}
                            style={{
                                color: "white",
                                fontWeight: "700",
                                fontSize: "16px",
                                alignSelf: "center",
                                position: "relative",
                            }}
                        >
                            All
                        </p>
                    </Button>
                </div>
            </Container>
        </>
    );
}
