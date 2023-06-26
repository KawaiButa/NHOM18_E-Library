import { Montserrat, Roboto } from "next/font/google";
import React, { useEffect, useState } from "react";
import { Card, Row, Table } from "react-bootstrap";
import useFee from "../../lib/useFee";
import useProfile from "../../lib/useProfile";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function FeeListCard() {
  const { feeReceipts } = useFee();
  const [feeList, setFeeList] = useState(null);
  const { profile } = useProfile();
  useEffect(() => {
    if (feeReceipts) {
      var feeAfterSearch = [...feeReceipts];
      if (profile && profile.role != "admin") {
        const temp = [...feeAfterSearch]
        feeAfterSearch.forEach((element) => {
          if (element.user != profile.id) {
            temp.splice(temp.indexOf(element), 1);
          }
        });
        feeAfterSearch = temp
      }
      setFeeList(feeAfterSearch);
    }
  }, [profile, feeReceipts]);
  const feeTable = () => {
    if (feeList)
      return (
        <Table
          responsive
          hover
          style={{
            borderBottomColor: "#D9D9D9",
            width: "1000px",
          }}
        >
          <thead>
            <tr style={{ cursor: "default" }}>
              <th>#</th>
              <th>Fee Receipt ID</th>
              <th>UserId</th>
              <th>Balance</th>
              <th>Total Debt</th>
              <th>Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {feeList.map((element, index) => (
              <tr key={element.id} id={index.toString()}>
                <td style={{ cursor: "default" }}>{index + 1}</td>
                <td style={{ cursor: "default" }}>{element.id}</td>
                <td style={{ cursor: "default" }}>{element.user}</td>
                <td style={{ cursor: "default" }}>
                  {element.balance.toFixed(2)}
                </td>
                <td style={{ cursor: "default" }}>
                  {element.totalDebt.toFixed(2)}
                </td>
                <td style={{ cursor: "default" }}>
                  {element.amountPaid.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
  if (profile)
    return (
      <>
        <Row
          className="justify-content-center"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              width: " 985px",
              height: "85px",
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
                top: "21px",
                position: "relative",
                cursor: "default",
              }}
            >
              Fee Card List
            </h2>
          </div>
          <Card
            style={{
              width: "1055px",
              height: "606px",
              position: "relative",
              top: "-45px",
            }}
          >
            <div
              className="d-flex justify-content-center"
              style={{ display: "block", marginTop: "100px" }}
            >
              <div
                style={{
                  height: "350px",
                  maxHeight: "350px",
                  overflowY: "auto",
                }}
              >
                {feeTable()}
              </div>
            </div>
          </Card>
        </Row>
      </>
    );
  else return <></>;
}
