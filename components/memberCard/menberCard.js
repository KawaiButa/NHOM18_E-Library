"use client";
import React, { useEffect, useState } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { Button, Card, Stack, Image, Container } from "react-bootstrap";
import endpoint from "../../endpoint/Utils";
import useProfile from "../../lib/useProfile";
import axios from "axios";
import { useRouter } from "next/navigation";
const roboto = Roboto({
  weight: "700",
  subsets: ["vietnamese"],
});

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function MemberCard({ user }) {
  const [member, setMember] = useState(null);
  const router = useRouter();
  useEffect(() => {
    async function onCreate() {
      await axios
        .get("/api/profile/" + user, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) setMember(response.data);
        })
        .catch((error) => {
          alert(error.message.data);
          router.back();
        });
    }
    onCreate();
  }, []);
  if (member)
    return (
      <>
        <Card
          className="border-bottom border-5"
          style={{ width: "973px", height: "631px" }}
        >
          <Card.Header
            className="d-flex justify-content-end"
            style={{ borderWidth: "0px", backgroundColor: "transparent" }}
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
                backgroundColor: "#D9D9D9",
              }}
            >
              <Image
                src="/icon_pen_add.ico"
                alt="iconPenAdd"
                width={20}
                height={20}
                className="d-flex"
              />
            </Button>
          </Card.Header>
          <Card.Body
            style={{
              marginLeft: "48px",
              marginRight: "69px",
              marginTop: "30px",
            }}
          >
            <Stack direction="horizontal" gap={5}>
              <div style={{ width: "60%", height: "100%" }}>
                <Image
                  src={endpoint + "/api/v1/users/" + user + "/avatar"}
                  alt="bookPic"
                  fluid
                  crossOrigin="anonymous"
                />
              </div>
              <Container style={{}}>
                <Stack gap={2}>
                  <h1 className={roboto.className}></h1>
                  <p className={montserrat.className}>
                    {"Email: " + member.email}
                  </p>
                  <p className={montserrat.className}>
                    {"Name: " + member.name}
                  </p>
                  <p className={montserrat.className}>
                    {"Type: " + member.readerType}
                  </p>
                  <p className={montserrat.className}>
                    {"Address: " + member.address}
                  </p>
                  <p className={montserrat.className}>
                    {"Date of birth: " + member.dateOfBirth}
                  </p>
                  <p className={montserrat.className}>
                    {"Member date: " + member.memberDate}
                  </p>
                </Stack>
              </Container>
            </Stack>
          </Card.Body>
        </Card>
      </>
    );
  else
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "973px", height: "631px" }}
      >
        <h2>
          {
            "You haven't create a member card. Please go to the library to create your card"
          }
        </h2>
      </div>
    );
}
