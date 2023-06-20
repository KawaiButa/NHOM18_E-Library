import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import endpoint from "../../../../endpoint/Utils";

export async function POST(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (token) {
        const data = await req.json()
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/users/top-up',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4NjgyMjgxOSwiZXhwIjoxNjg3NDI3NjE5fQ.GRrdKcIPXbK7OVjdF-UA1l3c8zlcPBex10fpDBWaz8A'
            },
            data: data
        };

        const response = await axios.request(config)
        if (response.status == 200) {
            const data = response.data.session;
            return NextResponse.json(data.url, { status: 200, statusText: "Success" });

        }
        else
            return NextResponse.json(null, { status: response.status, statusText: response.statusText })
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}