"use client";

import React, { useState } from "react";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormGroup,
  InputGroup,
  Nav,
  Navbar,
  Row,
  Stack,
} from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import styles from "../layout.module.css";
import Image from "next/image";
import ProfileButton from "../../components/profileButton/profileButton";

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: "normal",
  subsets: ["latin", "vietnamese"],
});
export default function Layout({ children }) {
  const [Tab, setTab] = useState("Library");
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Col
      direction="horizontal"
      className="d-flex align-item-start justify-item-start"
      style={{ height: "100%" }}
    >
      <SidebarMenu variant={"dark"} style={{ backgroundColor: "black" }}>
        <SidebarMenu.Header
          className={`${montserrat.className} d-flex justify-content-center align-items-center`}
          style={{
            width: "262px",
            paddingTop: "90px",
            paddingBottom: "75px",
            fontWeight: "700",
            fontSize: "30px",
          }}
        >
          <p style={{ color: "white" }}>E-Library</p>
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
      <div
        className="d-flex"
        style={{
          margin: "0px",
          padding: "0px",
          height: "100%",
          width: "100%",
        }}
      >
        <Stack direction="vertical" style={{}}>
          <header
            className="d-flex"
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: "white",
            }}
          >
            <Row style={{ width: "100%", height: "100%" }}>
              <Col className="d-flex justify-content-center align-items-center">
                <FormGroup
                  className=" d-flex justify-content-center align-items-center"
                  style={{ width: "721px" }}
                >
                  <InputGroup className="border rounded align-items-center">
                    <div
                      className="input-ground-addon fs-4"
                      style={{ marginLeft: "13px", width: "50px" }}
                    >
                      <image className="icon bi-search fa-lg"></image>
                    </div>
                    <FormControl size="lg" className="border-0"></FormControl>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs lg="3" className="d-flex justify-content-center align-items-center">
                <ProfileButton/>
              </Col>
            </Row>
          </header>
          <Container style={{ width: "100%", height: "100%" }} fluid>
            {children}
          </Container>
        </Stack>
      </div>
    </Col>
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
