import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  Image,
  Stack,
} from "react-bootstrap";

import React, { useEffect, useRef, useState } from "react";
import { Montserrat } from "next/font/google";
import axios from "axios";
import useUser from "../../lib/useUser";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
});
export default function MemberForm({ readerID }) {
  const [imgUrl, setImgUrl] = useState("#");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const { users, mutateUser } = useUser();
  useEffect(() => {
    async function onCreate() {
      if (readerID && readerID != "undefined") {
        const res = await axios.get("/api/reader/" + readerID, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (res.status == 200) {
          console.log(res);
          const data = res.data;
          document.getElementById("email").value = data.email;
          document.getElementById("fullName").value = data.name;
          document.getElementById("readerType").value = data.readerType;
          document.getElementById("address").value = data.address;
          document.getElementById("dateOfBirth").value = String(
            data.dateOfBirth
          ).substring(0, 10);
          document.getElementById("memberID").value = data.readerId;
          document.getElementById("memberDate").style.visibility = "visible";
          document.getElementById("memberDate").lastElementChild.value = String(
            data.memberDate
          ).substring(0, 10);
        }
      } else {
        if (users) {
          var datalist = document.getElementById("user");
          datalist.replaceChildren();
          users.forEach((element, index) => {
            var option = document.createElement("option");
            option.id = element.id;
            option.value = element.email;
            option.innerHTML = "Id: " + element.id;
            datalist.append(option);
          });
          document.getElementById("fullName").disabled = false;
        } else {
          document.getElementById("fullName").disabled = true;
        }
      }
    }
    onCreate();
  }, [users, selectedUser]);
  if (!isLoading)
    return (
      <>
        <Form
          id="form"
          style={{ width: "860px" }}
          onSubmit={async function HandleSubmit(event) {
            event.preventDefault();
            const body = {
              fullName: event.currentTarget.fullName.value,
              readerType: event.currentTarget.readerType.value,
              address: event.currentTarget.address.value,
              dateOfBirth: event.currentTarget.dateOfBirth.value,
              email: event.currentTarget.email.value,
            };
            setIsLoading(true);
            const res = await axios
              .post("/api/reader", {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(body),
              })
              .then((response) => {
                if (response.status == 201) {
                  alert("Add member successfully");
                  document.getElementById("form").reset();
                } else {
                  alert(
                    "There is a problem with the server. \n Please try again in a few seconds or contact to us"
                  );
                }
              })
              .catch((error) => {
                alert(error.response.data);
              });
            if(res.status == 201)
            {
              //await axios.patch()
            }
            setIsLoading(false);
          }}
        >
          <Stack gap={5}>
            <Form.Group>
              <Form.Label className={montserrat.className}>Email</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                placeholder="Like youremail@gmail.com"
                id="email"
                list="user"
                onChange={(event) => {
                  const email = event.currentTarget.value;
                  for (let i = 0; i < users.length; i++) {
                    const element = users.at(i);
                    if (element.email == email) setSelectedUser(element);
                  }
                  console.log(selectedUser);
                }}
              />
            </Form.Group>
            <datalist id="user" onC></datalist>

            <Stack direction="horizontal" gap={5}>
              <FormGroup>
                <Form.Label className={montserrat.className}>
                  Member ID
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="id"
                  disabled={true}
                  id={"memberID"}
                />
              </FormGroup>
              <FormGroup>
                <Form.Label className={montserrat.className}>
                  Member Type
                </Form.Label>
                <Form.Control size="lg" type="id" id="readerType" />
              </FormGroup>
            </Stack>
            <Form.Group>
              <Form.Label className={montserrat.className}>
                Member Name
              </Form.Label>
              <Form.Control
                size="lg"
                type="name"
                placeholder="Your name"
                id="fullName"
                defaultValue={selectedUser == null ? "" : selectedUser.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className={montserrat.className}>Address</Form.Label>
              <Form.Control
                size="lg"
                type="address"
                placeholder="Address"
                id="address"
              />
            </Form.Group>
            <Stack direction="horizontal" gap={3} className="">
              <Form.Group>
                <Form.Label className={montserrat.className}>
                  Date of birth
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="date"
                  placeholder="Date of birth"
                  id="dateOfBirth"
                />
              </Form.Group>
              <Form.Group id="memberDate" style={{ visibility: "hidden" }}>
                <Form.Label className={montserrat.className}>
                  Member date
                </Form.Label>
                <Form.Control size="lg" type="date" placeholder="Member date" />
              </Form.Group>
            </Stack>
            <Container
              className="d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <Card className="text-center" style={{ width: "685px" }}>
                <Card.Header className={montserrat.className}>
                  Image
                </Card.Header>
                <Card.Body>
                  <Stack
                    className="d-flex align-items-center"
                    style={{ width: "100%" }}
                    gap={4}
                  >
                    <Image
                      id="ImageHolder"
                      src={imgUrl}
                      alt=""
                      style={{
                        backgroundColor: "#D2DDE0",
                        width: "300px",
                        height: "369px",
                      }}
                    />
                    <Form.Group>
                      <Form.Control
                        size="lg"
                        id="ImageControl"
                        type="file"
                        onChange={(event) => {
                          if (
                            document.getElementById("ImageControl").files[0]
                          ) {
                            setImgUrl(
                              URL.createObjectURL(
                                document.getElementById("ImageControl").files[0]
                              )
                            );
                            document.getElementById(
                              "ImageHolder"
                            ).style.backgroundColor = "transparent";
                            document.getElementById("ImageHolder").style.width =
                              "300px";
                            document.getElementById(
                              "ImageHolder"
                            ).style.height = "369px";
                          }
                        }}
                      />
                    </Form.Group>
                  </Stack>
                </Card.Body>
              </Card>
            </Container>
            <Container
              className="d-flex flex-row justify-content-between"
              style={{ width: "685px" }}
            >
              <Button
                type="summit"
                className={montserrat.className}
                style={{
                  width: "231px",
                  height: "48px",
                  borderRadius: "20px",
                  backgroundColor: "#44B8CB",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderColor: "#44B8CB",
                }}
              >
                Summit
              </Button>
              <Button
                className={montserrat.className}
                style={{
                  width: "231px",
                  height: "48px",
                  borderRadius: "20px",
                  backgroundColor: "#D9D9D9",
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "24px",
                  borderColor: "#D9D9D9",
                }}
              >
                Cancel
              </Button>
            </Container>
          </Stack>
        </Form>
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
