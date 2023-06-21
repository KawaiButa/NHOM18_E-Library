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
                        width: "275px",
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
                        <Nav.Item>
                            <Nav.Link
                                style={{
                                    fontSize: "20px",
                                    width: "150px",
                                    borderRadius: "15px",
                                    textAlign: "center",
                                }}
                                eventKey="transaction"
                            >
                                Transaction
                            </Nav.Link>
                        </Nav.Item>
                    </Stack>
                </Nav>
                <hr
                    style={{
                        color: "black",
                        width: "275px",
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
                                            width: "130px",
                                            fontWeight: "600",
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
                                            marginLeft: "10px",
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
                                            width: "130px",
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
                                            marginLeft: "10px",
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
                                            width: "180px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Card expiration time:
                                    </Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        type="text"
                                        placeholder=""
                                        style={{
                                            width: "200px",
                                            marginLeft: "10px",
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
                        <Stack direction="horizontal">
                            <h2>
                                <p
                                    className={montserrat.className}
                                    style={{
                                        fontSize: "25px",
                                        fontWeight: "600",
                                    }}
                                >
                                    Genre
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
                            <Stack direction="horizontal">
                                <Form.Group controlId="genre1">
                                    <Stack direction="horizontal">
                                        <Form.Label
                                            style={{
                                                width: "80px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Genre 1:
                                        </Form.Label>
                                        <Form.Control
                                            className="text-center"
                                            type="text"
                                            placeholder=""
                                            style={{
                                                width: "150px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </Stack>
                                </Form.Group>
                                <Form.Group
                                    controlId="maximumNumber"
                                    style={{ marginLeft: "150px" }}
                                >
                                    <Stack direction="horizontal">
                                        <Form.Label
                                            style={{
                                                width: "180px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Maximum number:
                                        </Form.Label>
                                        <Form.Control
                                            className="text-center"
                                            type="text"
                                            placeholder=""
                                            style={{
                                                width: "100px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </Stack>
                                </Form.Group>
                            </Stack>
                            <Stack
                                direction="horizontal"
                                style={{ marginTop: "35px" }}
                            >
                                <Form.Group controlId="genre2">
                                    <Stack direction="horizontal">
                                        <Form.Label
                                            style={{
                                                width: "80px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Genre 2:
                                        </Form.Label>
                                        <Form.Control
                                            className="text-center"
                                            type="text"
                                            placeholder=""
                                            style={{
                                                width: "150px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </Stack>
                                </Form.Group>
                                <Form.Group
                                    controlId="maximumNumber"
                                    style={{ marginLeft: "150px" }}
                                >
                                    <Stack direction="horizontal">
                                        <Form.Label
                                            style={{
                                                width: "180px",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Maximum number:
                                        </Form.Label>
                                        <Form.Control
                                            className="text-center"
                                            type="text"
                                            placeholder=""
                                            style={{
                                                width: "100px",
                                                marginLeft: "10px",
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
                                    }}
                                >
                                    Publication year gap
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
                            <Stack direction="horizontal">
                                <Form.Group controlId="maximumYear">
                                    <Stack direction="horizontal">
                                        <Form.Label
                                            style={{
                                                width: "150px",
                                                fontWeight: "600",
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
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </Stack>
                                </Form.Group>
                            </Stack>
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

const Transaction = () => {
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
                                    }}
                                >
                                    Borrow card
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
                                            width: "280px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Maximum book to order/day :
                                    </Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        type="text"
                                        placeholder=""
                                        style={{
                                            width: "100px",
                                            marginLeft: "10px",
                                        }}
                                    />
                                </Stack>
                            </Form.Group>

                            <Form.Group
                                controlId="maximumOrderDay"
                                style={{ marginTop: "30px" }}
                            >
                                <Stack direction="horizontal">
                                    <Form.Label
                                        style={{
                                            width: "240px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        Maximum ordering days:
                                    </Form.Label>
                                    <Form.Control
                                        className="text-center"
                                        type="text"
                                        placeholder=""
                                        style={{
                                            width: "150px",
                                            marginLeft: "10px",
                                        }}
                                    />
                                </Stack>
                            </Form.Group>
                        </Form>
                        <Stack
                            direction="horizontal"
                            style={{
                                alignItems: "center",
                                marginTop: "170px",
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
                        {activeTab === "transaction" && <Transaction />}
                    </div>
                </Stack>
            </Container>
        </>
    );
};

export default Configuration;
