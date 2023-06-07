"use client";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});

export default function SignUp() {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="text-center">
            <p
              className={`${montserrat.className} h1`}
              style={{
                display: "block",
                fontWeight: "800",
                fontSize: "60px",
                position: "relative",
                top: "30px",
              }}
            >
              Sign up for E-Library
            </p>
            <p
              className={`${montserrat.className} h2`}
              style={{
                display: "block",

                fontWeight: "400",
                fontSize: "22px",
                position: "relative",
                top: "40px",
              }}
            >
              Your library catalog available anywhere, anytime.
            </p>
          </div>
        </div>
        <div className="container-fluid" style={{ marginTop: "70px" }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p
                className={`${montserrat.className} h3`}
                style={{
                  fontSize: "25px",
                  marginBottom: "20px",
                  fontWeight: "600",
                }}
              >
                Account info
              </p>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label className={`${montserrat.className}`}>
                      First Name:
                    </label>
                    <input
                      type="text"
                      className={`${montserrat.className} form-control`}
                      id="firstName"
                      placeholder="Enter your first name"
                      style={{
                        marginTop: "10px",
                      }}
                    />
                  </div>
                  <div className="col">
                    <label className={`${montserrat.className} `}>
                      Last Name:
                    </label>
                    <input
                      type="text"
                      className={`${montserrat.className} form-control`}
                      id="lastName"
                      placeholder="Enter your last name"
                      style={{
                        marginTop: "10px",
                      }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className={`${montserrat.className}`}>Email:</label>
                  <input
                    type="email"
                    className={`${montserrat.className} form-control`}
                    id="email"
                    placeholder="Enter your email"
                    style={{
                      marginTop: "10px",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className={`${montserrat.className}`}>Password:</label>
                  <input
                    type="password"
                    className={`${montserrat.className} form-control`}
                    id="password"
                    placeholder="Enter your password"
                    style={{
                      marginTop: "10px",
                    }}
                  />
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "30px" }}
                >
                  <button
                    type="submit"
                    className={`${montserrat.className} btn btn-info`}
                    style={{
                      color: "white",
                      fontWeight: "600",
                      width: "270px",
                    }}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
            <hr style={{ position: "relative", top: "60px" }} />
            <p
              className={`${montserrat.className} text-center`}
              style={{
                position: "relative",
                top: "60px",
              }}
            >
              {"Already have a account? "}
              <a href="/landing/login" style={{ textDecoration: "none" }}>
                Login up
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
