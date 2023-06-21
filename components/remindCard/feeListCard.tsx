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
import styles from "../borrowCardList/borrowListCard.module.css";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function FeeListCard() {
    const [feeList, setFeeList] = useState({});
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
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
                                        <th>Fee Card ID</th>
                                        <th>Return Card ID</th>
                                        <th>Admin ID</th>
                                        <th>Reader ID</th>
                                        <th>Fee charge</th>
                                        <th>Date Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>fee001</td>
                                        <td>return001</td>
                                        {Array.from({ length: 4 }).map(
                                            (_, index) => (
                                                <td key={index}>
                                                    Table cell {index}
                                                </td>
                                            )
                                        )}
                                        <td>
                                            <button
                                                className={styles.button}
                                                style={{
                                                    width: "27px",
                                                    height: "27px",
                                                    borderWidth: "0px",
                                                    position: "relative",
                                                    left: "10px",
                                                }}
                                                onClick={openModal}
                                            >
                                                <Image
                                                    src="/icon_delete.png"
                                                    alt="delete"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>fee002</td>
                                        <td>return002</td>
                                        {Array.from({ length: 4 }).map(
                                            (_, index) => (
                                                <td key={index}>
                                                    Table cell {index}
                                                </td>
                                            )
                                        )}
                                        <td>
                                            <button
                                                className={styles.button}
                                                style={{
                                                    width: "27px",
                                                    height: "27px",
                                                    borderWidth: "0px",
                                                    position: "relative",
                                                    left: "10px",
                                                }}
                                                onClick={openModal}
                                            >
                                                <Image
                                                    src="/icon_delete.png"
                                                    alt="delete"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Card>
                <Modal show={modal} size="lg" style={{}}>
                    <Modal.Header
                        style={{
                            borderBottomWidth: "2px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                        }}
                    >
                        <Modal.Title>Delete this borrow card?</Modal.Title>
                        <CloseButton onClick={closeModal}></CloseButton>
                    </Modal.Header>
                    <Modal.Body
                        style={{
                            borderBottomWidth: "2px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                        }}
                    >
                        <p
                            className={roboto.className}
                            style={{ fontSize: "20px", fontWeight: "300" }}
                        >
                            You want to delete this fee card with ID: 21522007
                        </p>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-end">
                        <Stack direction="horizontal" gap={3}>
                            <Button
                                className={styles.button}
                                style={{
                                    height: "32px",
                                    width: "98px",
                                    backgroundColor: "#CE433F",
                                    borderWidth: "0px",
                                    borderRadius: "30px",
                                }}
                            >
                                <p
                                    className={montserrat.className}
                                    style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        alignSelf: "center",
                                    }}
                                >
                                    Delete
                                </p>
                            </Button>
                            <Button
                                className={styles.button}
                                style={{
                                    height: "32px",
                                    width: "98px",
                                    backgroundColor: "#026EFF",
                                    borderWidth: "0px",
                                    borderRadius: "30px",
                                }}
                                onClick={closeModal}
                            >
                                <p
                                    className={montserrat.className}
                                    style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        alignSelf: "center",
                                    }}
                                >
                                    Cancel
                                </p>
                            </Button>
                        </Stack>
                    </Modal.Footer>
                </Modal>
            </Row>
        </>
    );
}
