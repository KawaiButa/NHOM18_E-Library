"use client";
import React, { useEffect, useState } from "react";
import { Montserrat, Roboto } from "next/font/google";
import { Button, Card, Stack, Image, Container } from "react-bootstrap";
import endpoint from "../../endpoint/Utils";
import axios from "axios";
import useProfile from "../../lib/useProfile";
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
  const {profile} = useProfile()
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
          if (response.status == 204) setMember(null);
        });
    }
    onCreate();
  }, [profile]);
  if (member == null)
    return (
      <div>
        <h2>{"You don't have a reader card connect to this account."}</h2>
        <h2>{"Please contact to the library admin to create a reader card"}</h2>
      </div>
    );
   
    if (member)
        return (
            <>
                <Card
                    className="border-bottom border-5"
                    style={{
                        width: "973px",
                        height: "631px",
                        borderRadius: "20px",
                    }}
                >
                    <Card.Header
                        className="d-flex justify-content-end"
                        style={{
                            borderWidth: "0px",
                            backgroundColor: "transparent",
                            marginTop: "10px",
                        }}
                    >
                        <Button
                            className="d-flex round-circle justify-content-center align-items-center"
                            size="sm"
                            style={{
                                width: "50px",
                                height: "50px",
                                marginTop: "0px",
                                padding: "0px",
                                borderRadius: "50px",
                                borderWidth: "5px",
                                borderColor: "#D9D9D9",
                                backgroundColor: "#D9D9D9",
                                visibility: profile && profile.role == "admin"? "visible": "hidden"
                            }}
                            href={
                                "/home/member/modification/" + member.readerId
                            }
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
                            marginTop: "20px",
                        }}
                    >
                        <Stack direction="horizontal" gap={5}>
                            <div style={{ width: "60%", height: "100%" }}>
                                <Image
                                    src={
                                        endpoint +
                                        "/api/v1/users/" +
                                        user +
                                        "/avatar"
                                    }
                                    alt="bookPic"
                                    fluid
                                    crossOrigin="anonymous"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <Container style={{}}>
                                <Stack gap={2}>
                                    <h1 className={roboto.className}>
                                        {member.name}
                                    </h1>
                                    <div
                                        className={montserrat.className}
                                        style={{ fontSize: "20px" }}
                                    >
                                        <p>
                                            {" "}
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                Email:
                                            </span>{" "}
                                            {member.email}
                                        </p>
                                        <p>
                                            {" "}
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                Type:
                                            </span>{" "}
                                            {member.readerType}
                                        </p>
                                        <p>
                                            {" "}
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                Address:
                                            </span>{" "}
                                            {member.address}
                                        </p>
                                        <p>
                                            {" "}
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                Date of birth:
                                            </span>{" "}
                                            {member.dateOfBirth}
                                        </p>
                                        <p>
                                            {" "}
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                Member date:
                                            </span>{" "}
                                            {member.memberDate}
                                        </p>
                                    </div>
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
                <h3>{"No information"}</h3>
            </div>
        );
}
