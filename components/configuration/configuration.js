import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  Image,
  Row,
  Col,
  Stack,
  Nav,
  InputGroup,
} from "react-bootstrap";

import React, { useState } from "react";
import { Monsieur_La_Doulaise, Montserrat } from "next/font/google";
import axios from "axios";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["vietnamese"],
});

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
          <Stack direction="horizontal" className={montserrat.className}>
            <Nav.Item>
              <Nav.Link
                style={{
                  fontSize: "20px",
                  width: "130px",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
                eventKey="reader"
              >
                Reader
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
                eventKey="book"
              >
                Book
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

const Reader = () => {
  return (
    <div style={{ width: "940px" }}>
      <Stack style={{ alignItems: "start", marginTop: "20px" }}>
        <div className="top-up" style={{ width: "940px" }}>
          <div className="section">
            <Stack direction="horizontal">
              <h2>
                <p
                  className={montserrat.className}
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    cursor: "default",
                  }}
                >
                  Reader card
                </p>
              </h2>
              <Image
                src="/icon_edit.png"
                style={{
                  marginBottom: "25px",
                  marginLeft: "10px",
                }}
              />
            </Stack>
            <Form
              className={montserrat.className}
              style={{ marginLeft: "50px", marginTop: "20px" }}
              onSubmit={async function HandleSummit(event) {
                event.preventDefault();
                const body = {};
                if (event.currentTarget.maxAge.value)
                body.ageMax = event.currentTarget.maxAge.value;
                if (event.currentTarget.minAge.value)
                body.ageMin = event.currentTarget.minAge.value;
                if (event.currentTarget.expiredMonth.value)
                body.expiredMonth = event.currentTarget.expiredMonth.value;
                
                console.log(body);
                const config = {
                  url: "/api/configuration",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: JSON.stringify(body),
                };
                await axios
                  .request(config)
                  .then((response) => {
                    alert("Change validation successfully");
                    window.location.reload();
                  })
                  .catch((error) => {
                    alert(error);
                    //window.location.reload();
                  });
              }}
            >
              <Form.Group controlId="minimumAge">
                <Stack direction="horizontal">
                  <Form.Label
                    style={{
                      width: "200px",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Minimum age:
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    type="number"
                    id="minAge"
                    placeholder=""
                    min={0}
                    defaultValue={18}
                    style={{
                      width: "100px",
                      marginLeft: "20px",
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
              </Form.Group>

              <Form.Group controlId="maximumAge" style={{ marginTop: "30px" }}>
                <Stack direction="horizontal">
                  <Form.Label
                    style={{
                      width: "200px",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Maximum age:
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    type="number"
                    placeholder=""
                    min={0}
                    defaultValue={55}
                    id="maxAge"
                    style={{
                      width: "100px",
                      marginLeft: "20px",
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  />
                </Stack>
              </Form.Group>
              <Form.Group
                controlId="expirationTime"
                style={{ marginTop: "30px" }}
              >
                <Stack direction="horizontal">
                  <Form.Label
                    style={{
                      width: "200px",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Card expiration time:
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    type="number"
                    defaultValue={6}
                    placeholder=""
                    id="expiredMonth"
                    style={{
                      fontSize: "18px",
                      width: "200px",
                      marginLeft: "20px",
                      marginBottom: "10px",
                    }}
                  />
                </Stack>
              </Form.Group>
              <Stack
                direction="horizontal"
                style={{
                  alignItems: "center",
                  marginTop: "100px",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="primary"
                  className={montserrat.className}
                  style={{
                    width: "130px",
                    height: "50px",
                    borderRadius: "15px",
                    fontWeight: "600",
                    fontSize: "20px",
                    background: "#44B8CB",
                    borderColor: "#44B8CB",
                    marginLeft: "300px",
                  }}
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  variant="primary"
                  className={montserrat.className}
                  type="reset"
                  style={{
                    width: "130px",
                    height: "50px",
                    borderRadius: "15px",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "black",
                    background: "#D9D9D9",
                    borderColor: "#D9D9D9",
                    marginRight: "300px",
                  }}
                >
                  Undo
                </Button>
              </Stack>
            </Form>
          </div>
        </div>
      </Stack>
    </div>
  );
};

const Book = () => {
  return (
    <div style={{ width: "940px" }}>
      <Stack style={{ alignItems: "start", marginTop: "20px" }}>
        <div className="top-up" style={{ width: "940px" }}>
          <div className="section">
            <Stack direction="horizontal" style={{ marginTop: "0px" }}>
              <h2>
                <p
                  className={montserrat.className}
                  style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    cursor: "default",
                  }}
                >
                  Publication year
                </p>
              </h2>
              <Image
                src="/icon_edit.png"
                style={{
                  marginBottom: "25px",
                  marginLeft: "10px",
                }}
              />
            </Stack>
            <Form
              className={montserrat.className}
              style={{ marginLeft: "50px", marginTop: "10px" }}
              onSubmit={async function HandleSummit(event) {
                event.preventDefault();
                const body = {};
                if (event.currentTarget.maxYear.value)
                  body.publicationYear = event.currentTarget.maxYear.value;
                if (event.currentTarget.maxAmount.value)
                  body.numberOfBooks = event.currentTarget.maxAmount.value;
                if (event.currentTarget.borrowingDate.value)
                  body.borrowingDate = event.currentTarget.borrowingDate.value;
                const config = {
                  url: "/api/configuration",
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: JSON.stringify(body),
                };
                axios
                  .request(config)
                  .then((response) => {
                    alert("Change validation successfully");
                    window.location.reload();
                  })
                  .catch((error) => {
                    alert(error.response.data);
                    window.location.reload();
                  });
              }}
            >
              <Stack direction="horizontal">
                <Form.Group controlId="maximumYear">
                  <Stack direction="horizontal">
                    <Form.Label
                      style={{
                        width: "260px",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Maximum years:
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      type="number"
                      min={0}
                      defaultValue={8}
                      placeholder=""
                      id="maxYear"
                      style={{
                        width: "100px",
                        fontSize: "18px",
                        marginBottom: "10px",
                        marginLeft: "20px",
                      }}
                    />
                  </Stack>
                </Form.Group>
              </Stack>
              <Stack direction="horizontal" style={{ marginTop: "40px" }}>
                <h2>
                  <p
                    className={montserrat.className}
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      cursor: "default",
                    }}
                  >
                    Book
                  </p>
                </h2>
                <Image
                  src="/icon_edit.png"
                  style={{
                    marginBottom: "25px",
                    marginLeft: "10px",
                  }}
                />
              </Stack>
              <Stack direction="horizontal">
                <Form.Group controlId="maximum">
                  <Stack direction="horizontal">
                    <Form.Label
                      style={{
                        width: "260px",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Maximum amount:
                    </Form.Label>
                    <Form.Control
                      className="text-center"
                      type="number"
                      placeholder=""
                      defaultValue={100}
                      id="maxAmount"
                      style={{
                        width: "100px",
                        marginBottom: "10px",
                        fontSize: "18px",
                        marginLeft: "20px",
                      }}
                    />
                  </Stack>
                </Form.Group>
              </Stack>
              <Form.Group
                controlId="maximumOrderDay"
                style={{ marginTop: "30px" }}
              >
                <Stack direction="horizontal">
                  <Form.Label
                    style={{
                      width: "260px",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Maximum borrowing days:
                  </Form.Label>
                  <Form.Control
                    className="text-center"
                    type="number"
                    placeholder=""
                    defaultValue={7}
                    id="borrowingDate"
                    style={{
                      width: "100px",
                      marginBottom: "10px",
                      fontSize: "18px",
                      marginLeft: "20px",
                    }}
                  />
                </Stack>
              </Form.Group>
              <Stack
                direction="horizontal"
                style={{
                  alignItems: "center",
                  marginTop: "70px",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="primary"
                  className={montserrat.className}
                  style={{
                    width: "130px",
                    height: "50px",
                    borderRadius: "15px",
                    fontWeight: "600",
                    fontSize: "20px",
                    background: "#44B8CB",
                    borderColor: "#44B8CB",
                    marginLeft: "300px",
                  }}
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  variant="primary"
                  className={montserrat.className}
                  style={{
                    width: "130px",
                    height: "50px",
                    borderRadius: "15px",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "black",
                    background: "#D9D9D9",
                    borderColor: "#D9D9D9",
                    marginRight: "300px",
                  }}
                  type="reset"
                >
                  Undo
                </Button>
              </Stack>
            </Form>
          </div>
        </div>
      </Stack>
    </div>
  );
};

const Configuration = () => {
  const [activeTab, setActiveTab] = useState("reader");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          marginTop: "50px",
          width: "1055px",
          height: "600px",
          background: "white",
        }}
      >
        <Stack style={{ alignItems: "center" }}>
          <TabContainer activeTab={activeTab} onTabChange={handleTabChange} />
          <div>
            {activeTab === "reader" && <Reader />}
            {activeTab === "book" && <Book />}
          </div>
        </Stack>
      </Container>
    </>
  );
};

export default Configuration;
