import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../endpoint/Utils";
import axios from "axios";
import ReturnForm from "../../../models/returnForm";
import Book from "../../../models/Book";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/return-book-forms',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        };

        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 200) {
                    const result: ReturnForm[] = []
                    const data = response.data.data.doc;
                    data.forEach(element => {
                        console.log(element)
                        const books: Array<{ id: string, quantity: Number }> = []
                        element.lostBooks.forEach(element1 => {
                            books.push({ id: element1.bookId._id, quantity: element1.quantity })
                        });
                        result.push(new ReturnForm(element._id, element.borrowBookForm._id, element.borrower._id, element.borrower.fullName, books, element.fee, element.borrowBookForm.borrowDate, element.returnDate))
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
        const data = await req.json()
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/return-book-forms',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: data.body
        };

        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 200) {
                    var result: ReturnForm
                    const data = response.data.data.doc;
                    const books: Array<{ id: string, quantity: Number }> = []
                    data.lostBooks.forEach(element => {
                        books.push({ id: element.bookId._id, quantity: element.quantity })})
                        result = new ReturnForm(data._id, data.borrowBookForm._id, data.borrower._id, data.borrower.fullName, books, data.lateFee, data.borrowBookForm.borrowDate, data.returnDate)
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

