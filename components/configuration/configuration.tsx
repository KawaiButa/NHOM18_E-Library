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
                <Nav
                    variant="pills"
                    activeKey={activeTab}
                    onSelect={onTabChange}
                >
                    <Stack
                        direction="horizontal"
                        className={montserrat.className}
                    >
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
                                        type="text"
                                        placeholder=""
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
                                controlId="maximumAge"
                                style={{ marginTop: "30px" }}
                            >
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
                                        type="text"
                                        placeholder=""
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
                                        type="text"
                                        placeholder=""
                                        style={{
                                            fontSize: "18px",
                                            width: "200px",
                                            marginLeft: "20px",
                                            marginBottom: "10px",
                                        }}
                                    />
                                </Stack>
                            </Form.Group>
                        </Form>
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
                            >
                                Undo
                            </Button>
                        </Stack>
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
                        <Stack
                            direction="horizontal"
                            style={{ marginTop: "0px" }}
                        >
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
                                            type="text"
                                            placeholder=""
                                            style={{
                                                width: "100px",
                                                fontSize: "18px",
                                                marginBottom: "10px",
                                            }}
                                        />
                                    </Stack>
                                </Form.Group>
                            </Stack>
                        </Form>
                        <Stack
                            direction="horizontal"
                            style={{ marginTop: "40px" }}
                        >
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
                        <Form
                            className={montserrat.className}
                            style={{ marginLeft: "50px", marginTop: "10px" }}
                        >
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
                                            type="text"
                                            placeholder=""
                                            style={{
                                                width: "100px",
                                                marginBottom: "10px",
                                                fontSize: "18px",
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
                                        type="text"
                                        placeholder=""
                                        style={{
                                            width: "100px",
                                            marginBottom: "10px",
                                            fontSize: "18px",
                                        }}
                                    />
                                </Stack>
                            </Form.Group>
                        </Form>
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
                            >
                                Undo
                            </Button>
                        </Stack>
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
                    <TabContainer
                        activeTab={activeTab}
                        onTabChange={handleTabChange}
                    />
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
