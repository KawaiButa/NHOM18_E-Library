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
import { useSearchParams } from "next/navigation";
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
  const [returnList, setReturnList] = useState(null);
  const search = useSearchParams();
  const { profile } = useProfile();

  const returnTable = () => {
    if (returns && returnList) {
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
              <th>BorrowId</th>
              <th>Reader Name</th>
              <th>Borrow Date</th>
              <th>Return Date</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {returnList.map((element, index) => (
              <tr key={element.id} onDoubleClick={() => {}}>
                <td style={{ cursor: "default" }}>{element.borrowId}</td>
                <td style={{ cursor: "default" }}>{element.borrowerName}</td>
                <td style={{ cursor: "default" }}>
                  {element.borrowDate.split("T")[0]}
                </td>
                <td style={{ cursor: "default" }}>
                  {element.returnDate.split("T")[0]}
                </td>
                <td style={{ cursor: "default" }}>
                  {element.lateFee === 0.0
                    ? "NO DELAY"
                    : element.lateFee.toFix(2).toString()}
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

  useEffect(() => {
    if (profile && returns) {
      var returnAfterSearch = [...returns];
      search.forEach((value, key) => {
        const temp = [...returnAfterSearch];
        switch (key) {
          case "borrower": {
            returnAfterSearch.forEach((element) => {
              if (element.borrowerId != value)
                temp.splice(temp.indexOf(element), 1);
            });
            break;
          }
          case "fee": {
            returnAfterSearch.forEach((element) => {
              if (element.lateFee != value)
                temp.splice(temp.indexOf(element), 1);
            });
            break;
          }
          case "year": {
            returnAfterSearch.forEach((element) => {
              console.log(element.borrowerId);
              if (element.returnDate.slice(0, 4) != value)
                temp.splice(temp.indexOf(element), 1);
            });
            break;
          }
        }
        returnAfterSearch = temp;
      });
      setReturnList(returnAfterSearch);
    }
  }, [profile, returns]);
  if (profile)
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
                visibility:
                  profile && profile.role == "admin" ? "visible" : "hidden",
              }}
            >
              <Button
                className={styles.button}
                style={{
                  height: "40px",
                  width: "105px",
                  backgroundColor: "#44B8CB",
                  borderWidth: "0px",
                  borderRadius: "30px",
                }}
                href="/home/transaction/return/add"
              >
                <Stack direction="horizontal">
                  <Image
                    src="/cardIcon.png"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginBottom: "14px",
                      marginLeft: "7px",
                    }}
                  />
                  <p
                    className={montserrat.className}
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "18px",
                      alignSelf: "center",
                      marginLeft: "9px",
                      marginTop: "2px",
                    }}
                  >
                    Add
                  </p>
                </Stack>
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
