"use client";
import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Image,
  Col,
  FormGroup,
  Stack,
} from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import useBook from "../../lib/useBook";
import useUser from "../../lib/useUser";
import styles from "./borrowForm.module.css";
import axios from "axios";
import useReader from "../../lib/useReader";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
});
export default function BorrowForm({ id }) {
  const { user } = useUser();
  const { books } = useBook();
  const { readers } = useReader();
  const [count, setCount] = useState(1);
  const [borrowBook, setBorrowBook] = useState([]);
  const [borrowBookList, setBorrowBookList] = useState([]);
  const [maxBook, setMaxBook] = useState([]);
  const router = useRouter();
  const bookTable = () => {
    const result = [];
    console.log(borrowBook);
    borrowBook.forEach((element, index) => {
      result.push(
        <tr>
          <td>{index + 1}</td>
          <td>{element.name}</td>
          <td>{element.quantity}</td>
        </tr>
      );
    });
    setBorrowBookList(result);
  };
  useEffect(() => {
    var list = document.getElementById("book");
    list?.replaceChildren([]);
    books?.forEach((element) => {
      var option = document.createElement("option");
      option.value = element.name;
      option.id = element.id;
      list?.appendChild(option);
    });
    readers?.forEach((element) => {
      var option = document.createElement("option");
      option.value = element.name;
      option.id = element.id;
    });
    var memberName = document.getElementById("memberName");
    if (memberName && !id) memberName.value = user?.name;
    var amount = document.getElementById("amount");
    if (amount) amount.value = count + "/" + maxBook;
    if (id) {
      axios
        .get("/api/borrow/" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const data = response.data;
          setBorrowBook(data.books);
          bookTable()
          console.log(response)
          var memberName = document.getElementById("memberName");
          if (memberName) {
            memberName.value =
              data.borrower.firstName + " " + data.borrower.lastName;
            memberName.disabled = true;
          }
        })
        .catch((error) => {
          alert(error.response.data);
          router.back();
        });
    }
  }, [books, user, count, maxBook, readers]);
  if (books && user && readers)
    return (
      <>
        <Row
          className="justify-content-center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              width: "403px",
              height: "60px",
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
                top: "12px",
                position: "relative",
              }}
            >
              Borrow Card
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
              height: "880px",
              position: "relative",
              top: "-45px",
            }}
          >
            <Form
              id="form"
              style={{
                width: "860px",
                alignSelf: "center",
                position: "relative",
                top: "70px",
              }}
              onSubmit={async function HandleSubmit(event) {
                event.preventDefault();
                const temp = [];
                borrowBook.map((value, index) =>
                  temp.push({ bookId: value.id, quantity: value.amount })
                );
                const body = {
                  books: temp,
                };
                axios
                  .post("/api/borrow", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body),
                  })
                  .then((response) => {
                    if (response.status == 200)
                      alert("Created borrow-book card successfully");
                    else
                      alert(
                        "There is a error on the server. Please try again in a few second"
                      );
                  })
                  .catch((error) => {
                    alert(error.response.data);
                  });
              }}
            >
              <Stack gap={5}>
                <Col md={8}>
                  <Form.Group>
                    <Form.Label className={montserrat.className}>
                      Member Name
                    </Form.Label>
                    <input
                      id="memberName"
                      type="text"
                      list="name"
                      className="form-control"
                      disabled={user?.role == "admin" ? false : true}
                    />
                    <datalist id="name"></datalist>
                  </Form.Group>
                </Col>

                <Stack direction="horizontal" gap={5}>
                  <Col md={8}>
                    <Stack direction="horizontal">
                      <Form.Group>
                        <Form.Label className={montserrat.className}>
                          Book Name
                        </Form.Label>
                        <Form.Control
                          as="input"
                          className="shadow-none"
                          id="bookName"
                          list="book"
                          style={{ width: "492px" }}
                          onChange={(event) => {
                            var flag = false;
                            for (let index = 0; index < books.length; index++) {
                              const element = books[index];
                              console.log(event.currentTarget.value);
                              if (element.name == event.currentTarget.value) {
                                setMaxBook(element.numberOfBooks);
                                setCount(1);
                                flag = true;
                                break;
                              }
                            }
                            if (!flag) {
                              setCount(0);
                              setMaxBook("0");
                            }
                          }}
                        ></Form.Control>
                        <datalist id="book"></datalist>
                      </Form.Group>
                      <Stack
                        direction="horizontal"
                        style={{
                          marginTop: "32px",
                          marginLeft: "0px",
                        }}
                      >
                        <Form.Control
                          id="amount"
                          type="text"
                          placeholder="1"
                          className="shadow-none"
                          style={{
                            textAlign: "left",
                            width: "80px",
                          }}
                        />
                        <Stack
                          direction="vertical"
                          style={{
                            marginLeft: "-30px",
                            marginTop: "5px",
                          }}
                        >
                          <Image
                            src="/up.png"
                            alt="up"
                            style={{
                              width: "20px",
                              top: "1px",
                              position: "relative",
                              height: "20px",
                            }}
                            onClick={() => {
                              if (count != maxBook) setCount(count + 1);
                            }}
                          ></Image>
                          <Image
                            src="/down.png"
                            alt="down"
                            style={{
                              width: "20px",
                              bottom: "2px",
                              position: "relative",
                              height: "20px",
                            }}
                            onClick={() => {
                              if (count != 0) setCount(count - 1);
                            }}
                          ></Image>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Col>

                  <Button
                    variant="primary"
                    size="lg"
                    className={montserrat.className}
                    style={{
                      width: "130px",
                      top: "15px",
                      left: "-12px",
                      position: "relative",
                      fontWeight: "700",
                      background: "#44B8CB",
                      borderColor: "#44B8CB",
                    }}
                    onClick={() => {
                      var input = document.getElementById("bookName");
                      var option;
                      for (let index = 0; index < books.length; index++) {
                        const element = books[index];
                        if (element.name == input.value) {
                          option = element;
                          break;
                        }
                      }
                      for (let index = 0; index < borrowBook.length; index++) {
                        const element = borrowBook[index];
                        console.log(option);
                        console.log(element);
                        if (option.id == element.id) {
                          borrowBook.splice(index, 1);
                          break;
                        }
                      }

                      if (option) {
                        borrowBook.push({
                          id: option.id,
                          name: option.name,
                          quantity: count,
                        });
                        bookTable();
                      }
                    }}
                  >
                    Add
                  </Button>
                </Stack>

                <Stack direction="horizontal" gap={5}>
                  <Col md={9}>
                    <Form.Group>
                      <Form.Label className={montserrat.className}>
                        Book order list
                      </Form.Label>
                      <table
                        className={`${styles.tableFixed} table`}
                        onSelect={(event) => {
                          console.log(event.currentTarget);
                        }}
                      >
                        <thead>
                          <tr>
                            <th class="col-xs-3">STT</th>
                            <th class="col-xs-3">Name</th>
                            <th class="col-xs-6"> Amount</th>
                          </tr>
                        </thead>
                        <tbody id="tableBody">{borrowBookList}</tbody>
                      </table>
                    </Form.Group>
                  </Col>
                  <Button
                    variant="secondary"
                    size="lg"
                    className={montserrat.className}
                    style={{
                      width: "130px",
                      top: "15px",
                      position: "relative",
                      color: "black",
                      fontWeight: "700",
                      background: "#D9D9D9",
                      borderColor: "#D9D9D9",
                    }}
                    onClick={() => {
                      var temp = [...borrowBook];
                      temp.pop();
                      setBorrowBook(temp);
                      bookTable();
                    }}
                  >
                    Undo
                  </Button>
                </Stack>

                <Container className="d-flex justify-content-center">
                  <Button
                    type="submit"
                    className={montserrat.className}
                    style={{
                      width: "231px",
                      height: "68px",
                      borderRadius: "20px",
                      position: "absolute",
                      backgroundColor: "#44B8CB",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "35px",
                      borderColor: "#44B8CB",
                      padding: "0px",
                      bottom: "-250px",
                    }}
                  >
                    Summit
                  </Button>
                </Container>
              </Stack>
            </Form>
          </Card>
        </Row>
      </>
    );
  else
    return (
      <main
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
}
