"use client";
import React, { ReactElement, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from "react-bootstrap";
import { Montserrat, Roboto } from "next/font/google";
import BookAPI from "../../../endpoint/bookAPI";
import BookPreview from "../../../components/bookPreview/bookPreview";
import useUser from "../../../lib/useProfile";
import useBook from "../../../lib/useBook";
import { useSearchParams } from "next/navigation";
import Book from "../../../models/Book";
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["vietnamese"],
});

export default function Home() {
  const [bookList, setBookList] = useState<ReactElement[]>([]);
  const { books } = useBook();
  const search = useSearchParams();
  useEffect(() => {
    const param = search.get("alphabet");
    const result: React.ReactElement[] = [];
    if (Array.from(search).length != 0 && books) {
      var bookAfterSearch: Book[] = [...books];
      search.forEach((value, key) => {
        const temp = [...bookAfterSearch];
        if (key == "search") {
          bookAfterSearch?.forEach((element) => {
            if (!element.name.includes(value)) temp.splice(temp.indexOf(element), 1);
          });
        }
        if (key == "alphabet") {
          bookAfterSearch?.forEach((element) => {
            console.log(element.name[0])
            console.log(element.name[0].includes(value))
            if (!element.name[0].includes(value)) temp.splice(temp.indexOf(element), 1);
          });
        }
        bookAfterSearch = [...temp];
      });
      bookAfterSearch?.forEach((element) => {
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
    } else {
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
    }
  }, [books]);
  if (books)
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
              style={{ paddingTop: "5px", fontWeight: "700", fontSize: "35px" }}
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
  else
    return (
      <main
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </main>
    );
}

const prepareAlphabets = () => {
  let result: React.ReactElement[] = [];
  for (let i = 65; i < 91; i++) {
    result.push(
      <Button
        key={i}
        href={"/home/library?" + "alphabet=" + String.fromCharCode(i)}
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
