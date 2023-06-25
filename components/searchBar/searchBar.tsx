import { Montserrat, Roboto } from "next/font/google";
import { after } from "node:test";
import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Modal,
    Row,
    Stack,
    InputGroup,
    Table,
    Dropdown,
} from "react-bootstrap";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function SearchBar({params}) {
    const [checkboxes, setCheckboxes] = useState([
        { label: "User ID", checked: false },
        { label: "Borrow Book ID", checked: false },
        { label: "Admin ID", checked: false },
    ]);

    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
        setCheckboxes(updatedCheckboxes);
    };
    return (
        <>
            <style>{`
        .dropdown-toggle::after {
          display: none !important;
        }
        
       
      `}</style>
            <Container id="searchBar">
                <div className="d-flex justify-content-start">
                    <div
                        className="mb-3 d-flex"
                        style={{
                            width: "520px",
                            height: "38px",
                            background: "#151D3B",
                            borderColor: "#151D3B",
                            borderRadius: "16px",
                        }}
                    >
                        <Image
                            src="/Search.png"
                            alt="search"
                            style={{
                                width: "17px",
                                height: "17px",
                                position: "relative",
                                left: "15px",
                                top: "10px",
                                zIndex: "2",
                            }}
                        />
                        <FormControl
                            placeholder="Search"
                            style={{
                                background: "#151D3B",
                                borderColor: "#151D3B",
                                borderRadius: "16px",
                                overflow: "hidden",
                                color: "white",
                                outline: "none",
                                boxShadow: "none",
                                position: "relative",
                                left: "18px ",
                                fontSize: "14px",
                            }}
                        />
                        <Dropdown autoClose="outside" style={{zIndex: "10"}}>
                            <Dropdown.Toggle
                                variant="primary"
                                id="dropdown-checkbox"
                                style={{
                                    borderRadius: "16px",
                                    background: "#44B8CB",
                                    borderColor: "#44B8CB",
                                }}
                            >
                                <Image
                                    src="/Union.png"
                                    alt="union"
                                    style={{
                                        width: "12px",
                                        height: "15px",
                                        marginRight: "2px",
                                        zIndex: "2",
                                    }}
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu
                                className={montserrat.className}
                                style={{ width: "200px" }}
                            >
                                <Dropdown.ItemText>
                                    Search with:
                                </Dropdown.ItemText>
                                {checkboxes.map((checkbox, index) => (
                                    <Form.Check
                                        style={{
                                            marginBottom: "5px",
                                            marginLeft: "15px",
                                        }}
                                        color="#44B8CB"
                                        key={index}
                                        type="switch"
                                        id={`checkbox-${index}`}
                                        label={checkbox.label}
                                        checked={checkbox.checked}
                                        onChange={() =>
                                            handleCheckboxChange(index)
                                        }
                                    />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <Button
                        variant="primary"
                        style={{
                            borderRadius: "17px",
                            position: "relative",
                            width: "78px",
                            height: "38px",
                            left: "40px",
                            background: "#44B8CB",
                            borderColor: "#44B8CB",
                        }}
                    >
                        <p
                            className={montserrat.className}
                            style={{
                                color: "white",
                                fontWeight: "700",
                                fontSize: "16px",
                                alignSelf: "center",
                                position: "relative",
                            }}
                        >
                            All
                        </p>
                    </Button>
                </div>
            </Container>
        </>
    );
}
