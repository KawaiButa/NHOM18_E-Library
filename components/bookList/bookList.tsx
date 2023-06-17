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
import axios from "axios";
import useBook from "../../lib/useBook";
import { useRouter } from "next/navigation";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function BookList() {
  const [bookList, setBookList] = useState({});
  const router = useRouter();
  const { books } = useBook();
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
            </tr>
          </thead>
          <tbody>
            {books.map((element, index) => (
              <tr key={element.id} onDoubleClick={(event) => {
                event.preventDefault()
                const index = event.currentTarget.firstChild?.firstChild?.nodeValue
                if(index)
                    router.push("/home/book/" + books.at((Number.parseInt(index) - 1))?.id )
              }}>
                <td>{index + 1}</td>
                <td>{element.name}</td>
                <td>{element.author}</td>
                <td>{element.publisher}</td>
                <td>{element.numberOfBooks}</td>
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
              <Stack as="a" direction="horizontal" gap={2} href="/home/book/add" style={{textDecoration: "none"}}>
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

          <Container className="mt-4 d-flex justify-content-center">
            <Button
              className={styles.button}
              style={{
                width: "144px",
                height: "58px",
                borderRadius: "20px",
                backgroundColor: "#44B8CB",
                color: "white",

                borderColor: "#44B8CB",
              }}
            >
              <p
                className={montserrat.className}
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginTop: "5px",
                }}
              >
                Detail
              </p>
            </Button>
          </Container>
        </Card>
      </Row>
    </>
  );
}
