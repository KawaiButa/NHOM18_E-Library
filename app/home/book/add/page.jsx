"use client";
import axios from "axios";
import { Montserrat, Roboto } from "next/font/google";
import React, { useState } from "react";
import FormData from "form-data";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import BookAPI from "../../../../endpoint/bookAPI";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese"],
  style: "normal",
});

export default function AddBook() {
  const [img, setImg] = useState(null);
  return (
    <main>
      <Container
        style={{
          width: "100%",
          maxWidth: "1178px",
          paddingLeft: "80px",
          paddingRight: "100px ",
        }}
      >
        <Form
          onSubmit={async function HandleSummitEvent(event) {
            event.preventDefault();
            const body = {
              nameBook: event.currentTarget.bookTitle.value,
              typeBook: "test",
              author: event.currentTarget.author.value,
              publicationYear: event.currentTarget.year.value,
              publisher: event.currentTarget.publisher.value,
              price: event.currentTarget.price.value,
              description: event.currentTarget.description.value,
              numberOfBooks: event.currentTarget.amount.value,
            };
            const res = await axios
              .post("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              })
              .then((response) => {
                if (response.status == 200) {
                  return response
                } else{
                  alert(response.data);
                  return response
                } 
              })
              .catch((error) => {
                alert(error.response.data);
              });
            if (res.status == 200) {
              const data = new FormData();

              data.append("photos", img);

              await axios
                .patch(
                  BookAPI.oneBookEndpoint + "648db8ffbbde5df63be76d35",
                  data,
                  {
                    maxBodyLength: Infinity,
                    maxContentLength: Infinity,
                    headers: {
                      "Content-Type": "multipart/form-data",
                      Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4NjkwNDI2MCwiZXhwIjoxNjg5NDk2MjYwfQ.N_i2H9X6z7Fo2ytlqFdwFEoT4ufQ5RhzWVMpSMAUQT4",
                    },
                  }
                )
                .then((response) => {
                  console.log(response.data.data.doc);
                  alert("Add book successfully");
                })
                .catch((error) => alert(error.response.data));
            }
          }}
        >
          <div className="form-group">
            <label className={montserrat.className}>Title:</label>
            <FormControl
              type="text"
              id="bookTitle"
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <label className={montserrat.className}>Author:</label>
            <FormControl
              type="text"
              id="author"
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <label className={montserrat.className}>Description:</label>
            <textarea
              className="form-control"
              id="description"
              rows={5}
              style={{ marginTop: "10px" }}
            ></textarea>
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <label className={montserrat.className}>Publisher:</label>
            <input
              type="text"
              className="form-control"
              id="publisher"
              style={{ marginTop: "10px" }}
            />
          </div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <div className="row" style={{ marginTop: "10px" }}>
              <Col xs={10}>
                <label className={montserrat.className}>Publish Date:</label>
                <input
                  type="text"
                  className="form-control"
                  id="year"
                  placeholder="Year"
                />
              </Col>
              <Col xs={2}>
                <div className="form-group">
                  <label className={montserrat.className}>Amount:</label>
                  <input type="number" className="form-control" id="amount" />
                </div>
              </Col>
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col">
              <div className="form-group">
                <label className={montserrat.className}>Number of Pages:</label>
                <input type="text" className="form-control" id="pages" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className={montserrat.className}>Price:</label>
                <input type="text" className="form-control" id="price" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label className={montserrat.className}>Cover Image:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="coverImage"
                  onChange={(event) => {
                    if (event.currentTarget.files)
                      setImg(event.currentTarget.files[0]);
                  }}
                />
              </div>
            </div>
          </div>

          <hr style={{ marginTop: "50px" }} />
          <div className="d-flex justify-content-start">
            <button
              type="submit"
              className="btn btn-info"
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
                width: "200px",
                borderRadius: "10px",
                marginBottom: "50px",
                marginTop: "20px",
                marginRight: "50px",
              }}
            >
              Add Book
            </button>
          </div>
        </Form>
      </Container>
    </main>
  );
}
