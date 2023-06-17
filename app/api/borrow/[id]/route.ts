import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../../endpoint/Utils";
import axios from "axios";


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/borrow-book-forms/' + params.id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        };
        const res = await axios.request(config).then((response) => {
            if (response.status == 204)
                return NextResponse.json("Deleted", { status: 200, statusText: "Success" })
            else
                return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
        }).catch((error) => NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" }))
        return res
    }
    return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/borrow-book-forms/' + params.id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        };
        const res = await axios.request(config).then((response) => {
            if (response.status == 200) {
                const result = new Array()
                const data = response.data.data.doc
                data.books.forEach(element => {
                    result.push({ id: element.bookId._id, name: element.bookId.nameBook, quantity: element.quantity })
                });
                return NextResponse.json({
                    borrower: data.borrower,
                    books: result,
                    borrowDate: data.borrowDate,
                    expectedReturnDate: data.expectedReturnDate
                }, { status: 200, statusText: "Success" })
            }
            else
                return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
        }).catch((error) => NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" }))
        return res
    }
    return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        const data = await req.json();
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/borrow-book-forms/' + params.id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: data.body
        };
        const res = await axios.request(config).then((response) => {
            if (response.status == 200) {
                return NextResponse.json("Success", { status: 200, statusText: "Success" })
            }
            else
                return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
        }).catch((error) => NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" }))
        return res
    }
    return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}