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
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function MemberListCard() {
  const [memberList, setMemberList] = useState({});
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  return (
    <>
      <Card style={{ width: "1055px", height: "868px" }}>
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
          <Stack gap={5} style={{ marginLeft: "20px", marginRight: "125px" }}>
            <Stack direction="horizontal" gap={5}>
              <Col sm={4} style={{ height: "50px" }}>
                <Form.Control style={{ height: "100%" }} placeholder="Name" />
              </Col>
              <Col sm={4} style={{ height: "50px" }}>
                <Form.Control style={{ height: "100%" }} placeholder="Email" />
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
              <Col sm={4} style={{ height: "50px", alignItems: "end" }}>
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
          <Table
            responsive
            striped
            hover
            style={{ marginTop: "48px", borderBottomColor: "#D9D9D9" }}
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Member ID</th>
                <th>Name</th>
                <th>Reader type</th>
                <th>Address</th>
                <th>Member date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 5 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
                <td>
                  <button
                    style={{
                      width: "27px",
                      height: "27px",
                      marginRight: "13px",
                      borderWidth: "0px",
                    }}
                    
                  >
                    <Image src="/icon_edit.png" alt="delete" />
                  </button>
                  <button
                    style={{
                      width: "27px",
                      height: "27px",
                      borderWidth: "0px",
                    }}
                    onClick={openModal}
                  >
                    <Image src="/icon_delete.png" alt="delete" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 5 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
                <td>
                  <button
                    style={{
                      width: "27px",
                      height: "27px",
                      marginRight: "13px",
                      borderWidth: "0px",
                    }}
                  >
                    <Image src="/icon_edit.png" alt="delete" />
                  </button>
                  <button
                    style={{
                      width: "27px",
                      height: "27px",
                      borderWidth: "0px",
                    }}
                    onClick={openModal}
                  >
                    <Image src="/icon_delete.png" alt="delete" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 5 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
                <td>
                  <button
                    style={{
                      width: "27px",
                      height: "27px",
                      marginRight: "13px",
                      borderWidth: "0px",
                    }}
                  >
                    <Image src="/icon_edit.png" alt="delete" />
                  </button>
                  <button
                    className={styles.button}
                    style={{
                      width: "27px",
                      height: "27px",
                      borderWidth: "0px",
                    }}
                    onClick={openModal}
                  >
                    <Image src="/icon_delete.png" alt="delete" />
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <Modal show={modal} size="lg" style={{}}>
        <Modal.Header
          style={{
            borderBottomWidth: "2px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <Modal.Title>Delete this member?</Modal.Title>
          <CloseButton onClick={closeModal}></CloseButton>
        </Modal.Header>
        <Modal.Body
          style={{
            borderBottomWidth: "2px",
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <p className={roboto.className} style={{ fontSize: "20px", fontWeight: "300"}}>You want to delete member with ID: 21522007</p>
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
              onClick={closeModal}
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
