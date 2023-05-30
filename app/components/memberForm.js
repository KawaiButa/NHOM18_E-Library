import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  Image,
  Stack,
} from "react-bootstrap";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
});
export default function MemberForm() {
  const [imgUrl, setImgUrl] = useState("#");

  return (
    <>
      <Form style={{ width: "860px" }}>
        <Stack gap={5}>
          <Form.Group>
            <Form.Label className={montserrat.className}>Member Name</Form.Label>
            <Form.Control size="lg" type="name" placeholder="Your name" />
          </Form.Group>
          <Stack direction="horizontal" gap={5}>
            <FormGroup>
              <Form.Label className={montserrat.className}>Member ID</Form.Label>
              <Form.Control size="lg" type="id" disabled={true} />
            </FormGroup>
            <FormGroup>
              <Form.Label className={montserrat.className}>Member Type</Form.Label>
              <Form.Control size="lg" type="id" disabled={true} />
            </FormGroup>
          </Stack>
          <Form.Group>
            <Form.Label className={montserrat.className}>Email</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="Like youremail@gmail.com"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className={montserrat.className}>Address</Form.Label>
            <Form.Control size="lg" type="address" placeholder="Address" />
          </Form.Group>
          <Stack direction="horizontal" gap={3} className="">
            <Form.Group>
              <Form.Label className={montserrat.className}>Date of birth</Form.Label>
              <Form.Control size="lg" type="date" placeholder="Date of birth" />
            </Form.Group>
            <Form.Group>
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
              <Card.Header className={montserrat.className}>Image</Card.Header>
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
                        if (document.getElementById("ImageControl").files[0]) {
                          setImgUrl(
                            URL.createObjectURL(
                              document.getElementById("ImageControl").files[0]
                            )
                          );
                          document.getElementById(
                            "ImageHolder"
                          ).style.backgroundColor = "transparent";
                          document.getElementById("ImageHolder").style.width =
                            "auto";
                          document.getElementById("ImageHolder").style.height =
                            "auto";
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
              className={montserrat.className}
              style={{
                width: "231px",
                height: "88px",
                borderRadius: "20px",
                backgroundColor: "#44B8CB",
                color: "white",
                fontWeight: "bold",
                fontSize: "35px",
                borderColor: "#44B8CB",
              }}
            >
              Summit
            </Button>
            <Button
              className={montserrat.className}
              style={{
                width: "231px",
                height: "88px",
                borderRadius: "20px",
                backgroundColor: "#D9D9D9",
                color: "black",
                fontWeight: "bold",
                fontSize: "35px",
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
}
