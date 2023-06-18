import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../endpoint/Utils";
import BorrowForm from "../../../models/borrowForm";

export async function GET(req:NextRequest){
  const token = req.cookies.get("token")?.value;
  if (token) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: endpoint + '/api/v1/borrow-book-forms/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };

    const res = await axios.request(config)
      .then((response) => {
        if (response.status == 200)
        {
          const result:BorrowForm[] = []
          const data = response.data.data.doc;
          data.forEach(element => {
              result.push(new BorrowForm(element._id, element.borrower._id,element.borrower.firstName + " " + element.borrower.lastName, element.borrowDate, element.expectedReturnDate))
          });
          console.log(result)
          return NextResponse.json(result, { status: 200, statusText: "Success" });
        }
        else
          return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })

      })
      .catch((error) => {
        return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
      })
    return res
  }
  else
    return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}

export async function POST(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (token) {
    const body = await req.json();
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: endpoint + '/api/v1/borrow-book-forms/',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token  
      },
      data: body.body
    };
    const res = await axios.request(config)
      .then((response) => {
        if (response.status == 201)
        {
          const data = response.data.data.doc
          return NextResponse.json(data, { status: 200, statusText: "Success" });
        }
        else
          return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })

      })
      .catch((error) => {
        return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
      })
    return res
  }
  else
    return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}