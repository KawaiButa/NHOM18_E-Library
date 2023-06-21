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
import useFee from "../../lib/useFee";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function FeeListCard() {
    const { feeReceipts } = useFee();
    const feeTable = () => {
        if (feeReceipts)
            return (
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
                            <th>Fee Receipt ID</th>
                            <th>Balance</th>
                            <th>Total Debt</th>
                            <th>Amount Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feeReceipts.map((element, index) => (
                            <tr key={element.id} id={index.toString()}>
                                <td>{index + 1}</td>
                                <td>{element.id}</td>
                                <td>{element.balance}</td>
                                <td>{element.totalDebt}</td>
                                <td>{element.amountPaid}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            );
        else return <></>;
    };
    useEffect(() => {}, [feeReceipts]);
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
                        Fee Card List
                    </h2>
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
                            {feeTable()}
                        </div>
                    </div>
                </Card>
            </Row>
        </>
    );
}
