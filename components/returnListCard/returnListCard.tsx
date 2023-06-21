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

export default function ReturnListCard() {
    const [returnList, setReturnList] = useState({});
    const [modalDeleteOne, setModalDeleteOne] = useState(false);

    const openModalDeleteOne = () => setModalDeleteOne(true);
    const closeModalDeleteOne = () => setModalDeleteOne(false);

    return (
        <>
            <Row
                className="justify-content-center"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div
                    style={{
                        width: " 80%",
                        height: "70px",
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
                            top: "15px",
                            position: "relative",
                        }}
                    >
                        Return Card List
                    </h2>
                </div>
                <Card
                    style={{
                        width: "100%",
                        height: "606px",
                        position: "relative",
                        top: "-45px",
                    }}
                >
                    <div
                        className="d-flex justify-content-center"
                        style={{ display: "block", marginTop: "80px" }}
                    >
                        <div
                            style={{
                                height: "400px",
                                maxHeight: "350px",
                                overflowY: "auto",
                                width: "100%",
                                paddingLeft: "30px",
                                paddingRight: "30px",
                            }}
                        >
                            <Table
                                responsive
                                hover
                                style={{
                                    borderBottomColor: "#D9D9D9",
                                    width: "100%",
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th>Return Card ID</th>
                                        <th>Borrow Card ID</th>
                                        <th>Admin ID</th>
                                        <th>Reader ID</th>
                                        <th>Date Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>return001</td>
                                        <td>borrow001</td>
                                        {Array.from({ length: 3 }).map(
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
                                                    backgroundColor:
                                                        "transparent",
                                                }}
                                                onClick={openModalDeleteOne}
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
                <Modal show={modalDeleteOne} size="lg" style={{}}>
                    <Modal.Header
                        style={{
                            borderBottomWidth: "2px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                        }}
                    >
                        <Modal.Title>Delete this return card?</Modal.Title>
                        <CloseButton
                            onClick={closeModalDeleteOne}
                        ></CloseButton>
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
                            You want to delete this return card with ID:
                            21522007
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
                                onClick={closeModalDeleteOne}
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
