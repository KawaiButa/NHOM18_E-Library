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
import styles from "./borrowListCard.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import BorrowForm from "../../models/borrowForm";
import useBorrow from "../../lib/useBorrow";
import fetchJson from "../../lib/fetchJson";
import useProfile from "../../lib/useProfile";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function BorrowListCard() {
    const { borrows, mutateBorrow } = useBorrow();
    const [borrowList, setBorrowList] = useState(null);
    const [modalDeleteOne, setModalDeleteOne] = useState(false);
    const [modalDeleteMulti, setModalDeleteMulti] = useState(false);
    const [index, setIndex] = useState(0);
    const { profile } = useProfile();
    const search = useSearchParams();

    const openModalDeleteOne = () => setModalDeleteOne(true);
    const closeModalDeleteOne = () => setModalDeleteOne(false);
    const openModalDeleteMulti = () => setModalDeleteMulti(true);
    const closeModalDeleteMulti = () => setModalDeleteMulti(false);
    const borrowTable = () => {
        if (borrowList && profile)
            return (
                <Table
                    responsive
                    hover
                    style={{
                        borderBottomColor: "#D9D9D9",
                        width: "100%",
                    }}
                    className="border"
                >
                    <thead>
                        <tr style={{ cursor: "default" }}>
                            <th>#</th>
                            <th>Reader Name</th>
                            <th>Date Created</th>
                            <th>Expected Return Date</th>
                            {profile.role == "admin" ? <th>Action</th> : <></>}
                        </tr>
                    </thead>
                    <tbody>
                        {borrowList.map((element, index) => (
                            <tr key={element.borrowId} id={index.toString()}>
                                <td style={{ cursor: "default" }}>
                                    {index + 1}
                                </td>
                                <td style={{ cursor: "default" }}>
                                    {element.readerName}
                                </td>
                                <td style={{ cursor: "default" }}>
                                    {element.dateCreated}
                                </td>
                                <td style={{ cursor: "default" }}>
                                    {element.expectedReturnDate}
                                </td>
                                {profile.role == "admin" ? (
                                    <td>
                                        <button
                                            className={styles.button}
                                            style={{
                                                width: "27px",
                                                height: "27px",
                                                borderWidth: "0px",
                                                marginLeft: "7px",
                                                backgroundColor: "transparent",
                                            }}
                                            onClick={(event) => {
                                                const ind =
                                                    event.currentTarget
                                                        .parentElement
                                                        ?.parentElement
                                                        ?.firstChild
                                                        ?.textContent;
                                                var string;
                                                if (ind)
                                                    string =
                                                        Number.parseInt(ind) -
                                                        1;
                                                setIndex(string);
                                                console.log(string);
                                                openModalDeleteOne();
                                            }}
                                        >
                                            <Image
                                                src="/icon_delete.png"
                                                alt="delete"
                                            />
                                        </button>
                                    </td>
                                ) : (
                                    <></>
                                )}
                            </tr>
                        ))}
                    </tbody>
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
        if (borrows && profile) {
            const borrowerId = search.get("borrower");
            const borrowAfterSearch = [...borrows];
            if (borrowerId) {
                borrowAfterSearch.forEach((element) => {
                    if (element.readerId != borrowerId)
                        borrowAfterSearch.splice(
                            borrowAfterSearch.indexOf(element),
                            0
                        );
                });
            }
            setBorrowList(borrowAfterSearch);
        }
    }, [borrows, profile]);
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
                        padding: "0px",
                    }}
                >
                    <h2
                        className={montserrat.className}
                        style={{
                            fontWeight: "700",
                            color: "white",
                            textAlign: "center",
                            top: "17px",
                            position: "relative",
                            cursor: "default",
                        }}
                    >
                        Borrow Card List
                    </h2>
                    <div
                        className="d-flex justify-content-end"
                        style={{
                            position: "relative",
                            top: "-30px",
                            right: "15px",
                            visibility:
                                profile && profile.role == "admin"
                                    ? "visible"
                                    : "hidden",
                        }}
                    >
                        <Button
                            className={styles.button}
                            style={{
                                height: "40px",
                                width: "105px",
                                backgroundColor: "#44B8CB",
                                borderWidth: "0px",
                                borderRadius: "30px",
                            }}
                            href="/home/transaction/borrow/add"
                            id="addButton"
                        >
                            <Stack direction="horizontal">
                                <Image
                                    src="/cardIcon.png"
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        marginBottom: "14px",
                                        marginLeft: "7px",
                                    }}
                                />
                                <p
                                    className={montserrat.className}
                                    style={{
                                        color: "white",
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                        alignSelf: "center",
                                        marginTop: "2px",
                                        marginLeft: "9px",
                                    }}
                                >
                                    Add
                                </p>
                            </Stack>
                        </Button>
                    </div>
                </div>
                <Card
                    style={{
                        width: "1055px",
                        height: "560px",
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
                                marginLeft: "40px",
                                marginRight: "40px",
                                width: "100%",
                            }}
                        >
                            {borrowTable()}
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
                        <Modal.Title>Delete this borrow card?</Modal.Title>
                        <CloseButton
                            onClick={closeModalDeleteOne}
                        ></CloseButton>
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
                            className={roboto.className}
                            style={{ fontSize: "20px", fontWeight: "300" }}
                        >
                            {"You want to delete this borrow card with ID: " +
                                borrows?.at(index)?.borrowId +
                                "?"}
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
                                onClick={async function HandleSummitEvent(
                                    event
                                ) {
                                    event.preventDefault();
                                    const element =
                                        document.getElementById("modalBody");
                                    element?.replaceChildren();
                                    var child1 = document.createElement("div");
                                    child1.className = "spinner-border";
                                    var child2 = document.createElement("div");
                                    child2.append(child1);
                                    element?.append(child2);
                                    const id = borrows?.at(index)?.borrowId;
                                    const response = await fetch(
                                        "/api/borrow/" + id,
                                        {
                                            method: "DELETE",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                        }
                                    );
                                    console.log(response);
                                    if (response.status == 200) {
                                        closeModalDeleteOne();
                                        await mutateBorrow(
                                            await fetchJson("/api/reader", {
                                                method: "GET",
                                                headers: {
                                                    "Content-Type":
                                                        "application/json",
                                                },
                                            })
                                        );
                                        alert(
                                            "Delete borrow form with id " +
                                                id +
                                                " successfully"
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
                        <Modal.Title>Delete these borrow cards?</Modal.Title>
                        <CloseButton
                            onClick={closeModalDeleteMulti}
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
                            Do you want to delete selected borrow cards?
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
            </Row>
        </>
    );
}
