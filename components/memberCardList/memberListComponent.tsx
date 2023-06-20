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
import fetchJson from "../../lib/fetchJson";
import { useSearchParams } from "next/navigation";
import removeVietnameseTones from "../../lib/standelizeString";
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
  const search = useSearchParams();
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
      if (Array.from(search).length > 0) {
        var readerAfterSearch = [...readers];
        search.forEach((value, key) => {
          switch (key) {
            case "name": {
              const temp = [...readerAfterSearch];
              readerAfterSearch.forEach((element) => {
                if (!removeVietnameseTones(element.name).includes(removeVietnameseTones(value)))
                  temp.splice(temp.indexOf(element), 1);
              });
              readerAfterSearch = [...temp];
              break;
            }
            case "address": {
              const temp = [...readerAfterSearch];
              readerAfterSearch.forEach((element) => {
                if (!removeVietnameseTones(element.address).includes(removeVietnameseTones(value)))
                  temp.splice(temp.indexOf(element), 1);
              });
              readerAfterSearch = [...temp];
              break;
            }
            case "email": {
              const temp = [...readerAfterSearch];
              readerAfterSearch.forEach((element) => {
                if (!element.email.includes(value))
                  temp.splice(temp.indexOf(element), 1);
              });
              readerAfterSearch = [...temp];
              break;
            }
            case "readerType": {
              const temp = [...readerAfterSearch];
              readerAfterSearch.forEach((element) => {
                if (!removeVietnameseTones(element.readerType).includes(removeVietnameseTones(value)))
                  temp.splice(temp.indexOf(element), 1);
              });
              readerAfterSearch = [...temp];
              break;
            }
            case "memberDate": {
              const temp = [...readerAfterSearch];
              readerAfterSearch.forEach((element) => {
                var part = element.memberDate.slice(0, 10).split("-");
                var date = part[0] + "/" + part[1] + "/" + part[2];
                if (!date.includes(value))
                  temp.splice(temp.indexOf(element), 1);
              });
              readerAfterSearch = [...temp];
              break;
            }
            case "memberId": {
              const temp = [...readerAfterSearch];
              readerAfterSearch.forEach((element) => {
                if (!element.readerId.includes(value, 0))
                  temp.splice(temp.indexOf(element), 1);
              });
              readerAfterSearch = [...temp];
              break;
            }
            case "dateOfBirth": {
              const temp = [...readerAfterSearch];
              readerAfterSearch.forEach((element) => {
                var part = element.dateOfBirth.slice(0, 10).split("-");
                var date = part[0] + "/" + part[1] + "/" + part[2];
                if (!date.includes(value))
                  temp.splice(temp.indexOf(element), 1);
              });
              readerAfterSearch = [...temp];
              break;
            }
          }
        });
        readerAfterSearch.forEach((element, index) => {
          result.push(
            <tr>
              <td>{index + 1}</td>
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
                    marginRight: "10px",
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
                      event.currentTarget.parentElement?.parentElement
                        ?.firstChild?.textContent;
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
      } else {
        readers.forEach((element, index) => {
          result.push(
            <tr>
              <td>{index + 1}</td>
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
                    marginRight: "10px",
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
                      event.currentTarget.parentElement?.parentElement
                        ?.firstChild?.textContent;
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
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              const searchQuery: Array<{ key: string; value: string }> = [];
              if (event.currentTarget.readerName.value)
                searchQuery.push({
                  key: "name",
                  value: event.currentTarget.readerName.value,
                });
              if (event.currentTarget.email.value)
                searchQuery.push({
                  key: "email",
                  value: event.currentTarget.email.value,
                });
              if (event.currentTarget.memberDate.value)
                searchQuery.push({
                  key: "memberDate",
                  value: event.currentTarget.memberDate.value,
                });
              if (event.currentTarget.dateOfBirth.value)
                searchQuery.push({
                  key: "dateOfBirth",
                  value: event.currentTarget.dateOfBirth.value,
                });
              if (event.currentTarget.address.value)
                searchQuery.push({
                  key: "address",
                  value: event.currentTarget.address.value,
                });
              if (event.currentTarget.readerType.value)
                searchQuery.push({
                  key: "readerType",
                  value: event.currentTarget.readerType.value,
                });
              if (event.currentTarget.memberId.value)
                searchQuery.push({
                  key: "memberId",
                  value: event.currentTarget.memberId.value,
                });
              const url = new URL(document.URL.split("?")[0]);
              searchQuery.forEach((element) => {
                url.searchParams.set(element.key, element.value);
              });
              window.location.replace(url.href)
            }}
          >
            <Stack gap={5} style={{ marginLeft: "20px", marginRight: "125px" }}>
              <Stack direction="horizontal" gap={5}>
                <Col sm={4} style={{ height: "50px" }}>
                  <Form.Control
                    style={{ height: "100%" }}
                    placeholder="Name"
                    id="readerName"
                  />
                </Col>
                <Col sm={4} style={{ height: "50px" }}>
                  <Form.Control
                    style={{ height: "100%" }}
                    placeholder="Email"
                    id="email"
                  />
                </Col>
                <Col sm={4} style={{ height: "50px" }}>
                  <Form.Control
                    style={{ height: "100%" }}
                    placeholder="Member date: mm/dd/yyyy"
                    type="text"
                    id="memberDate"
                  />
                </Col>
              </Stack>
              <Stack direction="horizontal" gap={5}>
                <Col sm={4} style={{ height: "50px" }}>
                  <Form.Control
                    style={{ height: "100%" }}
                    placeholder="Date of birth: mm/dd/yyyy"
                    type="text"
                    id="dateOfBirth"
                  />
                </Col>
                <Col sm={4} style={{ height: "50px" }}>
                  <Form.Control
                    style={{ height: "100%" }}
                    placeholder="Address"
                    id="address"
                  />
                </Col>
                <Col sm={4} style={{ height: "50px" }}>
                  <Form.Control
                    style={{ height: "100%" }}
                    placeholder="Reader type"
                    id="readerType"
                  />
                </Col>
              </Stack>
              <Stack direction="horizontal" gap={5}>
                <Col sm={4} style={{ height: "50px" }}>
                  <Form.Control
                    style={{ height: "100%" }}
                    placeholder="Member ID"
                    id="memberId"
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
                      type="submit"
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
                      href="/home/member"
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
          </Form>
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
          id="modalBody"
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
                const element = document.getElementById("modalBody");
                element?.replaceChildren();
                var child1 = document.createElement("div");
                child1.className = "spinner-border";
                var child2 = document.createElement("div");
                child2.className = "justify-content-center align-items-center";
                child2.append(child1);
                element?.append(child2);
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
