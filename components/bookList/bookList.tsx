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
import useBook from "../../lib/useBook";
import { useRouter } from "next/navigation";
import fetchJson from "../../lib/fetchJson";
import Book from "../../models/Book";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function BookList() {
  const [modalDeleteOne, setModalDeleteOne] = useState(false);
  const [modalDeleteMulti, setModalDeleteMulti] = useState(false);
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { books, mutateBook } = useBook();
  const [selectedBooks, setSelectedBooks] = useState(new Array<Book>());

  const openModalDeleteOne = () => setModalDeleteOne(true);
  const closeModalDeleteOne = () => setModalDeleteOne(false);

  const openModalDeleteMulti = () => setModalDeleteMulti(true);
  const closeModalDeleteMulti = () => setModalDeleteMulti(false);
  const bookTable = () => {
    if (books) {
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
              <th>Book Name</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((element, index) => (
              <tr
                key={element.id}
                onDoubleClick={(event) => {
                  event.preventDefault();
                  const index =
                    event.currentTarget.firstChild?.firstChild?.nodeValue;
                  if (index)
                    router.push(
                      "/home/book/" + books.at(Number.parseInt(index) - 1)?.id
                    );
                }}
                onClick={(event) => {
                  if (event.currentTarget.style.borderWidth == "") {
                    event.currentTarget.style.borderWidth = "2px";
                    event.currentTarget.style.borderColor = "red";
                    const temp = [...selectedBooks];
                    temp.push(element);
                    setSelectedBooks(temp);
                  } else {
                    event.currentTarget.style.borderWidth = "";
                    event.currentTarget.style.borderColor = "";
                    const temp = [...selectedBooks];
                    temp.splice(temp.indexOf(element), 1);
                    setSelectedBooks(temp);
                    console.log(temp);
                  }
                }}
              >
                <td>{index + 1}</td>
                <td>{element.name}</td>
                <td>{element.author}</td>
                <td>{element.publisher}</td>
                <td>{element.numberOfBooks}</td>
                <td>
                  <button
                    className={styles.button}
                    style={{
                      width: "27px",
                      height: "27px",
                      borderWidth: "0px",
                      position: "relative",
                      left: "10px",
                      backgroundColor: "transparent",
                    }}
                    onClick={(event) => {
                      const ind =
                        event.currentTarget.parentElement?.parentElement
                          ?.firstChild?.textContent;
                      var string;
                      if (ind) string = Number.parseInt(ind) - 1;
                      setIndex(string);
                      console.log(string);
                      openModalDeleteOne();
                    }}
                  >
                    <Image src="/icon_delete.png" alt="delete" />
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
            Book List
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
                width: "105px",
                backgroundColor: "#44B8CB",
                borderWidth: "0px",
                borderRadius: "30px",
              }}
            >
              <Stack
                as="a"
                direction="horizontal"
                gap={2}
                href="/home/book/add"
                style={{ textDecoration: "none" }}
              >
                <Image
                  src="/bookIcon.png"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginBottom: "12px",
                    marginLeft: "8px",
                  }}
                />
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
              </Stack>
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

          <Container
            className="mt-4 d-flex justify-content-center"
            style={{
              visibility: selectedBooks.length > 0 ? "visible" : "hidden",
            }}
          >
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
        </Card>
        <Modal show={modalDeleteOne} size="lg" style={{}}>
          <Modal.Header
            style={{
              borderBottomWidth: "2px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
          >
            <Modal.Title>Delete this book?</Modal.Title>
            <CloseButton onClick={closeModalDeleteOne}></CloseButton>
          </Modal.Header>
          <Modal.Body
            id="modalOneBody"
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
              {"You want to delete this book with name: " +
                books?.at(index)?.name}
            </p>
            <p
              className={roboto.className}
              style={{ fontSize: "20px", fontWeight: "300" }}
            >
              {"by: " + books?.at(index)?.author}
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
                  event.preventDefault();
                  const element = document.getElementById("modalOneBody");
                  element?.replaceChildren();
                  var child1 = document.createElement("div");
                  child1.className = "spinner-border";
                  var child2 = document.createElement("div");
                  child2.className =
                    "justify-content-center align-items-center";
                  child2.append(child1);
                  element?.append(child2);
                  const id = books?.at(index)?.id;
                  const name = books?.at(index)?.name;
                  const response = await fetch("/api/book/" + id, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                  console.log(response);
                  if (response.status == 200) {
                    closeModalDeleteOne();
                    await mutateBook(
                      await fetchJson("/api/book", {
                        method: "GET",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      })
                    );
                    alert("Delete book with name " + name + " successfully");
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
            <Modal.Title>Delete these books?</Modal.Title>
            <CloseButton onClick={closeModalDeleteMulti}></CloseButton>
          </Modal.Header>
          <Modal.Body
            style={{
              borderBottomWidth: "2px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            id="modalMultiBody"
          >
            <p
              className={roboto.className}
              style={{ fontSize: "20px", fontWeight: "300" }}
            >
              Do you want to delete selected books?
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
                onClick={async function HandleSummit(event) {
                  event.preventDefault();
                  try {
                    const element = document.getElementById("modalMultiBody");
                    element?.replaceChildren();
                    var child1 = document.createElement("div");
                    child1.className = "spinner-border";
                    var child2 = document.createElement("div");
                    child2.className =
                      "justify-content-center align-items-center";
                    child2.append(child1);
                    element?.append(child2);
                    for (let i = 0; i < selectedBooks.length; i++) {
                      const element = selectedBooks.at(i);
                      const response = await fetch("/api/book/" + element?.id, {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                        },
                      });
                    }
                  } catch (error) {
                    alert(error.message.data);
                    window.location.reload();
                  }
                  window.location.reload();
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
