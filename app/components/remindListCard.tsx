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
import styles from "./borrowListCard.module.css";
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
                        Remind Card List
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
                        height: "606px",
                        position: "relative",
                        top: "-45px",
                    }}
                >
                    <Container
                        style={{
                            position: "relative",
                            top: "80px",
                            left: "50px",
                        }}
                    >
                        <p className="ms-3">Reader ID</p>
                        <div className="d-flex">
                            <div
                                className="d-flex"
                                style={{
                                    width: "400px",
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
                                        style={{
                                            width: "12px",
                                            height: "15px",
                                        }}
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
                    <div
                        className="d-flex justify-content-center"
                        style={{ display: "block", marginTop: "120px" }}
                    >
                        <div
                            style={{
                                height: "250px",
                                maxHeight: "250px",
                                overflowY: "auto",
                            }}
                        >
                            <Table
                                responsive
                                hover
                                style={{
                                    borderBottomColor: "#D9D9D9",
                                    width: "902px",
                                    alignSelf: "center",
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th>Remind ID</th>
                                        <th>Reader ID</th>
                                        <th>Expect Return Date</th>
                                        <th>Date left</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>remind001</td>
                                        <td>reader001</td>

                                        {Array.from({ length: 2 }).map(
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
                                        <td>remind001</td>
                                        <td>reader001</td>

                                        {Array.from({ length: 2 }).map(
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
                                        <td>remind001</td>
                                        <td>reader001</td>

                                        {Array.from({ length: 2 }).map(
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
                                        <td>remind001</td>
                                        <td>reader001</td>

                                        {Array.from({ length: 2 }).map(
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
                                        <td>remind001</td>
                                        <td>reader001</td>

                                        {Array.from({ length: 2 }).map(
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

                    <Container className="mt-4 d-flex justify-content-center">
                        <Button
                            className={montserrat.className}
                            style={{
                                width: "144px",
                                height: "58px",
                                borderRadius: "20px",
                                backgroundColor: "#44B8CB",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "20px",
                                borderColor: "#44B8CB",
                            }}
                        >
                            Detail
                        </Button>
                    </Container>
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
