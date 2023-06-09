"use client";
import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from "react-bootstrap";
import { Montserrat, Roboto } from "next/font/google";
import BookAPI from "../../api/bookAPI";
import BookPreview from "../../components/bookPreview/bookPreview";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});

export default function Home() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    BookGridView()
      .then((response) => {
        const data = response.data.data.doc;
        const result = [];
        for (let i = 0; i < data.length; i++) {
          result.push(
            <BookPreview
              key={data[i].id}
              bookID={data[i].id}
              bookName={data[i].nameBook}
              imgUrl={data[i].photoUrls[0]}
              author={data[i].author}
            />
          );
          console.log(data[i]);
          setBookList(result);
        }
      })
      .catch((error) => {
        console.log(error);
        setBookList([]);
      });
  }, []);
  return (
    <main className="d-flex justify-content-center">
      <Stack direction="vertical" style={{ paddingLeft: "52px" }} gap={3}>
        <header
          className="rounded"
          style={{
            width: "985px",
            backgroundColor: "black",
            paddingLeft: "52px",
            color: "white",
          }}
        >
          <h1
            className={montserrat.className}
            style={{ paddingTop: "5px", fontWeight: "700", fontSize: "45px" }}
          >
            Book List
          </h1>
        </header>
        <Stack direction="horizontal" gap={2}>
          {prepareAlphabets()}
        </Stack>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(0px, 147px))", gridGap: "92px" }}>{bookList}</div>
      </Stack>
    </main>
  );
}

const prepareAlphabets = () => {
  let result = [];
  for (let i = 65; i < 91; i++) {
    result.push(
      <Button
        key={i}
        onClick={() => {}}
        value={String.fromCharCode(i)}
        className="d-flex border-0"
        style={{
          width: "30px",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        {String.fromCharCode(i)}
      </Button>
    );
  }
  return result;
};

function BookGridView(): Promise<any> {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: BookAPI.allEndpoint,
    headers: {},
  };

  return axios.request(config);
}
