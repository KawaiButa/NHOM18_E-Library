import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Alert } from "react-bootstrap";
import endpoint from "../../../endpoint/Utils";
import Reader from "../../../models/reader";
import { cookies } from "next/headers";


export async function POST(req: NextRequest) {
    const token = req.cookies.get("token")?.value

    if (token) {
        let body = await req.json()
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/readers/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            data: body
        };
        const res = await axios.request(config).then((response) => {
            if (response.status == 201) {
                const element = response.data
                const reader = new Reader(element._id, element.fullName, element.readerType, element.address, element.cardCreatedAt, element.user, element.email, element.dateOfBirth)
                return NextResponse.json(reader, { status: 200, statusText: "Success" })
            }
        }).catch((error) => { return NextResponse.json(error.response.data, { status: 409, statusText: "Conflict" }); });
        return res
    }
    else
        return NextResponse.json("No access token", { status: 401, statusText: "Unauthorized" })
}

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (token) {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/readers/',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4NjgyMjgxOSwiZXhwIjoxNjg3NDI3NjE5fQ.GRrdKcIPXbK7OVjdF-UA1l3c8zlcPBex10fpDBWaz8A'
            }
        };

        const response = await axios.request(config)
        if (response.status == 200) {
            const data = response.data.data.doc;
            const result: Reader[] = [];
            console.log(data)
            data.forEach(element => {
                const reader = new Reader(element._id, element.fullName, element.readerType, element.address, element.cardCreatedAt, element.user, element.email, element.dateOfBirth)
                result.push(reader);
            });
            return NextResponse.json(result, {status: 200, statusText: "Success"});
        }
        else
            return NextResponse.json(null, { status: response.status, statusText: response.statusText })
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}