"use client";

import React, { Suspense, useState } from "react";
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
import SidebarMenu, {
  SidebarMenuCollapse,
  SidebarMenuNav,
  SidebarMenuSub,
} from "react-bootstrap-sidebar-menu";
import styles from "../layout.module.css";
import ProfileButton from "../../components/profileButton/profileButton";
import "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useProfile from "../../lib/useProfile";
const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: "normal",
  subsets: ["latin", "vietnamese"],
});
export default function Layout({ children }) {
  const pathName = usePathname();
  console.log(pathName.split("/").slice(-1)[0]);
  const [Tab, setTab] = useState(pathName.split("/").slice(-1)[0]);
  const router = useRouter();
  const { profile } = useProfile();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    var search = document.getElementById("searchFormGroup");
    search!.style.visibility = "visible";
  }, [profile]);
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
          {profile ? (
            <SidebarMenu.Nav className="d-flex flex-column">
              <SidebarMenu.Nav.Link
                className={styles.sidebarNavLink}
                role="button"
                href="/home/library"
              >
                <SideTabButton tab="library">
                  <SidebarMenu.Nav.Title
                    className={montserrat.className}
                    style={{ color: "inherit" }}
                  >
                    Library
                  </SidebarMenu.Nav.Title>
                </SideTabButton>
              </SidebarMenu.Nav.Link>
              {profile && profile.role == "admin" ? (
                <>
                  <SidebarMenu.Nav.Link
                    role="button"
                    className={styles.sidebarNavLink}
                    href={"/home/book"}
                  >
                    <SideTabButton tab="book">
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
                    href={
                      profile && profile.role == "admin"
                        ? "/home/member"
                        : "/home/profile/" + profile?.id
                    }
                  >
                    <SideTabButton tab="member">
                      <SidebarMenu.Nav.Title
                        className={montserrat.className}
                        style={{ color: "inherit" }}
                      >
                        Member
                      </SidebarMenu.Nav.Title>
                    </SideTabButton>
                  </SidebarMenu.Nav.Link>
                </>
              ) : (
                <></>
              )}

              <SidebarMenu.Nav.Link
                role="button"
                className={styles.sidebarNavLink}
              >
                <SidebarMenu.Sub>
                  <SidebarMenu.Sub.Toggle
                    onClick={() => setTab("Transaction")}
                    style={{
                      backgroundColor:
                        Tab == "Transaction" ? "white" : "transparent",
                      color: Tab == "Transaction" ? "black" : "white",
                    }}
                  >
                    <SidebarMenu.Nav.Title
                      className={montserrat.className}
                      style={{ color: "inherit" }}
                    >
                      Transaction
                    </SidebarMenu.Nav.Title>
                    <SidebarMenuSub.Collapse style={{ paddingTop: "30px" }}>
                      <SidebarMenuNav className={styles.sidebarMenuSub}>
                        <Button
                          className={styles.sidebarMenuSubButton}
                          onClick={() =>
                            router.push("/home/transaction/borrow")
                          }
                        >
                          <SidebarMenu.Nav.Title
                            className={montserrat.className}
                            style={{ color: "inherit" }}
                          >
                            Borrow card
                          </SidebarMenu.Nav.Title>
                        </Button>
                        <Button
                          className={styles.sidebarMenuSubButton}
                          onClick={() =>
                            router.push("/home/transaction/return")
                          }
                        >
                          <SidebarMenu.Nav.Title
                            className={montserrat.className}
                            style={{ color: "inherit" }}
                          >
                            Return card
                          </SidebarMenu.Nav.Title>
                        </Button>
                        <Button
                          className={styles.sidebarMenuSubButton}
                          onClick={() => router.push("/home/transaction/fee")}
                        >
                          <SidebarMenu.Nav.Title
                            className={montserrat.className}
                            style={{ color: "inherit" }}
                          >
                            Fee card
                          </SidebarMenu.Nav.Title>
                        </Button>
                        <Button
                          className={styles.sidebarMenuSubButton}
                          onClick={() =>
                            router.push("/home/transaction/wallet")
                          }
                        >
                          <SidebarMenu.Nav.Title
                            className={montserrat.className}
                            style={{ color: "inherit" }}
                          >
                            Wallet
                          </SidebarMenu.Nav.Title>
                        </Button>
                      </SidebarMenuNav>
                    </SidebarMenuSub.Collapse>
                  </SidebarMenu.Sub.Toggle>
                </SidebarMenu.Sub>
              </SidebarMenu.Nav.Link>
              {profile && profile.role == "admin" ? (
                <SidebarMenu.Nav.Link
                  className={styles.sidebarNavLink}
                  style={{
                    textDecoration: "none",
                    alignContent: "center",
                    width: "100%",
                  }}
                  onClick={() => {
                    router.push("/home/configuration");
                  }}
                >
                  <SideTabButton tab="configuration">
                    <SidebarMenu.Nav.Title
                      className={montserrat.className}
                      style={{ color: "inherit" }}
                    >
                      Configuration
                    </SidebarMenu.Nav.Title>
                  </SideTabButton>
                </SidebarMenu.Nav.Link>
              ) : (
                <></>
              )}
            </SidebarMenu.Nav>
          ) : (
            <></>
          )}
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
              <Col
                lg="8"
                className="d-flex justify-content-center align-items-center"
                style={{ paddingLeft: "75px" }}
              >
                <FormGroup
                  className=" d-flex justify-content-center align-items-center"
                  style={{ width: "721px" }}
                  id="searchFormGroup"
                >
                  <InputGroup className="border rounded align-items-center">
                    <div
                      className="input-ground-addon fs-4"
                      style={{
                        marginLeft: "13px",
                        width: "50px",
                      }}
                    >
                      <image className="icon bi-search fa-lg"></image>
                    </div>
                    <FormControl
                      size="lg"
                      className="border-0"
                      onKeyDown={(event) => {
                        if (event.key == "Enter") {
                          event.preventDefault();
                          if (event.currentTarget.value) {
                            var url = new URL(document.URL.split("?")[0]);
                            url.searchParams.set(
                              "search",
                              event.currentTarget.value
                            );
                            window.location.replace(url);
                          }
                          else
                            {
                              var url = new URL(document.URL.split("?")[0]);
                              window.location.replace(url);
                            }
                          
                        }
                      }}
                    ></FormControl>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col
                xs
                lg="4"
                className="d-flex justify-content-center align-items-center"
              >
                <Suspense>
                  <ProfileButton />
                </Suspense>
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
