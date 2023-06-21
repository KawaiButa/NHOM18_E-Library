"use client";
import { Montserrat } from "next/font/google";
import React from "react";
import { Button } from "react-bootstrap";
const montserrat = Montserrat({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: "normal",
    subsets: ["vietnamese"],
});

export default function RootLayout({ children }) {
    return (
        <>
            {" "}
            <header>
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <div className="col-lg-6 col-md-3 col-sm-12 col-6">
                            <a
                                href=""
                                className="navbar-brand"
                                style={{ display: "inline-block" }}
                            >
                                <p
                                    className={montserrat.className}
                                    style={{
                                        position: "relative",
                                        left: "10px",
                                        top: "14px",
                                        fontWeight: "800",
                                        fontSize: "30px",
                                    }}
                                >
                                    E-Library
                                </p>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <a
                                href=""
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    display: "inline-block",
                                    position: "relative",
                                    left: "80px",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: "600",
                                    }}
                                    className={`${montserrat.className} mt-3`}
                                >
                                    About us
                                </p>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <Button
                                type="button"
                                className={`${montserrat.className} btn btn-dark ms-4`}
                                style={{
                                    width: "160px",
                                    borderRadius: "30px",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                                href="/landing/login"
                            >
                                Login
                            </Button>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                            <Button
                                type="button"
                                className={`${montserrat.className} btn btn-dark ms-1`}
                                style={{
                                    width: "180px",
                                    borderRadius: "30px",
                                    fontSize: "18px",

                                    fontWeight: "500",
                                }}
                                href="/landing"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>
            {children}
        </>
    );
}
