import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    let data = JSON.stringify({
        "firstName": "Phap",
        "lastName": "Nguyen",
        "email": "nh151700@gmail.com",
        "password": "12345678910",
        "passwordConfirm": "12345678910"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://book-library-management.onrender.com/api/v1/users/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    const response = await axios.request(config)
    if (response.status == 201)
        return NextResponse.json(response.data, {
            status: 200,
            headers: { 'Set-Cookie': `token=${response.data.token}` },
        });
    else
        return NextResponse.json(undefined, { status: response.status, statusText: response.statusText })
}