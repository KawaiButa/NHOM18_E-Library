"use client";

import axios from "axios";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});
export default function Page() {
  const router = useRouter();
  return (
    <main style={{ height: "650px" }}>
      <div className="container-fluid">
        <div className="text-center">
          <p
            className={`h1 ${montserrat.className}`}
            style={{
              display: "block",
              fontWeight: "800",
              fontSize: "60px",
              position: "relative",
              top: "50px",
            }}
          >
            Reset Password
          </p>
          <p
            className={`h2 ${montserrat.className}`}
            style={{
              display: "block",
              fontWeight: "400",
              fontSize: "22px",
              position: "relative",
              top: "60px",
            }}
          >
            Enter your new password below
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
            <form
              onSubmit={async function HandleSummit(event) {
                event.preventDefault();
                const data = {
                  password: event.currentTarget.newPassword.value,
                  passwordConfirm: event.currentTarget.confirmPassword.value,
                };
                const config = {
                  method: "put",
                  maxBodyLength: Infinity,
                  url: "/api/reset",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: JSON.stringify(data),
                };
                await axios.request(config).then((response) => {
                  if (response.status == 200) {
                    alert("Your password has been update successfully")
                    router.push("/landing/login")
                  };
                }).catch((error) => {
                    alert(error.response.data)
                    router.refresh()
                })
              }}
            >
              <div className="form-group">
                <div className="form-floating">
                  <input
                    type="password"
                    className={`form-control ${montserrat.className}`}
                    id="newPassword"
                    placeholder="New Password"
                  />
                  <label className={montserrat.className}>New Password</label>
                </div>
              </div>
              <div
                className="form-group"
                style={{ position: "relative", top: "20px" }}
              >
                <div className="form-floating">
                  <input
                    type="password"
                    className={`form-control ${montserrat.className}`}
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <label className={montserrat.className}>
                    Confirm Password
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className={`btn btn-info btn-block ${montserrat.className}`}
                style={{
                  position: "relative",
                  top: "50px",
                  color: "white",
                  fontWeight: "600",
                  width: "482px",
                }}
              >
                Reset Password
              </button>
            </form>

            <hr style={{ position: "relative", top: "60px" }} />
            <p
              className={`text-center ${montserrat.className}`}
              style={{
                position: "relative",
                top: "60px",
              }}
            >
              {"Don't have an account?"}
              <a href="#" style={{ textDecoration: "none" }}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
