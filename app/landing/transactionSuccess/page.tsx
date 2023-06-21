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

export default function TransactionSuccess() {
    return (
        <>
            <Stack
                style={{
                    marginTop: "50px",
                    alignItems: "center",
                    background: "white",
                }}
            >
                <Image
                    src="/transactionSuccess.png"
                    style={{ width: "130px", height: "130px" }}
                />
                <div className="text-center">
                    <h1
                        className={montserrat.className}
                        style={{
                            color: "#4AAF79",
                            marginTop: "50px",
                            fontWeight: "600",
                        }}
                    >
                        Transaction successfully
                    </h1>
                    <p
                        className={montserrat.className}
                        style={{ fontSize: "18px", marginTop: "20px" }}
                    >
                        Your transaction has been completed successfully.
                        <br /> Please check your wallet again
                    </p>
                </div>

                <Button
                    className={montserrat.className}
                    variant="primary"
                    style={{
                        fontSize: "20px",
                        width: "140px",
                        borderRadius: "15px",
                        marginTop: "40px",
                        fontWeight: "600",
                        background: "#44B8CB",
                        borderColor: "#44B8CB",
                    }}
                >
                    Close
                </Button>
            </Stack>
        </>
    );
}
