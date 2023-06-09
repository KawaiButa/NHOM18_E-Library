import { Montserrat, Roboto } from "next/font/google";
import React from "react";
import { Button, Container, Image, Stack } from "react-bootstrap";
import styles from "./profileButton.module.css";
const montserrat = Montserrat({
  weight: ["500", "700"],
  style: "normal",
  subsets: ["latin"],
});
export default function ProfileButton() {
  return (
    <div className={styles.profileDropdown}>
      <div className={styles.profileDropdownDiv}>
        <Image
          src="/icon_profile_circle.png"
          alt="user-icon"
          style={{ gridColumn: "1", gridRow: "1" }}
        />
        <span
          className={montserrat.className}
          style={{
            position: "absolute",
            marginLeft: "32px",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "29px",
            opacity: "0.7",
            gridColumn: "1",
            gridRow: "1",
          }}
        >
          Duy Pham
        </span>
      </div>
      <div className={styles.profileDropdownContent}>
        <Stack gap={2}>
          <Button
            className="d-flex flex-row"
            style={{ height: "50px", backgroundColor: "transparent", borderWidth: "0px" }}
          >
            <Container
              className="d-flex justify-content-center align-items-center "
              style={{
                width: "39px",
                height: "39px",
                backgroundColor: "#D9D9D9",
                borderRadius: "39px",
                position: "absolute",
              }}
            >
              <Image src="/icon_user_black.png" alt="user_black" />
            </Container>
            <p
              className={montserrat.className}
              style={{
                color: "black",
                position: "absolute",
                marginTop: "5px",
                marginLeft: "55px",
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              Profile
            </p>
          </Button>
          <Button
            className="d-flex flex-row"
            style={{ height: "50px", backgroundColor: "transparent", borderWidth: "0px" }}
          >
            <Container
              className="d-flex justify-content-center align-items-center "
              style={{
                width: "39px",
                height: "39px",
                backgroundColor: "#D9D9D9",
                borderRadius: "39px",
                position: "absolute",
              }}
            >
              <Image src="/icon_pen_tool2.png" alt="user_black" />
            </Container>
            <p
              className={montserrat.className}
              style={{
                color: "black",
                position: "absolute",
                marginTop: "5px",
                marginLeft: "55px",
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              Feedback
            </p>
          </Button>
          <Container style={{width: "100%", height: "1px", backgroundColor: "black", opacity: "0.3", marginTop: '0px'}}/>
          <Button
            className="d-flex flex-row"
            style={{ height: "50px", backgroundColor: "transparent", borderWidth: "0px" }}
            href="/landing/login"
          >
            <Container
              className="d-flex justify-content-center align-items-center "
              style={{
                width: "39px",
                height: "39px",
                backgroundColor: "#D9D9D9",
                borderRadius: "39px",
                position: "absolute",
              }}
            >
              <Image src="/icon_logout.png" alt="user_black" />
            </Container>
            <p
              className={montserrat.className}
              style={{
                color: "black",
                position: "absolute",
                marginTop: "5px",
                marginLeft: "55px",
                fontWeight: "500",
                fontSize: "24px",
                lineHeight: "29px",
              }}
            >
              Log out
            </p>
          </Button>
        </Stack>
      </div>
    </div>
  );
}
