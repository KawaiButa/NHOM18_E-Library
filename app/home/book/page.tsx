"use client";
import { Montserrat, Roboto } from "next/font/google";
import React from "react";
import { Container, Form, FormControl } from "react-bootstrap";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese"],
  style: "normal",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["vietnamese"],
  style: "normal",
});
export default function AddBook() {
  return (
    <main>
      <Container
        style={{
          width: "100%",
          maxWidth: "1178px",
          paddingLeft: "80px",
          paddingRight: "100px "
        }}
      >
        <h1
          className={roboto.className}
          style={{ fontWeight: "700", fontSize: "25px", marginTop: "20px" }}
        >
          Add Book
        </h1>
        <hr />
        <Form>
          <div className="form-group">
            <label className={montserrat.className}>Title:</label>
            <FormControl type="text" id="title" style={{ marginTop: "10px" }} />
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
            <label className={montserrat.className}>Publish Date:</label>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="year"
                  placeholder="Year"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="month"
                  placeholder="Month"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="day"
                  placeholder="Day"
                />
              </div>
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
                  id="cover-image"
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
