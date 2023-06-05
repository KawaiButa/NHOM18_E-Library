"use client";
import { Montserrat } from "next/font/google";
import React from "react";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: "normal",
  subsets: ["vietnamese"],
});
export default function Home() {
  return (
    <>
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
                    fontWeight: "700",
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
                  className= {`${montserrat.className} mt-3`}
                >
                  About us
                </p>
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <button
                type="button"
                className={`${montserrat.className} btn btn-dark ms-4`}
                style={{
                  width: "160px",
                  borderRadius: "30px",
                  fontSize: "18px",
                  
                  fontWeight: "500",
                }}
              >
                Login
              </button>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <button
                type="button"
                className={`${montserrat.className} btn btn-dark ms-1`}
                style={{
                  width: "180px",
                  borderRadius: "30px",
                  fontSize: "18px",
                  
                  fontWeight: "500",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>
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
            <div className="col-md-4">
              <form>
                <div className="form-group">
                  <div className="form-floating">
                    <input
                      type="email"
                      className={`${montserrat.className} form-control`}
                      id="email"
                      placeholder="Email"
                    />
                    <label className={montserrat.className}>Email</label>
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{ position: "relative", top: "20px" }}
                >
                  <div className="form-floating">
                    <input
                      type="password"
                      className={`${montserrat.className} form-control`}
                      id="password"
                      placeholder="Password"
                    />
                    <label className={montserrat.className}>Password</label>
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{ position: "relative", top: "30px" }}
                >
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      
                    }}
                    className={montserrat.className}
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className={`${montserrat.className} btn btn-info btn-block`}
                  style={{
                    position: "relative",
                    top: "50px",
                    color: "white",
                    
                    fontWeight: "600",
                    width: "482px",
                  }}
                >
                  Sign In
                </button>
              </form>

              <hr style={{ position: "relative", top: "60px" }} />
              <p
                className={`${montserrat.className} text-center`}
                style={{
                  position: "relative",
                  top: "60px",
                  
                }}
              >
                Don&apos;t have an account?
                <a href="#" style={{ textDecoration: "none" }}>
                  Sign upF
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
