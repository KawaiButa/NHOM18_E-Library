"use client";

import React from "react";
import { Button, Image } from "react-bootstrap";
import Link from "next/link";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: "normal",
    subsets: ["vietnamese"],
});
export default function Landing() {
    return (
        <>
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div
                                style={{
                                    marginTop: "100px",
                                    marginLeft: "50px",
                                }}
                                className="d-flex justify-content-center"
                            >
                                <p
                                    className={montserrat.className}
                                    style={{
                                        fontSize: "90px",
                                        fontWeight: "800",
                                        display: "inline-block",
                                    }}
                                >
                                    E-Library
                                </p>
                            </div>

                            <div
                                className="d-flex justify-content-center"
                                style={{
                                    marginTop: "0px",
                                    marginLeft: "50px",
                                }}
                            >
                                <p
                                    className={montserrat.className}
                                    style={{
                                        fontSize: "25px",
                                        fontWeight: "500",
                                        display: "block",

                                        maxWidth: "100%",
                                    }}
                                >
                                    Effective way to manage your library
                                </p>
                            </div>

                            <div
                                className="d-flex justify-content-center"
                                style={{ marginTop: "20px" }}
                            >
                                <Button
                                    variant="info"
                                    style={{
                                        width: "180px",
                                        display: "block",
                                        borderRadius: "30px",
                                        fontSize: "18px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "700",
                                        color: "white",
                                        maxWidth: "100%",
                                    }}
                                    href="/home"
                                >
                                    <div className={montserrat.className}>
                                        Get Started
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div
                                style={{
                                    marginTop: "60px",
                                    marginLeft: "50px",
                                }}
                            >
                                <Image
                                    className="landing_hero"
                                    src="/hero.png"
                                    style={{
                                        width: "524px",
                                        height: "450px",
                                    }}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
