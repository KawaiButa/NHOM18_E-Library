"use client";

import React, { useState } from "react";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import styles from "../layout.module.css";

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: "normal",
  subsets: ["latin", "vietnamese"],
});
export default function RootLayout({ children }) {
  const [Tab, setTab] = useState("Library");
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body>
        <Stack direction="horizontal">
          <SidebarMenu variant={"dark"} >
            <SidebarMenu.Header className={`${montserrat.className} d-flex justify-content-center align-items-center`} style={{ width: "262px", height: "300px", backgroundColor:"black", fontWeight: "700", fontSize: "30px" }}>
              <p style={{color:"white"}}>E-Library</p>
            </SidebarMenu.Header>
            <SidebarMenu.Body
              style={{
                width: "262px",
                height: "100%",
                backgroundColor: "black",
                padding: "24px",
              }}
            >
              <SidebarMenu.Nav className="d-flex flex-column">
                <SidebarMenu.Nav.Link
                  className={styles.sidebarNavLink}
                  role="button"
                >
                  <SideTabButton tab="Library">
                    <SidebarMenu.Nav.Title
                      className={montserrat.className}
                      style={{ color: "inherit" }}
                    >
                      Library
                    </SidebarMenu.Nav.Title>
                  </SideTabButton>
                </SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Link
                  role="button"
                  className={styles.sidebarNavLink}
                >
                  <SideTabButton tab="Book">
                    <SidebarMenu.Nav.Title
                      className={montserrat.className}
                      style={{ color: "inherit" }}
                    >
                      Book
                    </SidebarMenu.Nav.Title>
                  </SideTabButton>
                </SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Link
                  role="button"
                  className={styles.sidebarNavLink}
                >
                  <SideTabButton tab="Member">
                    <SidebarMenu.Nav.Title
                      className={montserrat.className}
                      style={{ color: "inherit" }}
                    >
                      Member
                    </SidebarMenu.Nav.Title>
                  </SideTabButton>
                </SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Link
                  role="button"
                  className={styles.sidebarNavLink}
                >
                  <SideTabButton tab="Transaction">
                    <SidebarMenu.Nav.Title
                      className={montserrat.className}
                      style={{ color: "inherit" }}
                    >
                      Transaction
                    </SidebarMenu.Nav.Title>
                  </SideTabButton>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Body>
          </SidebarMenu>
          <Container style={{ width: "100%", height: "100%" }} fluid>
            {" "}
            {children}
          </Container>
        </Stack>
      </body>
    </html>
  );
  function SideTabButton({ children, tab }) {
    return (
      <>
        <Button
          className="d-flex justify-content-center align-items-center"
          onClick={() => setTab(tab)}
          style={{
            backgroundColor: tab == Tab ? "white" : "transparent",
            color: tab == Tab ? "black" : "white",
          }}
        >
          {children}
        </Button>
      </>
    );
  }
}
