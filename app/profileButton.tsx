import { Montserrat, Roboto } from "next/font/google";
import React from "react";
import { Container, Image } from "react-bootstrap";
const montserrat = Montserrat({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
export default function ProfileButton() {
  return (
    <>
      <div
        style={{
          width: "221px",
          height: "50px",
          display: "grid",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#EEEEEF",
          borderRadius: "30px",
        }}
        onClick={() => {}}
      >
        <Image
          src="/icon_profile_circle.png"
          alt="user-icon"
          style={{ gridColumn: "1", gridRow: "1" }}
        />
        <p
          className={montserrat.className}
          style={{
            color: "black",
            position: "absolute",
            marginTop: "17px",
            marginLeft: "32px",
            fontSize: "24px",
            lineHeight: "29.26px",
            cursor: "default"
          }}
        >
          Duy Pham
        </p>
      </div>
    </>
  );
}
