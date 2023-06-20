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
                'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4NjgzODU5MiwiZXhwIjoxNjg3NDQzMzkyfQ.xXMQHih2siprW6uX0Ov7EhAfdtYhQpbzJvm0Pnqlpmw'
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
                'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4NjgzODU5MiwiZXhwIjoxNjg3NDQzMzkyfQ.xXMQHih2siprW6uX0Ov7EhAfdtYhQpbzJvm0Pnqlpmw'
            }
        };

        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 200) {
                    const data = response.data.data.doc;
                    const reader = new Reader(data._id, data.fullName, data.readerType, data.address, data.cardCreatedAt, data.email, data.dateOfBirth);
                    return NextResponse.json(reader, { status: 200, statusText: "Success" })
                }
                else
                    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText})
            })
            .catch((error) => {
                return NextResponse.json(error.response.data.message, {status: 409, statusText: "Conflict"})
            })
        return res;
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}