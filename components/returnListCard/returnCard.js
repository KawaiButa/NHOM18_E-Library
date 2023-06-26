import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Stack,
  FormControl,
} from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import useBorrow from "../../lib/useBorrow";
import axios from "axios";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
});

export default function ReturnCard() {
  const [option, setOption] = useState(-1);
  const { borrows } = useBorrow();
  const [book, setBook] = useState(new Array());
  const router = useRouter();
  async function handleOptionChange(id) {
    setBook(null);
    await axios
      .get("/api/borrow/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data);
          const data = response.data.books;
          const result = [];
          data.forEach((element) => {
            result.push({
              id: element.id,
              name: element.name,
              quantity: element.quantity,
              lost: {
                value: false,
                quantity: 0,
              },
            });
          });
          setBook(result);
        }
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }
  useEffect(() => {
    if (borrows) {
      var input = document.getElementById("borrowID");
      input?.replaceChildren();
      input?.appendChild(document.createElement("option"));
      borrows.forEach((element, index) => {
        if (!element.isReturned) {
          var option = document.createElement("option");
          option.id = index.toString();
          option.value = element.borrowId;
          option.innerHTML = element.borrowId;
          input?.appendChild(option);
        }
      });
    }
  }, [borrows]);
  return (
    <>
      <Row
        className="justify-content-center"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            width: "403px",
            height: "70px",
            background: "black",
            borderRadius: "10px",
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
            Return Card
          </h2>
          <div
            className="d-flex justify-content-end"
            style={{
              position: "relative",
              top: "-25px",
              right: "15px",
            }}
          ></div>
        </div>
        <Card
          style={{
            width: "1055px",
            height: "900px",
            position: "relative",
            top: "-45px",
          }}
        >
          {borrows ? (
            <Form
              style={{
                width: "860px",
                alignSelf: "center",
                position: "relative",
                top: "70px",
              }}
              onSubmit={async function (event) {
                event.preventDefault();
                const lostBooks = [];
                book.forEach((element) => {
                  if (element.lost.value)
                    lostBooks.push({
                      bookId: element.id,
                      quantity: element.lost.quantity,
                    });
                });
                const borrowForm = borrows.at(option);
                const data = {
                  lostBooks: lostBooks,
                };

                await axios
                  .post("/api/borrow/" + borrowForm.borrowId + "/return", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    data: data,
                  })
                  .then((response) => {
                    if (response.status == 200) {
                      alert("Create return form successfully");
                      router.replace("/home/transaction/return");
                    } else {
                      alert(
                        "There is something wrong with the server.\nPlease try again in a few moment"
                      );
                    }
                  })
                  .catch((error) => {
                    alert(error.response.data);
                    router.replace("/home/transaction/return");
                  });
              }}
            >
              <Stack gap={5}>
                <Col md={8}>
                  <Form.Group>
                    <Form.Label className={montserrat.className}>
                      Borrow card ID
                    </Form.Label>
                    <Form.Control
                      as="select"
                      size="lg"
                      id="borrowID"
                      onChange={(event) => {
                        const id = event.currentTarget.value;
                        if (borrows)
                          for (let i = 0; i < borrows?.length; i++) {
                            const element = borrows.at(i);
                            if (element && element?.borrowId == id)
                              setOption(i);
                          }
                        console.log(option);
                        handleOptionChange(id);
                      }}
                      placeholder="Borrow ID"
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={8}>
                  <Form.Group>
                    <Form.Label className={montserrat.className}>
                      Member name
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="id"
                      disabled={true}
                      defaultValue={
                        option >= 0 ? borrows?.at(option)?.readerName : ""
                      }
                    />
                  </Form.Group>
                </Col>

                <Stack direction="horizontal" gap={3}>
                  <Col md={5}>
                    {!book ? (
                      <main
                        className="d-flex justify-content-center align-items-center"
                        style={{ width: "100%", height: "40%" }}
                      >
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </main>
                    ) : (
                      <Form.Group>
                        <Form.Label className={montserrat.className}>
                          Book order list
                        </Form.Label>
                        <Form.Control
                          id="bookOrderList"
                          size="lg"
                          as="select"
                          multiple
                          style={{ height: "345px" }}
                          onChange={(event) => {
                            event.preventDefault();
                            event.currentTarget.childNodes.forEach(
                              (element, index) => {
                                if (element.selected) {
                                  document.getElementById("quantity").value =
                                    book.at(element.id).quantity;
                                }
                              }
                            );
                            var lostBookList =
                              document.getElementById("lostBookList");
                            lostBookList.childNodes.forEach(
                              (element) => (element.selected = false)
                            );
                          }}
                        >
                          {book.map((element, index) => {
                            if (element.lost.quantity < element.quantity)
                              return (
                                <option key={element.id} id={index}>
                                  {element.name +
                                    ":  " +
                                    Number.parseInt(
                                      element.quantity - element.lost.quantity
                                    ) +
                                    "/" +
                                    element.quantity}
                                </option>
                              );
                          })}
                        </Form.Control>
                      </Form.Group>
                    )}
                  </Col>
                  <Col>
                    <Button
                      variant="primary"
                      size="lg"
                      className={montserrat.className}
                      style={{
                        width: "130px",
                        top: "15px",
                        position: "relative",
                        color: "white",
                        fontWeight: "700",
                        background: "#44B8CB",
                        borderColor: "#44B8CB",
                      }}
                      onClick={() => {
                        var bookOrderList =
                          document.getElementById("bookOrderList");
                        bookOrderList.childNodes.forEach((element) => {
                          if (element.selected) {
                            const index = element.id;
                            const temp = [...book];
                            if (
                              temp.at(index).lost.quantity +
                                document.getElementById("quantity").value <=
                              temp.at(index).quantity
                            ) {
                              temp.at(index).lost.value = true;
                              temp.at(index).lost.quantity =
                                temp.at(index).lost.quantity +
                                document.getElementById("quantity").value;
                            } else
                              alert(
                                "The lost number has exceed the quantity of borrow book"
                              );
                            setBook(temp);
                          }
                        });
                      }}
                    >
                      Add
                    </Button>
                    <FormControl
                      type="number"
                      id="quantity"
                      style={{ top: "22px", position: "relative" }}
                      onChange={(event) => {
                        if (event.currentTarget.value < 1)
                          event.currentTarget.value = 1;
                      }}
                    />
                    <Button
                      variant="secondary"
                      size="lg"
                      className={montserrat.className}
                      style={{
                        width: "130px",
                        top: "30px",
                        position: "relative",
                        color: "black",
                        fontWeight: "700",
                        background: "#D9D9D9",
                        borderColor: "#D9D9D9",
                      }}
                      onClick={() => {
                        var lostBookList =
                          document.getElementById("lostBookList");
                        lostBookList.childNodes.forEach((element) => {
                          console.log(element);
                          if (element.selected) {
                            const index = element.id;
                            const temp = [...book];
                            temp.at(index).lost.value = false;
                            temp.at(index).lost.quantity = 0;
                            console.log(index);
                            setBook(temp);
                          }
                        });
                      }}
                    >
                      Undo
                    </Button>
                  </Col>
                  <Col md={5}>
                    {!book ? (
                      <main
                        className="d-flex justify-content-center align-items-center"
                        style={{ width: "100%", height: "40%" }}
                      >
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </main>
                    ) : (
                      <Form.Group>
                        <Form.Label className={montserrat.className}>
                          Lost book list
                        </Form.Label>
                        <Form.Control
                          id="lostBookList"
                          size="lg"
                          as="select"
                          multiple
                          style={{ height: "345px" }}
                          onChange={(event) => {
                            event.preventDefault();
                            event.currentTarget.childNodes.forEach(
                              (element, index) => {
                                if (element.selected) {
                                  document.getElementById("quantity").value =
                                    Number.parseInt(
                                      book.at(element.id).lost.quantity
                                    );
                                }
                              }
                            );
                            var bookOrderList =
                              document.getElementById("bookOrderList");
                            bookOrderList.childNodes.forEach(
                              (element) => (element.selected = false)
                            );
                          }}
                        >
                          {book.map((element, index) => {
                            if (element.lost.value)
                              return (
                                <option key={element.id} id={index}>
                                  {element.name +
                                    ": " +
                                    Number.parseInt(element.lost.quantity) +
                                    "/" +
                                    element.quantity}
                                </option>
                              );
                          })}
                        </Form.Control>
                      </Form.Group>
                    )}
                  </Col>
                </Stack>

                <Container className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className={montserrat.className}
                    style={{
                      width: "195px",
                      height: "65px",
                      borderRadius: "20px",
                      backgroundColor: "#44B8CB",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "30px",
                      borderColor: "#44B8CB",
                      marginLeft: "30px",
                    }}
                  >
                    Create
                  </Button>
                </Container>
              </Stack>
            </Form>
          ) : (
            <main
              className="d-flex justify-content-center align-items-center"
              style={{ width: "100%", height: "40%" }}
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </main>
          )}
        </Card>
      </Row>
    </>
  );
}
