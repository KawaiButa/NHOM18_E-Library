import Book from "./Book";
import React, { useState } from "react";
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
const roboto = Roboto({
  weight: ["400", "500", "700"],
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
export default function BookTag() {
  const [showModel, setShowModel] = useState(false);
  const openModel = () => setShowModel(true);
  const closeModel = () => setShowModel(false);
  const [changeModal, setChangeModal] = useState("None");
  const changeValueModal = (value) => setChangeModal(value);
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
              src="/Rectangle20.png"
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
              This is Title
            </h1>
            <h2
              className={roboto.className}
              style={{ opacity: "0.5", fontSize: "24px" }}
            >
              This is author
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
                  2010
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
              Rating
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
              This, the novel&apos;s first appearance outside Vietnam, marks the
              arrival, in English, of a hugely appealing and engaging author.
              The story of a man looking back on his life, Ticket to Childhood
              captures the texture of childhood in all of its richness. As we
              learn of the small miracles and tragedies that made up the
              narrator&apos;s life--the misadventures and the misdeeds--we meet
              his long-lost friends,...
            </p>
          </Col>
        </Row>
      </Container>
      <Modal show={showModel} className="modal-lg">
        <Modal.Header>
          <Modal.Title
            className={roboto.className}
            style={{
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "35.16px",
              paddingLeft: "39px",
            }}
          >
            Choose a field to edit
          </Modal.Title>
          <CloseButton onClick={closeModel}></CloseButton>
        </Modal.Header>
        <Modal.Body style={{ paddingLeft: "43px" }}>
          <Stack>
            <Button
              className={styles.ModalButton}
              onClick={() => {
                changeValueModal("Add Date");
                closeModel();
              }}
            >
              <Stack
                direction="horizontal"
                className="d-flex align-items-center"
                gap={4}
                style={{
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  src="/icon_note_text.png"
                  alt=""
                  width={30}
                  height={34.58}
                />
                <p
                  className={roboto.className}
                  style={{
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "black",
                    margin: "0px",
                  }}
                >
                  Added Date
                </p>
              </Stack>
            </Button>
            <Button
              className={styles.ModalButton}
              onClick={() => {
                changeValueModal("Author");
                closeModel();
              }}
            >
              <Stack
                direction="horizontal"
                className="d-flex align-items-center"
                gap={4}
                style={{
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <Image src="/Group.png" alt="" width={30} height={34.58} />
                <p
                  className={roboto.className}
                  style={{
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "black",
                    margin: "0px",
                  }}
                >
                  Authors
                </p>
              </Stack>
            </Button>
            <Button
              className={styles.ModalButton}
              onClick={() => {
                changeValueModal("Description");
                closeModel();
              }}
            >
              <Stack
                direction="horizontal"
                className="d-flex align-items-center"
                gap={4}
                style={{
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  src="/icon_pen_add.png"
                  alt=""
                  width={30}
                  height={34.58}
                />
                <p
                  className={roboto.className}
                  style={{
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "black",
                    margin: "0px",
                  }}
                >
                  Description
                </p>
              </Stack>
            </Button>
            <Button
              className={styles.ModalButton}
              onClick={() => {
                changeValueModal("Price");
                closeModel();
              }}
            >
              <Stack
                direction="horizontal"
                className="d-flex align-items-center"
                gap={4}
                style={{
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  src="/icon_wallet_money.png"
                  alt=""
                  width={30}
                  height={34.58}
                />
                <p
                  className={roboto.className}
                  style={{
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "black",
                    margin: "0px",
                  }}
                >
                  Price
                </p>
              </Stack>
            </Button>
            <Button
              className={styles.ModalButton}
              onClick={() => {
                changeValueModal("Status");
                closeModel();
              }}
            >
              <Stack
                direction="horizontal"
                className="d-flex align-items-center"
                gap={4}
                style={{
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  src="/icon_Watch_status.png"
                  alt=""
                  width={30}
                  height={34.58}
                />
                <p
                  className={roboto.className}
                  style={{
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "black",
                    margin: "0px",
                  }}
                >
                  Status
                </p>
              </Stack>
            </Button>
            <Button
              className={styles.ModalButton}
              onClick={() => {
                changeValueModal("Title");
                closeModel();
              }}
            >
              <Stack
                direction="horizontal"
                className="d-flex align-items-center"
                gap={4}
                style={{
                  padding: "0px",
                  margin: "0px",
                  backgroundColor: "transparent",
                }}
              >
                <Image
                  src="/icon_pen_add.ico"
                  alt=""
                  width={30}
                  height={34.58}
                />
                <p
                  className={roboto.className}
                  style={{
                    fontWeight: "400",
                    fontSize: "30px",
                    color: "black",
                    margin: "0px",
                  }}
                >
                  Title
                </p>
              </Stack>
            </Button>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h1
            className={roboto.className}
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "35.16px",
            }}
          >
            Ticket to childhood
          </h1>
        </Modal.Footer>
      </Modal>
      <Modal show={changeModal == "Add Date"} size="lg">
        <Modal.Header>
          <Modal.Title
            className={roboto.className}
            style={{
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "35.16px",
              paddingLeft: "39px",
            }}
          >
            Added Date
          </Modal.Title>
          <CloseButton
            onClick={() => {
              changeValueModal("None");
              openModel();
            }}
          ></CloseButton>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center"
          style={{ width: "100%", marginLeft: "35px" }}
        >
          <Stack direction="vertical" gap={5}>
            <Form.Control
              className={roboto.className}
              type="year"
              placeholder="YYYY"
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "85px",
              }}
            />
            <Form.Control
              className={roboto.className}
              type="year"
              placeholder="MM"
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "85px",
              }}
            />
            <Form.Control
              className={roboto.className}
              type="year"
              placeholder="DD"
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "85px",
              }}
            />
            <Stack direction="horizontal" gap={5}>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Save
                </p>
              </Button>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#D9D9D9",
                  borderWidth: "0px",
                  color: "black",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Cancel
                </p>
              </Button>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h1
            className={roboto.className}
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "35.16px",
            }}
          >
            Ticket to childhood
          </h1>
        </Modal.Footer>
      </Modal>
      <Modal show={changeModal == "Author"} size="lg">
        <Modal.Header>
          <Modal.Title
            className={roboto.className}
            style={{
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "35.16px",
              paddingLeft: "39px",
            }}
          >
            Author
          </Modal.Title>
          <CloseButton
            onClick={() => {
              changeValueModal("None");
              openModel();
            }}
          ></CloseButton>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center"
          style={{ width: "100%", height: "100%", marginLeft: "35px" }}
        >
          <Stack direction="vertical" gap={3}>
            <Form.Control
              className={roboto.className}
              type="name"
              placeholder="Author's names"
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "85px",
              }}
            />
            <Stack direction="horizontal" gap={5}>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Save
                </p>
              </Button>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#D9D9D9",
                  borderWidth: "0px",
                  color: "black",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Cancel
                </p>
              </Button>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h1
            className={roboto.className}
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "35.16px",
            }}
          >
            Ticket to childhood
          </h1>
        </Modal.Footer>
      </Modal>
      <Modal show={changeModal == "Description"} size="lg">
        <Modal.Header>
          <Modal.Title
            className={roboto.className}
            style={{
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "35.16px",
              paddingLeft: "39px",
            }}
          >
            Description
          </Modal.Title>
          <CloseButton
            onClick={() => {
              changeValueModal("None");
              openModel();
            }}
          ></CloseButton>
        </Modal.Header>
        <Modal.Body
          className="d-flex"
          style={{ width: "100%", height: "100%", marginLeft: "35px" }}
        >
          <Stack direction="vertical" gap={3}>
            <Form.Control
              as="textarea"
              className={roboto.className}
              type="text"
              placeholder="Write description here"
              rows={1}
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "368px",
              }}
            />
            <Stack direction="horizontal" gap={5}>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Save
                </p>
              </Button>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#D9D9D9",
                  borderWidth: "0px",
                  color: "black",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Cancel
                </p>
              </Button>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h1
            className={roboto.className}
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "35.16px",
            }}
          >
            Ticket to childhood
          </h1>
        </Modal.Footer>
      </Modal>
      <Modal show={changeModal == "Price"} size="lg">
        <Modal.Header>
          <Modal.Title
            className={roboto.className}
            style={{
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "35.16px",
              paddingLeft: "39px",
            }}
          >
            Price
          </Modal.Title>
          <CloseButton
            onClick={() => {
              changeValueModal("None");
              openModel();
            }}
          ></CloseButton>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center"
          style={{ width: "100%", height: "100%", marginLeft: "35px" }}
        >
          <Stack direction="vertical" gap={3}>
            <Form.Control
              className={roboto.className}
              type="currency"
              placeholder="Price"
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "85px",
              }}
            />
            <Stack direction="horizontal" gap={5}>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Save
                </p>
              </Button>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#D9D9D9",
                  borderWidth: "0px",
                  color: "black",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Cancel
                </p>
              </Button>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h1
            className={roboto.className}
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "35.16px",
            }}
          >
            Ticket to childhood
          </h1>
        </Modal.Footer>
      </Modal>
      <Modal show={changeModal == "Status"} size="lg">
        <Modal.Header>
          <Modal.Title
            className={roboto.className}
            style={{
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "35.16px",
              paddingLeft: "39px",
            }}
          >
            Author
          </Modal.Title>
          <CloseButton
            onClick={() => {
              changeValueModal("None");
              openModel();
            }}
          ></CloseButton>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center"
          style={{ width: "100%", height: "100%", marginLeft: "35px" }}
        >
          <Stack direction="vertical" gap={3}>
            <Form.Control
              className={roboto.className}
              type="name"
              placeholder="Current number"
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "85px",
              }}
            />
            <Stack direction="horizontal" gap={5}>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Save
                </p>
              </Button>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#D9D9D9",
                  borderWidth: "0px",
                  color: "black",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Cancel
                </p>
              </Button>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h1
            className={roboto.className}
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "35.16px",
            }}
          >
            Ticket to childhood
          </h1>
        </Modal.Footer>
      </Modal>
      <Modal show={changeModal == "Title"} size="lg">
        <Modal.Header>
          <Modal.Title
            className={roboto.className}
            style={{
              fontWeight: "700",
              fontSize: "30px",
              lineHeight: "35.16px",
              paddingLeft: "39px",
            }}
          >
            Title
          </Modal.Title>
          <CloseButton
            onClick={() => {
              changeValueModal("None");
              openModel();
            }}
          ></CloseButton>
        </Modal.Header>
        <Modal.Body
          className="d-flex justify-content-center"
          style={{ width: "100%", height: "100%", marginLeft: "35px" }}
        >
          <Stack direction="vertical" gap={3}>
            <Form.Control
              className={roboto.className}
              type="name"
              placeholder="Title"
              style={{
                fontWeight: "500",
                fontSize: "26px",
                lineHeight: "30.47",
                width: "670px",
                height: "85px",
              }}
            />
            <Stack direction="horizontal" gap={5}>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Save
                </p>
              </Button>
              <Button
                className="d-flex justify-content-center"
                style={{
                  width: "163px",
                  height: "45px",
                  textAlign: "center",
                  borderRadius: "30px",
                  backgroundColor: "#D9D9D9",
                  borderWidth: "0px",
                  color: "black",
                }}
              >
                <p
                  className={montserrat.className}
                  style={{ paddingTop: "3px" }}
                >
                  Cancel
                </p>
              </Button>
            </Stack>
          </Stack>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <h1
            className={roboto.className}
            style={{
              fontSize: "25px",
              fontWeight: "700",
              lineHeight: "35.16px",
            }}
          >
            Ticket to childhood
          </h1>
        </Modal.Footer>
      </Modal>
    </>
  );
}
