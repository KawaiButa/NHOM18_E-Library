"use client";
import React, { ReactElement, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from "react-bootstrap";
import { Montserrat, Roboto } from "next/font/google";
import BookAPI from "../../../endpoint/bookAPI";
import BookPreview from "../../../components/bookPreview/bookPreview";
import { useSession } from "next-auth/react";
import useUser from "../../../lib/useUser";
import useBook from "../../../lib/useBook";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});

export default function Home() {
  const [bookList, setBookList] = useState<ReactElement[]>([]);
  const { books } = useBook();
  useEffect(() => {
    // BookGridView()
    //   .then((response) => {
    //     const data = response.data.data.doc;
    //     const result: React.ReactElement[] = [];
    //     for (let i = 0; i < data.length; i++) {
    //       result.push(
    //         <BookPreview
    //           key={data[i].id}
    //           bookID={data[i].id}
    //           bookName={data[i].nameBook}
    //           imgUrl={data[i].photoUrls[0]}
    //           author={data[i].author}
    //         />
    //       );
    //       console.log(data[i]);
    //       setBookList(result);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setBookList([]);
    //   });
    const result: React.ReactElement[] = [];
    books?.forEach((element) => {
      result.push(
        <BookPreview
          key={element.id}
          bookID={element.id}
          bookName={element.name}
          imgUrl={element.imgUrl}
          author={element.author}
        />
      );
    });
    setBookList(result);
  }, [books]);
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(0px, 147px))",
            gridGap: "92px",
            paddingLeft: "30px",
          }}
        >
          {bookList}
        </div>
      </Stack>
    </main>
  );
}

const prepareAlphabets = () => {
  let result: React.ReactElement[] = [];
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
