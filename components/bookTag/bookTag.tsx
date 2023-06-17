import React, { Suspense, useEffect, useState } from "react";
import {
  Col,
  Row,
  Container,
  Button,
  Stack,
  Modal,
  CloseButton,
  Form,
} from "react-bootstrap";
import Image from "next/image";
import { Montserrat, Open_Sans, Roboto } from "next/font/google";
import styles from "./bookTag.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import BookAPI from "../../endpoint/bookAPI";
const roboto = Roboto({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["vietnamese"],
});
const open_sans = Open_Sans({
  weight: ["400", "500"],
  style: "normal",
  subsets: ["vietnamese"],
});
const montserrat = Montserrat({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
type Book = {
  id: string;
  name: string;
  author: string;
  publicationYear: string;
  imgUrl: string;
  description: string;
  ratingsAverage: string;
};
export default function BookTag({id}) {
  const [book, setBook] = useState({
    id: "",
    name: "",
    author: "",
    publicationYear: "",
    imgUrl: "",
    ratingsAverage: "",
    description: "",
  } as Book);
  const [showModel, setShowModel] = useState(false);
  const openModel = () => setShowModel(true);
  const closeModel = () => setShowModel(false);
  const [changeModal, setChangeModal] = useState("None");
  const changeValueModal = (value) => setChangeModal(value);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: BookAPI.oneBookEndpoint + id,
    };
    axios
      .request(config)
      .then((response) => {
        const data = response.data.data.doc;
        console.log(data);
        setBook({
          id: data._id,
          name: data.nameBook,
          author: data.author,
          publicationYear: data.publicationYear,
          description: data.description,
          imgUrl: data.photoUrls[0],
          ratingsAverage: data.ratingsAverage,
        } as Book);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <Container
        as="div"
        className={`${styles.bookTag} border-bottom border-top border-4`}
      >
        <Row style={{ height: "100%", borderRadius: "10px" }}>
          <Col
            style={{
              height: "100%",
              borderRadius: "10px",
            }}
            xs="auto"
          >
            <Image
              src={book.imgUrl}
              crossOrigin="anonymous"
              alt="Icon"
              width={161}
              height={243}
              className={styles.bookTagImage}
            />
          </Col>
          <Col style={{ borderRadius: "10px" }} auto>
            <Row
              style={{ width: "100%", height: "117px" }}
              className=" d-flex justify-content-end align-items-center"
            >
              <Button
                className="d-flex round-circle justify-content-center align-items-center"
                size="sm"
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "0px",
                  padding: "0px",
                  borderRadius: "50px",
                  borderWidth: "5px",
                  borderColor: "#D9D9D9",
                  backgroundColor: "transparent",
                }}
                onClick={openModel}
              >
                <Image
                  src="/icon_pen_add.ico"
                  alt="iconPenAdd"
                  width={20}
                  height={20}
                  className="d-flex"
                />
              </Button>
            </Row>
            <h1
              className={roboto.className}
              style={{ color: "black", fontSize: "40px" }}
            >
              {book.name}
            </h1>
            <h2
              className={roboto.className}
              style={{ opacity: "0.5", fontSize: "24px" }}
            >
              {book.author}
            </h2>
            <Stack
              direction="horizontal"
              gap={3}
              className="justified-content-center"
            >
              <Col sm="auto">
                <p
                  className={roboto.className}
                  style={{ fontWeight: "700", fontSize: "25px" }}
                >
                  {book.publicationYear}
                </p>
              </Col>
              <div className="vr" style={{ height: "29px" }} />
              <Col sm="auto">
                <p
                  className={open_sans.className}
                  style={{ fontWeight: "600", fontSize: "24px" }}
                >
                  160 pages
                </p>
              </Col>
            </Stack>
            <h1 className={roboto.className} style={{ fontSize: "25px" }}>
              {"Rating: " + book.ratingsAverage}
              <span
                className=" justify-content-center align-items-center"
                style={{ marginLeft: "5px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="yellow"
                  className="bi bi-star-fill"
                  viewBox="0 0 25 25"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
            </h1>
            <Container style={{ width: "100%", height: "55px" }} />
            <h1
              className={roboto.className}
              style={{
                fontWeight: "700",
                fontSize: "35px",
                marginLeft: "10px",
              }}
            >
              Description
            </h1>
            <Stack className="d-flex">
              <Container
                className="rounded-pill"
                style={{
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#D9D9D9",
                }}
              />
              <Container
                style={{
                  width: "200px",
                  height: "3px",
                  backgroundColor: "#4BC1D2",
                  position: "absolute",
                }}
              />
            </Stack>
            <p
              className={roboto.className}
              style={{
                marginLeft: "6px",
                marginRight: "6px",
                fontSize: "20px",
                lineHeight: "34px",
              }}
            >
              {book.description}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
