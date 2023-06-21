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
    FormControl,
    Modal,
    Row,
    Stack,
    Table,
} from "react-bootstrap";
import styles from "../borrowCardList/borrowListCard.module.css";
import useReturn from "../../lib/useReturn";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function RemindListCard() {
    const [returnList, setReturnList] = useState({});
    const [modal, setModal] = useState(false);
    const { returns } = useReturn();
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    const returnTable = () => {
        if (returns) {
            return (
                <Table
                    responsive
                    hover
                    style={{
                        borderBottomColor: "#D9D9D9",
                        width: "100%",
                        alignSelf: "center",
                    }}
                >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Reader Name</th>
                            <th>Borrow Date</th>
                            <th>Return Date</th>
                            <th>Late Fee</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {returns.map((element, index) => (
                            <tr key={element.id}>
                                <td>{index - 1}</td>
                                <td>{element.borrowerId}</td>
                                <td>{element.borrowId}</td>
                                <td>{element.returnDate}</td>
                                <td>
                                    {element.lateFee === 0.0
                                        ? "NO DELAY"
                                        : element.lateFee.toString()}
                                </td>
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
                        ))}
                    </tbody>
                </Table>
            );
        } else
            return (
                <main
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "100%", height: "40%" }}
                >
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </main>
            );
    };
    return (
        <>
            <Row
                className="justify-content-center"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div
                    style={{
                        width: "85%",
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
                            fontSize: "30px",
                        }}
                    >
                        Remind Card List
                    </h2>
                    <div
                        className="d-flex justify-content-end"
                        style={{
                            position: "relative",
                            top: "-32px",
                            right: "15px",
                        }}
                    >
                        <Button
                            className={styles.button}
                            style={{
                                height: "40px",
                                width: "98px",
                                backgroundColor: "#44B8CB",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}
                        >
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
                        </Button>
                    </div>
                </div>
                <Card
                    style={{
                        width: "1055px",
                        height: "580px",
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
                                height: "350px",
                                maxHeight: "350px",
                                overflowY: "auto",
                                width: "100%",
                                marginLeft: "30px",
                                marginRight: "30px",
                            }}
                        >
                            {returnTable()}
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
                        <Modal.Title>Delete this remind card?</Modal.Title>
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
                            You want to delete this remind card with ID:
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
