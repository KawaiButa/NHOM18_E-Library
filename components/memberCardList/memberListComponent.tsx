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
import styles from "./memberListCard.module.css";
import useReader from "../../lib/useReader";
import fetchJson from "../../lib/fetchJson";
import { useSearchParams } from "next/navigation";
import removeVietnameseTones from "../../lib/standelizeString";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});
export default function MemberListCard() {
    const { readers, mutateReader } = useReader();
    const [modalDeleteOne, setModalDeleteOne] = useState(false);
    const [modalDeleteMulti, setModalDeleteMulti] = useState(false);
    const [memberList, setMemberList] = useState(
        new Array<React.ReactElement>()
    );
    const [index, setIndex] = useState(0);
    const openModalDeleteOne = () => setModalDeleteOne(true);
    const closeModalDeleteOne = () => setModalDeleteOne(false);

    const openModalDeleteMulti = () => setModalDeleteMulti(true);
    const closeModalDeleteMulti = () => setModalDeleteMulti(false);
    const memberTable = () => {
        if (readers)
            return (
                <div
                    style={{
                        height: "450px",
                        maxHeight: "450px",
                        overflowY: "auto",
                    }}
                >
                    <Table
                        responsive
                        hover
                        style={{
                            marginTop: "48px",
                            borderBottomColor: "#D9D9D9",
                        }}
                    >
                        <thead>
                            <tr>
                                <th style={{ width: "40px" }}>No</th>
                                <th style={{ width: "220px" }}>Name</th>
                                <th style={{ width: "150px" }}>Reader type</th>
                                <th style={{ width: "300px" }}>Address</th>
                                <th style={{ width: "180px" }}>Member date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{memberList}</tbody>
                    </Table>
                </div>
            );
        else
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

    useEffect(() => {
        const result: React.ReactElement[] = [];
        if (readers) {
            readers.forEach((element, index) => {
                result.push(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{element.name}</td>
                        <td>{element.readerType}</td>
                        <td>{element.address}</td>
                        <td>{element.memberDate}</td>
                        <td>
                            <Button
                                style={{
                                    width: "27px",
                                    height: "27px",
                                    padding: "0px",
                                    marginTop: "0px",
                                    borderWidth: "0px",
                                    marginRight: "10px",
                                    backgroundColor: "transparent",
                                }}
                                href={"/home/member/" + element.readerId}
                            >
                                <Image src="/icon_edit.png" alt="delete" />
                            </Button>
                            <button
                                className={styles.button}
                                style={{
                                    width: "27px",
                                    height: "27px",
                                    borderWidth: "0px",
                                    backgroundColor: "transparent",
                                }}
                                onClick={(event) => {
                                    const index =
                                        event.currentTarget.parentElement
                                            ?.parentElement?.firstChild
                                            ?.textContent;
                                    var string;
                                    if (index)
                                        string = Number.parseInt(index) - 1;
                                    setIndex(string);
                                    openModalDeleteOne();
                                }}
                            >
                                <Image src="/icon_delete.png" alt="delete" />
                            </button>
                        </td>
                    </tr>
                );
            });
            setMemberList(result);
        }
    }, [readers]);
    return (
        <>
            <Card style={{ width: "1055px", height: "1050px" }}>
                <Card.Header
                    className={`${roboto.className} text-center`}
                    style={{
                        marginTop: "27px",
                        backgroundColor: "transparent",
                        borderWidth: "0px",
                        fontWeight: "400",
                        fontSize: "40px",
                    }}
                >
                    Member List
                </Card.Header>
                <Card.Body>
                    <div
                        className="d-flex justify-content-end"
                        style={{ marginBottom: "30px", marginRight: "30px" }}
                    >
                        <Button
                            className={styles.button}
                            style={{
                                height: "32px",
                                width: "98px",
                                backgroundColor: "#44B8CB",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}
                            href="/home/member/undefined"
                        >
                            <p
                                className={montserrat.className}
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "16px",
                                }}
                            >
                                Add
                            </p>
                        </Button>
                    </div>
                    <Stack
                        gap={5}
                        style={{ marginLeft: "20px", marginRight: "125px" }}
                    >
                        <Stack direction="horizontal" gap={5}>
                            <Col sm={4} style={{ height: "50px" }}>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    placeholder="Name"
                                />
                            </Col>
                            <Col sm={4} style={{ height: "50px" }}>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    placeholder="Email"
                                />
                            </Col>
                            <Col sm={4} style={{ height: "50px" }}>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    placeholder="Member date"
                                />
                            </Col>
                        </Stack>
                        <Stack direction="horizontal" gap={5}>
                            <Col sm={4} style={{ height: "50px" }}>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    placeholder="Date of birth"
                                />
                            </Col>
                            <Col sm={4} style={{ height: "50px" }}>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    placeholder="Address"
                                />
                            </Col>
                            <Col sm={4} style={{ height: "50px" }}>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    placeholder="Reader type"
                                />
                            </Col>
                        </Stack>
                        <Stack direction="horizontal" gap={5}>
                            <Col sm={4} style={{ height: "50px" }}>
                                <Form.Control
                                    style={{ height: "100%" }}
                                    placeholder="Member ID"
                                />
                            </Col>
                            <Col sm={4} style={{ height: "50px" }} />
                            <Col
                                sm={4}
                                style={{ height: "50px", alignItems: "end" }}
                            >
                                <Stack direction="horizontal" gap={3}>
                                    <Button
                                        className={styles.button}
                                        style={{
                                            height: "32px",
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
                                                fontSize: "16px",
                                                alignSelf: "center",
                                            }}
                                        >
                                            Search
                                        </p>
                                    </Button>
                                    <Button
                                        className={styles.button}
                                        style={{
                                            height: "32px",
                                            width: "98px",
                                            backgroundColor: "#D9D9D9",
                                            borderWidth: "0px",
                                            borderRadius: "30px",
                                        }}
                                    >
                                        <p
                                            className={montserrat.className}
                                            style={{
                                                color: "black",
                                                fontSize: "16px",
                                                alignSelf: "center",
                                            }}
                                        >
                                            Reset
                                        </p>
                                    </Button>
                                </Stack>
                            </Col>
                        </Stack>
                    </Stack>
                    {memberTable()}
                    <Container className="mt-4 d-flex justify-content-center">
                        <Button
                            className={styles.button}
                            style={{
                                width: "144px",
                                height: "58px",
                                borderRadius: "20px",
                                color: "white",
                                borderColor: "#CE433F",
                                backgroundColor: "#CE433F",
                            }}
                            onClick={openModalDeleteMulti}
                        >
                            <p
                                className={montserrat.className}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "24px",
                                    marginTop: "5px",
                                }}
                            >
                                Delete
                            </p>
                        </Button>
                    </Container>
                </Card.Body>
            </Card>
            <Modal show={modalDeleteOne} size="lg" style={{}}>
                <Modal.Header
                    style={{
                        borderBottomWidth: "2px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                    }}
                >
                    <Modal.Title>Delete this member?</Modal.Title>
                    <CloseButton onClick={closeModalDeleteOne}></CloseButton>
                </Modal.Header>
                <Modal.Body
                    id="modalBody"
                    style={{
                        borderBottomWidth: "2px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                    }}
                >
                    <p
                        id="deleteInform"
                        className={roboto.className}
                        style={{ fontSize: "20px", fontWeight: "300" }}
                    >
                        {"Do you want to delete reader with name: " +
                            readers?.at(index)?.name}
                    </p>
                    <p
                        id="deleteInform"
                        className={roboto.className}
                        style={{ fontSize: "20px", fontWeight: "300" }}
                    >
                        {"ID: " + readers?.at(index)?.readerId}
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
                            onClick={async function HandleSummitEvent(event) {
                                const element =
                                    document.getElementById("modalBody");
                                element?.replaceChildren();
                                var child1 = document.createElement("div");
                                child1.className = "spinner-border";
                                var child2 = document.createElement("div");
                                child2.className =
                                    "justify-content-center align-items-center";
                                child2.append(child1);
                                element?.append(child2);
                                event.preventDefault();
                                const response = await fetch(
                                    "/api/reader/" +
                                        readers?.at(index)?.readerId,
                                    {
                                        method: "DELETE",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    }
                                );
                                if (response.status == 200) {
                                    closeModalDeleteOne();
                                    await mutateReader(
                                        await fetchJson("/api/reader", {
                                            method: "GET",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                        })
                                    );
                                } else {
                                    alert(
                                        "There is a problem with server.\nPlease try again in a few seconds"
                                    );
                                }
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
            {/* Modal for deleting multiple books */}
            <Modal show={modalDeleteMulti} size="lg" style={{}}>
                <Modal.Header
                    style={{
                        borderBottomWidth: "2px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                    }}
                >
                    <Modal.Title>Delete these members?</Modal.Title>
                    <CloseButton onClick={closeModalDeleteMulti}></CloseButton>
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
                        Do you want to delete selected members?
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
                            onClick={closeModalDeleteMulti}
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
        </>
    );
}
