import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../../../endpoint/Utils";
import axios from "axios";
import ReturnForm from "../../../../../models/returnForm";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        const data = await req.json()
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/borrow-book-forms/' + params.id + "/return-book-forms",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: data
        };
        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 201) {
                    var result: ReturnForm
                    const data = response.data.data.doc;
                    const books: Array<{ id: string, quantity: Number }> = []
                    data.lostBooks.forEach(element => {
                        books.push({ id: element.bookId._id, quantity: element.quantity })
                    })
                    result = new ReturnForm(data._id, data.borrowBookForm._id, data.borrower._id, data.borrower.firstName + " " + data.borrower.lastName, books, data.lateFee, data.borrowBookForm.borrowDate, data.returnDate)
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
    return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}