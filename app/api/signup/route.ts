import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    let data = await req.json()

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://book-library-management.onrender.com/api/v1/users/signup',
        headers: {
            'Content-Type': 'application/json'
            
        },
        data: data.body
    };

    const res = await axios.request(config).then((response) => {
        if (response.status == 201)
            return NextResponse.json(response, {
                status: 200,
                headers: { 'Set-Cookie': `token=${response.data.token}` },
            })
        else
            return NextResponse.json(undefined, { status: response.status, statusText: response.statusText });
    }).catch((error) => new NextResponse(error.response.data.message, { status: 409, statusText: "Conflict" }))
    return res;

}