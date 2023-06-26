import { NextRequest, NextResponse } from "next/server";
import fs from "fs"
import axios from "axios";
import BookAPI from "../../../../endpoint/bookAPI";
import Book from "../../../../models/Book";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        var res;
        if (req.headers.get("Content-Type") == "application/json") {
            const data = await req.json()
            console.log(data)
            res = await axios.patch(BookAPI.oneBookEndpoint + params.id, data, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            }).then((response) => {
                if (response.status == 200) {
                    const data = response.data.data.doc
                    const book = new Book(data._id, data.nameBook, data.author, data.photoUrls[0], data.publisher, data.numberOfBooks, data.publicationYear)
                    return NextResponse.json(book, { status: 200, statusText: "Success" })
                }
                else
                    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
            }).catch((error) => {
                return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
            })
        }
        else {
            const data = await req.formData()
            res = await axios.patch(BookAPI.oneBookEndpoint + params.id, data, {
                method: "PATCH",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + token,
                },
            }).then((response) => {
                if (response.status == 200) {
                    const data = response.data.data.doc
                    const book = new Book(data._id, data.nameBook, data.author, data.photoUrls[0], data.publisher, data.numberOfBooks, data.publicationYear)
                    return NextResponse.json(book, { status: 200, statusText: "Success" })
                }
                else
                    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
            }).catch((error) => {
                return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
            })

        }

        return res
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        const res = axios.delete(BookAPI.oneBookEndpoint + params.id, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer " + token,

            },
        }).then((response) => {
            if (response.status == 204) {
                return NextResponse.json("Deleted", { status: 200, statusText: "Success" })
            }
            else
                return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
        }).catch((error) => {
            return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
        })
        return res
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        const res = axios.get(BookAPI.oneBookEndpoint + params.id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
        }).then((response) => {
            if (response.status == 201) {
                const data = response.data.data.doc
                const book = new Book(data._id, data.nameBook, data.author, data.photoUrls[0], data.publisher, data.numberOfBooks, data.publicationYear)
                return NextResponse.json(book, { status: 200, statusText: "Success" })
            }
            else
                return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
        }).catch((error) => {
            return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
        })
        return res
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}
