"use client";
import { Montserrat } from "next/font/google";
import React4 from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});
export default function FogetPassword() {
  return (
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
              top: "100px",
            }}
          >
            Forgot password?
          </p>

          <p
            className={`${montserrat.className} h2`}
            style={{
              display: "inline-block",
              fontWeight: "400",
              fontSize: "20px",
              position: "relative",
              top: "100px",
              width: "600px",
            }}
          >
            Enter the email address that you used to sign-up with and we’ll send
            a link to reset your password.
          </p>
        </div>
        <div
          className="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "130px",
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
                    placeholder="Enter your email"
                  />
                  <label>Email</label>
                </div>
              </div>

              <button
                type="submit"
                className={`${montserrat.className} btn btn-info btn-block`}
                style={{
                  position: "relative",
                  top: "30px",
                  color: "white",
                  fontWeight: "600",
                  width: "482px",
                }}
              >
                Send request
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
              {"Don't have an account? "}
              <a href="/landing/signup" style={{ textDecoration: "none" }}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
