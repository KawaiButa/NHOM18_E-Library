import { Montserrat, Roboto } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import {
    Button,
    Card,
    CloseButton,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Modal,
    Row,
    Stack,
    Table,
} from "react-bootstrap";
import styles from "../borrowCardList/borrowCardDetail/borrowCardDetail.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { eventNames } from "process";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function BorrowCardDetail({ id }) {
    const [modal, setModal] = useState(false);
    const [bookList, setBookList] = useState(new Array<React.ReactElement>());
    const openModal = () => {
        document.getElementById("cancelButton")?.focus();
        setModal(true);
    }
    const closeModal = () => setModal(false);
    const [index, setIndex] = useState(-1);
    const router = useRouter();
    const [books, setBooks] = useState(
        new Array<{ id: String; name: String; quantity: number }>()
    );
    const bookTable = () => {
        if (books)
            return (
                <Table
                    className="border"
                    responsive
                    hover
                    style={{
                        borderBottomColor: "#D9D9D9",
                        width: "980px",
                    }}
                    id="table"
                >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Book Name</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{bookList}</tbody>
                </Table>
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
        async function GetBook() {
            axios
                .get("/api/borrow/" + id, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.status == 200) {
                        const data = response.data.books;
                        setBooks(data);
                        const result: React.ReactElement[] = [];
                        data.forEach((element, index) => {
                            books.push(element);
                            result.push(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{element.name}</td>
                                    <td>
                                        <FormControl
                                            type="number"
                                            size="sm"
                                            style={{ width: "60px" }}
                                            defaultValue={element.quantity}
                                            onChange={(event) => {
                                                const temp = [...books];
                                                var element = temp.at(index);
                                                var amount = Number.parseInt(
                                                    event.currentTarget.value
                                                );
                                                if (
                                                    element?.quantity &&
                                                    amount > 1
                                                ) {
                                                    element.quantity = amount;
                                                    setBooks(temp);
                                                }
                                            }}
                                        />
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
                                            onClick={(event) => {
                                                const index =
                                                    event.currentTarget
                                                        .parentElement
                                                        ?.parentElement
                                                        ?.firstChild
                                                        ?.textContent;
                                                var string;
                                                if (index)
                                                    string =
                                                        Number.parseInt(index) -
                                                        1;
                                                setIndex(string);
                                                openModal();
                                            }}
                                        >
                                            <Image
                                                src="/icon_delete.png"
                                                alt="delete"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            );
                        });
                        setBookList(result);
                    }
                })
                .catch((error) => {
                    alert(error.response.data);
                });
        }
        GetBook();
    }, [id]);
    return (
        <>
            <Row
                className="justify-content-center"
                style={{ display: "flex", flexDirection: "row" }}
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
                        Detail
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
                            href={"/home/transaction/borrow/add/" + id}
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
                                change
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
                            {bookTable()}
                        </div>
                    </div>

                    <Container className="mt-4">
                        <Row>
                            <Col className="d-flex justify-content-start">
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
                                        position: "relative",
                                        left: "100px",
                                    }}
                                    onClick={async function HandleSummitEvent(
                                        event
                                    ) {
                                        event.preventDefault();
                                        const table =
                                            document.getElementById("table");
                                        table?.replaceChildren();
                                        var child1 =
                                            document.createElement("div");
                                        child1.className = "spinner-border";
                                        var child2 =
                                            document.createElement("div");
                                        child2.className =
                                            "justify-content-center align-items-center";
                                        child2.append(child1);
                                        table?.append(child2);
                                        const result: Array<{
                                            bookId: String;
                                            quantity: number;
                                        }> = [];
                                        books.forEach((element) => {
                                            result.push({
                                                bookId: element.id,
                                                quantity: element.quantity,
                                            });
                                        });
                                        console.log(result);
                                        const data = {
                                            books: result,
                                        };
                                        await axios
                                            .patch("/api/borrow/" + id, {
                                                method: "PATCH",
                                                headers: {
                                                    "Content-Type":
                                                        "application/json",
                                                },
                                                body: JSON.stringify(data),
                                            })
                                            .then((response) => {
                                                if (response.status == 200) {
                                                    router.back();
                                                    alert(
                                                        "Update borrow form successfully"
                                                    );
                                                }
                                            })
                                            .catch((error) => {
                                                alert(error.response.data);
                                                router.refresh();
                                            });
                                    }}
                                >
                                    Save
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button
                                    className={montserrat.className}
                                    style={{
                                        width: "144px",
                                        height: "58px",
                                        borderRadius: "20px",
                                        backgroundColor: "#D9D9D9",
                                        color: "black",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        borderColor: "#D9D9D9",
                                        position: "relative",
                                        right: "100px",
                                    }}
                                    onClick={() => router.back()}
                                >
                                    Cancel
                                </Button>
                            </Col>
                        </Row>
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
                        <Modal.Title>Delete this borrow card?</Modal.Title>
                        <CloseButton onClick={closeModal}></CloseButton>
                    </Modal.Header>
                    <Modal.Body
                        style={{
                            borderBottomWidth: "2px",
                            paddingLeft: "15px",
                            paddingRight: "15px",
                        }}
                        id="modalBody"
                    >
                        <p
                            className={roboto.className}
                            style={{ fontSize: "20px", fontWeight: "300" }}
                        >
                            {"You want to delete this borrow card with name " +
                                books.at(index)?.name}
                        </p>
                        <p
                            className={roboto.className}
                            style={{ fontSize: "20px", fontWeight: "300" }}
                        >
                            {"ID: " + books.at(index)?.id}
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
                                onClick={() => {
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
                                    const temp = [...books];
                                    temp.splice(index, 1);
                                    setBooks(temp);
                                    const tempBooksList = [...bookList];
                                    tempBooksList.splice(index, 1);
                                    setBookList(tempBooksList);
                                    closeModal();
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
                                id="cancelButton"
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
