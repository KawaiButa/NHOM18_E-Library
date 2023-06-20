import {
  Container,
  Form,

  Image,

  Stack,
  Nav,
  InputGroup,
} from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import useProfile from "../../lib/useProfile";
import axios from "axios";
const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
});

const TopUp_payment = () => {
  const BalanceContainer = ({ balance }) => {
    return (
      <div className={montserrat.className}>
        <h2>Current balance</h2>
        <p className="text-center" style={{ fontSize: "30px" }}>
          {" "}
          {balance}
        </p>
      </div>
    );
  };

  const TabContainer = ({ activeTab, onTabChange }) => {
    return (
      <div>
        <Stack direction="horizontal" style={{ marginTop: "20px" }}>
          <hr
            style={{
              color: "black",
              width: "325px",
              marginRight: "20px",
            }}
          />
          <Nav variant="pills" activeKey={activeTab} onSelect={onTabChange}>
            <Stack direction="horizontal">
              <Nav.Item>
                <Nav.Link
                  style={{
                    fontSize: "20px",
                    width: "130px",

                    borderRadius: "15px",
                    textAlign: "center",
                  }}
                  eventKey="topup"
                >
                  Top Up
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{
                    fontSize: "20px",
                    width: "130px",
                    borderRadius: "15px",
                    textAlign: "center",
                  }}
                  eventKey="payment"
                >
                  Payment
                </Nav.Link>
              </Nav.Item>
            </Stack>
          </Nav>
          <hr
            style={{
              color: "black",
              width: "325px",
              marginLeft: "20px",
            }}
          />
        </Stack>
      </div>
    );
  };

  const TopUp = () => {
    return (
      <div style={{ width: "940px" }}>
        <Stack style={{ alignItems: "start", marginTop: "10px" }}>
          <div className="top-up" style={{ width: "940px" }}>
            <div className="section">
              <h2>
                <p
                  className={montserrat.className}
                  style={{ fontSize: "25px", fontWeight: "600" }}
                >
                  Top up account
                </p>
              </h2>
              <Form>
                <Form.Group controlId="memberName">
                  <Stack direction="horizontal">
                    <Form.Label style={{ width: "130px" }}>
                      Member Name:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter member name"
                      style={{ width: "350px" }}
                      defaultValue={member.name}
                    />
                  </Stack>
                </Form.Group>

                <Form.Group controlId="memberId" style={{ marginTop: "18px" }}>
                  <Stack direction="horizontal">
                    <Form.Label style={{ width: "130px" }}>
                      Member ID:
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter member ID"
                      style={{ width: "350px" }}
                      defaultValue={member.readerId}
                    />
                  </Stack>
                </Form.Group>
              </Form>
            </div>

            <div className="section" style={{ marginTop: "20px" }}>
              <h2>
                <p
                  className={montserrat.className}
                  style={{ fontSize: "25px", fontWeight: "600" }}
                >
                  Top up
                </p>
              </h2>
              <Stack style={{ alignItems: "center", marginTop: "30px" }}>
                <InputGroup style={{ width: "300px" }}>
                  <div
                    className="input-group-prepend"
                    style={{
                      width: "50px",
                      border: "1px solid #D9D9D9",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                  >
                    <Image
                      src="/money.png"
                      style={{
                        width: "25px",
                        height: "30px",
                        marginTop: "10px",
                        marginLeft: "14px",
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Top up amount"
                    style={{ boxShadow: "none" }}
                  />
                </InputGroup>
                <p className="balance-info" style={{ marginTop: "10px" }}>
                  Your balance will be{" 1000 "}
                </p>
                <button
                  className="btn btn-primary"
                  style={{
                    width: "100px",
                    height: "40px",
                    marginTop: "30px",
                  }}
                >
                  <p
                    className={montserrat.className}
                    style={{ fontSize: "18px" }}
                  >
                    Top up
                  </p>
                </button>
              </Stack>
            </div>
          </div>
        </Stack>
      </div>
    );
  };

  const Payment = () => {
    return (
      <div style={{ width: "940px" }}>
        <div style={{ alignItems: "start", marginTop: "10px" }}>
          <h2>
            <p
              className={montserrat.className}
              style={{ fontSize: "25px", fontWeight: "600" }}
            >
              Money receipt
            </p>
          </h2>
        </div>
        <Stack style={{ alignItems: "center" }}>
          <div className={montserrat.className} style={{ width: "450px" }}>
            <h2
              className="mb-3 text-center"
              style={{ fontSize: "19px", fontWeight: "600" }}
            >
              Payment Detail
            </h2>
            <div className="payment-info">
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "40px",
                }}
              >
                <span className="label mr-2" style={{ color: "#B1B1B1" }}>
                  Member
                </span>
                <span style={{ color: "black" }}>{member.name}</span>
              </div>
              <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="label mr-2" style={{ color: "#B1B1B1" }}>
                  Money Pay
                </span>
                <InputGroup style={{ width: "250px" }}>
                  <div
                    className="input-group-prepend"
                    style={{
                      width: "50px",
                      border: "1px solid #D9D9D9",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                  >
                    <Image
                      src="/money.png"
                      style={{
                        width: "25px",
                        height: "30px",
                        marginTop: "10px",
                        marginLeft: "14px",
                      }}
                    />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    style={{
                      boxShadow: "none",
                      textAlign: "center",
                    }}
                  />
                </InputGroup>
              </div>
              <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="label mr-2" style={{ color: "#B1B1B1" }}>
                  Total Fee
                </span>
                <span className="value">40000 VNĐ</span>
              </div>
              <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <span
                  className="label mr-2"
                  style={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  Your Wallet
                </span>
                <span
                  style={{
                    color: "black",
                    fontWeight: "600",
                    fontSize: "20px",
                  }}
                >
                  29000 VNĐ
                </span>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary"
            style={{
              width: "100px",
              height: "40px",
              marginTop: "40px",
            }}
          >
            <p className={montserrat.className} style={{ fontSize: "18px" }}>
              Pay
            </p>
          </button>
        </Stack>
      </div>
    );
  };

  const [activeTab, setActiveTab] = useState("topup");
  const [member, setMember] = useState(null);
  const { profile } = useProfile();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    async function onCreate() {
      await axios
        .get("/api/profile/" + profile.id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          if (response.status == 200) setMember(response.data);
        })
        .catch((error) => {
          alert(error.message.data);
          router.back();
        });
    }
    onCreate();
  }, [profile]);
  if (member)
    return (
      <>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "1055px",
            height: "700px",
            background: "white",
          }}
        >
          <Stack style={{ alignItems: "center" }}>
            <BalanceContainer balance={1000} />
            <TabContainer activeTab={activeTab} onTabChange={handleTabChange} />
            <div>
              {activeTab === "topup" && <TopUp />}
              {activeTab === "payment" && <Payment />}
            </div>
          </Stack>
        </Container>
      </>
    );
  else
    return (
      <main
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "40%" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
};

export default TopUp_payment;
