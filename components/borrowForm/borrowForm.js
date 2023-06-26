"use client";
import {
  Button,
  Card,
  Container,
  Form,
  Row,
  Image,
  Col,
  Table,
  Stack,
} from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import useBook from "../../lib/useBook";
import styles from "./borrowForm.module.css";
import axios from "axios";
import useReader from "../../lib/useReader";
import { useRouter } from "next/navigation";
import useProfile from "../../lib/useProfile";
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
});
export default function BorrowForm({ id }) {
  const { profile } = useProfile();
  const { books } = useBook();
  const { readers } = useReader();
  const [borrowBook, setBorrowBook] = useState([]);
  const [maxBook, setMaxBook] = useState([]);
  const [selectedReader, setSelectedReader] = useState(null);
  const onMaxBookChange = (value) => {
    if (value > -1) setMaxBook(value);
  };
  const router = useRouter();
  const bookTable = () => {
    if (borrowBook) {
      return (
        <Table
          responsive
          striped
          hover
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
          <tbody id="tableBody">
            {borrowBook.map((element, index) => (
              <tr
                key={index}
                onClick={(event) => {
                  event.preventDefault();
                  const index = event.currentTarget.firstChild.value - 1;
                  const book = borrowBook.at(index);
                  document.getElementById("bookName").value = book.name;
                  for (let index2 = 0; index2 < books.length; index2++)
                    if (book.id == books[index2].id) {
                      onMaxBookChange(books[index2].numberOfBooks);
                      break;
                    }
                  document.getElementById("amount").value = element.quantity;
                }}
              >
                <td>{index + 1}</td>
                <td>{element.name}</td>
                <td>{element.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    } else
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
  };
  useEffect(() => {
    async function onCreate() {
      if (profile) {
        await axios
          .get("/api/profile/" + profile?.id, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            if (response.status == 200) {
              if (profile.role != "admin") {
                setSelectedReader(response.data);
                var memberName = document.getElementById("memberName");
                if (memberName) {
                  memberName.value = response.data.name;
                  memberName.disabled = true;
                }
              }
            }
          });
      }
    }
    if (profile) {
      if (profile.role == "admin") {
        var nameList = document.getElementById("name");
        nameList?.replaceChildren();
        readers?.forEach((element, index) => {
          var option = document.createElement("option");
          option.value = element.name;
          option.id = index;
          option.innerHTML = element.email;
          nameList?.appendChild(option);
        });
      }
      var list = document.getElementById("book");
      list?.replaceChildren([]);
      books?.forEach((element) => {
        var option = document.createElement("option");
        option.value = element.name;
        option.id = element.id;
        list?.appendChild(option);
      });
      onCreate();
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
          })
          .catch((error) => {
            alert(error.response.data);
            router.back();
          });
      }
    }
  }, [books, profile, maxBook, readers]);
  if (books && profile && readers)
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
                  temp.push({ bookId: value.id, quantity: value.quantity })
                );
                var time;
                if (event.currentTarget.expectedReturnDate.valueAsDate)
                  time =
                    event.currentTarget.expectedReturnDate.valueAsDate.toISOString();
                else {
                  alert("Expected return date cannot be null");
                  return;
                }
                if (!selectedReader) return;
                console.log(selectedReader);
                const body = {
                  books: temp,
                  expectedReturnDate: time,
                  borrower: selectedReader.readerId,
                };
                await axios
                  .post("/api/borrow", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body),
                  })
                  .then((response) => {
                    if (response.status == 200) {
                      alert("Created borrow-book card successfully");
                      window.location.reload();
                    } else
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
                <Row>
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
                        disabled={profile?.role == "admin" ? false : true}
                        onChange={(event) => {
                          var datalist = document.getElementById("name");
                          for (let i = 0; i < datalist.children.length; i++) {
                            const element = datalist.children[i];
                            if (element.value == event.currentTarget.value) {
                              setSelectedReader(readers.at(element.id));
                              console.log(readers.at(element.id));
                              break;
                            }
                          }
                        }}
                      />
                      <datalist id="name"></datalist>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label className={montserrat.className}>
                        Expected Return date
                      </Form.Label>
                      <input
                        id="expectedReturnDate"
                        type="date"
                        className="form-control"
                      />
                      <datalist id="name"></datalist>
                    </Form.Group>
                  </Col>
                </Row>

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
                                onMaxBookChange(element.numberOfBooks);
                                flag = true;
                                break;
                              }
                            }
                            if (!flag) {
                              document.getElementById("amount").value = 0;
                              onMaxBookChange(-1);
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
                          type="number"
                          defaultValue={1}
                          className="shadow-none"
                          min={0}
                          max={maxBook}
                          style={{
                            textAlign: "left",
                            width: "80px",
                          }}
                        />
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
                        if (option.id == element.id) {
                          const temp = [...borrowBook];
                          if (document.getElementById("amount").value != 0)
                            temp.at(index).quantity =
                              document.getElementById("amount").value;
                          else temp.splice(index, 1);
                          setBorrowBook(temp);
                          option = null;
                          break;
                        }
                      }

                      if (option) {
                        const temp = [...borrowBook];
                        temp.push({
                          id: option.id,
                          name: option.name,
                          quantity: document.getElementById("amount").value,
                        });
                        setBorrowBook(temp);
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
                      {bookTable()}
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
                    Submit
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
