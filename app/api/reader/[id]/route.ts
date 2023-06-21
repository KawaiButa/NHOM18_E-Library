import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Reader from "../../../../models/reader";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value
    if (token) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: 'https://book-library-management.onrender.com/api/v1/readers/' + params.id,
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        };

        const response = await axios.request(config)
        console.log(response)
        if (response.status == 200 || response.status == 204)
            return NextResponse.json(null, { status: 200, statusText: "Success" });
        else
            return response
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value
    if (token) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://book-library-management.onrender.com/api/v1/readers/' + params.id,
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        };

        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 200) {
                    const data = response.data.data.doc;
                    const reader = new Reader(data._id, data.fullName, data.readerType, data.address, data.cardCreatedAt, data.user, data.email, data.dateOfBirth);
                    return NextResponse.json(reader, { status: 200, statusText: "Success" })
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

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        const body = await req.json()
        console.log(body)
        const res = await axios.patch('https://book-library-management.onrender.com/api/v1/readers/' + params.id, body,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
            }).then((response) => {
                if (response.status == 200) {
                    const data = response.data.data.doc
                    const reader = new Reader(data._id, data.fullName, data.readerType, data.address, data.cardCreatedAt, data.user, data.email, data.dateOfBirth);
                    console.log(reader)
                    return NextResponse.json(reader, { status: 200, statusText: "Success" })
                }
                else
                    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
            }).catch((error) => {
                console.log(error)
                return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
            })
        return res
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}