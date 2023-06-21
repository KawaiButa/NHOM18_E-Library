import { Montserrat, Roboto } from "next/font/google";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Form,
  Image,
  FormControl,
  Modal,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import styles from "../borrowCardList/borrowListCard.module.css";
import useReturn from "../../lib/useReturn";
import axios from "axios";
import { headers } from "next/headers";
import fetchJson from "../../lib/fetchJson";
import { METHODS } from "http";
import { useRouter } from "next/navigation";
import useProfile from "../../lib/useProfile";
const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export default function RemindListCard() {
  const { returns, mutateReturn } = useReturn();
  const { profile } = useProfile();
  const [member, setMember] = useState(null);
  useEffect(() => {
    async function onCreate() {
      if (profile)
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
            if (response.status == 204) setMember(null);
          });
    }
    onCreate();
  }, [profile]);
  const returnTable = () => {
    if (returns) {
      return (
        <Table
          responsive
          hover
          style={{
            borderBottomColor: "#D9D9D9",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Reader Name</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Late Fee</th>
            </tr>
          </thead>
          <tbody>
            {returns.map((element, index) => (
              <tr key={element.id} onDoubleClick={() => {}}>
                <td>{index + 1}</td>
                <td>{element.borrowerName}</td>
                <td>{element.borrowDate}</td>
                <td>{element.returnDate}</td>
                <td>
                  {element.lateFee === 0.0
                    ? "NO DELAY"
                    : element.lateFee.toString()}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
    } else
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
  if (member == null)
    return (
      <div>
        <h2>{"You don't have a reader card connect to this account."}</h2>
        <h2>{"Please contact to the library admin to create a reader card"}</h2>
      </div>
    );
  if (member && profile)
    return (
      <>
        <Row
          className="justify-content-center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              width: "85%",
              height: "70px",
              background: "black",
              borderRadius: "10px",
              position: "relative",
              top: "0px",
              zIndex: "2",
              alignSelf: "center",
            }}
          >
            <h2
              className={montserrat.className}
              style={{
                fontWeight: "700",
                color: "white",
                textAlign: "center",
                top: "15px",
                position: "relative",
                fontSize: "30px",
              }}
            >
              Return Card List
            </h2>
            <div
              className="d-flex justify-content-end"
              style={{
                position: "relative",
                top: "-32px",
                right: "15px",
              }}
            >
              <Button
                className={styles.button}
                style={{
                  height: "40px",
                  width: "98px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                  borderRadius: "30px",
                }}
                href="/home/transaction/return/add"
              >
                <p
                  className={montserrat.className}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    alignSelf: "center",
                    position: "relative",
                    top: "2px",
                  }}
                >
                  Add
                </p>
              </Button>
            </div>
          </div>
          <Card
            style={{
              width: "1055px",
              height: "580px",
              position: "relative",
              top: "-45px",
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{ display: "block", marginTop: "80px" }}
            >
              <div
                style={{
                  height: "350px",
                  maxHeight: "350px",
                  overflowY: "auto",
                  width: "100%",
                  marginLeft: "30px",
                  marginRight: "30px",
                }}
              >
                {returnTable()}
              </div>
            </div>
          </Card>
        </Row>
      </>
    );
  else return <></>;
}
