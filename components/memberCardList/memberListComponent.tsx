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
import useReader from "../../lib/useReader";
import { mutate } from "swr";
import { fetchData } from "next-auth/client/_utils";
import fetchJson from "../../lib/fetchJson";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function MemberListCard() {
  const { readers, mutateReader } = useReader();
  const [modal, setModal] = useState(false);
  const [memberList, setMemberList] = useState(new Array<React.ReactElement>());
  const [index, setIndex] = useState(0);
  const memberTable = () => {
    if (readers)
      return (
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
          <tbody>{memberList}</tbody>
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
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => setModal(false);
  useEffect(() => {
    const result: React.ReactElement[] = [];
    if (readers) {
      readers.forEach((element, index) => {
        result.push(
          <tr>
            <td>{index + 1}</td>
            <td>{element.readerId}</td>
            <td>{element.name}</td>
            <td>{element.readerType}</td>
            <td>{element.address}</td>
            <td>{element.memberDate}</td>
            <td>
              <Button
                style={{
                  width: "27px",
                  height: "27px",
                  padding: "0px",
                  marginTop: "0px",
                  borderWidth: "0px",
                  backgroundColor: "transparent",
                }}
                href={"/home/member/" + element.readerId}
              >
                <Image src="/icon_edit.png" alt="delete" />
              </Button>
              <button
                className={styles.button}
                style={{
                  width: "27px",
                  height: "27px",
                  borderWidth: "0px",
                  backgroundColor: "transparent",
                }}
                onClick={(event) => {
                  const index =
                    event.currentTarget.parentElement?.parentElement?.firstChild
                      ?.textContent;
                  var string;
                  if (index) string = Number.parseInt(index) - 1;
                  setIndex(string);
                  openModal();
                }}
              >
                <Image src="/icon_delete.png" alt="delete" />
              </button>
            </td>
          </tr>
        );
      });
      setMemberList(result);
    }
  }, [readers]);
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
              href="/home/member/undefined"
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
          {memberTable()}
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
          <p
            id="deleteInform"
            className={roboto.className}
            style={{ fontSize: "20px", fontWeight: "300" }}
          >
            {"Do you want to delete reader with name: " +
              readers?.at(index)?.name}
          </p>
          <p
            id="deleteInform"
            className={roboto.className}
            style={{ fontSize: "20px", fontWeight: "300" }}
          >
            {"ID: " + readers?.at(index)?.readerId}
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
                const response = await fetch(
                  "/api/reader/" + readers?.at(index)?.readerId,
                  {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                  }
                );
                if (response.status == 200) {
                  closeModal();
                  await mutateReader(
                    await fetchJson("/api/reader", {
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    })
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
