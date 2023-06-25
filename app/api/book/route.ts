import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Book from "../../../models/Book";
import BookAPI from "../../../endpoint/bookAPI";


export async function GET(req: NextRequest) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: BookAPI.allEndpoint,
    headers: {
      'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODRhNDQ5ZTVkYmE5MWRkYzA4YmJmZiIsImlhdCI6MTY4NjQxNDQxMCwiZXhwIjoxNjg3MDE5MjEwfQ.lfmcozg-LTO_HzdQqyvzblrzx6mR7oraZuQRHRNNOrs'
    }
  };

  const response = await axios.request(config)
  if (response.status == 200) {
    var result: Book[] = []
    const data = response.data.data.doc;
    data.forEach(element => {
      result.push(new Book(element._id, element.nameBook, element.author, element.photoUrls[0], element.publisher, element.numberOfBooks, element.publicationYear))
    });
    return NextResponse.json(result, { status: 200, statusText: "OK" });
  }
  else
    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
}
export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const body = await req.json();
  if (token) {
    //console.log(body.body)
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://book-library-management.onrender.com/api/v1/books',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + token,
        'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4Njg5MzY4MywiZXhwIjoxNjg5NDg1NjgzfQ.q39M6mpSUyxEbjWDxWOGYGxYpnooNDs7dwA29dpXDW0'
      },
      data : body
    };
    
    const res = await axios.request(config)
      .then((response) => {
        if (response.status == 201) {
          const data = response.data.data.doc
          const book = new Book(data._id, data.nameBook,data.author,data.photoUrls[0], data.publisher,data.numberOfBooks,data.publicationYear)
          return NextResponse.json(book, { status: 200, statusText: "Success" })
        }
        else
          return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
      })
      .catch((error) => {
        return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
      })
    return res;
  }
  else
    return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}