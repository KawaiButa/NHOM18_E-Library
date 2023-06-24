"use client";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import { Button, Card, Form, Stack } from "react-bootstrap";
import fetchJson from "../../../lib/fetchJson";
import useProfile from "../../../lib/useProfile";
const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    style: "normal",
    subsets: ["vietnamese"],
});
export default function Login() {
    const { mutateProfile } = useProfile({
        redirectTo: "/home",
        redirectIfFound: true,
    });
    const [isLoading, setIsLoading] = useState(false);
    const Loading = ({ child }) => {
        if (isLoading) {
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
        } else {
            return child;
        }
    };
    return (
        <>
            <main style={{ height: "650px" }}>
                <div className="container-fluid">
                    <div className="text-center">
                        <p
                            className={`${montserrat.className} h1`}
                            style={{
                                display: "block",
                                fontWeight: "800",
                                fontSize: "60px",
                                position: "relative",
                                top: "50px",
                            }}
                        >
                            Login to E-Library
                        </p>
                        <p
                            className={`${montserrat.className} h2`}
                            style={{
                                display: "block",
                                fontWeight: "400",
                                fontSize: "22px",
                                position: "relative",
                                top: "60px",
                            }}
                        >
                            Effective way to manage your library
                        </p>
                    </div>
                    <div
                        className="center"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            top: "100px",
                        }}
                    >
                        <Card className="shadow">
                            <Card.Body
                                className="shadow-sm"
                                style={{
                                    paddingLeft: "90px",
                                    paddingRight: "90px",
                                    paddingTop: "90px",
                                    paddingBottom: "35px",
                                }}
                            >
                                {Loading({
                                    child: (
                                        <Form
                                            style={{ width: "439px" }}
                                            onSubmit={async function HandleSummitEvent(
                                                event
                                            ) {
                                                event.preventDefault();
                                                setIsLoading(true);
                                                const body = {
                                                    email: event.currentTarget
                                                        .email.value,
                                                    password:
                                                        event.currentTarget
                                                            .password.value,
                                                };
                                                try {
                                                    mutateProfile(
                                                        await fetchJson(
                                                            "/api/login",
                                                            {
                                                                method: "POST",
                                                                headers: {
                                                                    "Content-Type":
                                                                        "application/json",
                                                                },
                                                                body: JSON.stringify(
                                                                    body
                                                                ),
                                                            }
                                                        )
                                                    );
                                                } catch (error) {
                                                    alert(error);
                                                    setIsLoading(false);
                                                }
                                            }}
                                        >
                                            <Stack direction="vertical" gap={3}>
                                                <div className="form-group">
                                                    <div className="form-floating">
                                                        <input
                                                            type="email"
                                                            className={`${montserrat.className} form-control`}
                                                            id="email"
                                                            placeholder="Email"
                                                        />
                                                        <label
                                                            className={
                                                                montserrat.className
                                                            }
                                                        >
                                                            Email
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-floating">
                                                        <input
                                                            type="password"
                                                            className={`${montserrat.className} form-control`}
                                                            id="password"
                                                            placeholder="Password"
                                                        />
                                                        <label
                                                            className={
                                                                montserrat.className
                                                            }
                                                        >
                                                            Password
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <a
                                                        href="/landing/forgetpassword"
                                                        style={{
                                                            textDecoration:
                                                                "none",
                                                        }}
                                                        className={
                                                            montserrat.className
                                                        }
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <Button
                                                    type="submit"
                                                    className={`${montserrat.className} btn btn-info btn-block`}
                                                    style={{
                                                        color: "white",
                                                        borderRadius: "30px",
                                                        fontWeight: "600",
                                                        fontSize: "20px",
                                                        height: "45px",
                                                    }}
                                                >
                                                    Login
                                                </Button>
                                            </Stack>
                                        </Form>
                                    ),
                                })}
                            </Card.Body>
                            <Card.Footer
                                className="d-flex justify-content-center align-items-center "
                                style={{
                                    paddingTop: "20px",
                                    paddingBottom: "20px",
                                }}
                            >
                                <span
                                    className={`${montserrat.className} text-center`}
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "400",
                                    }}
                                >
                                    {"Don't have an account? "}
                                    <a
                                        href="/landing/signup"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Sign up
                                    </a>
                                </span>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    );
}
