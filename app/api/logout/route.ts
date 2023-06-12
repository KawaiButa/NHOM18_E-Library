import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (!token)
        return new NextResponse(null, {
            status: 401, statusText: "Unauthorized", headers: {
                'content-type': 'application/json',
                'Set-Cookie': `access-token=${token}; Path=/; Max-Age=0`
            }
        })

    let data = '';

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://book-library-management.onrender.com/api/v1/users/logout',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        data: data
    };

    const response = await axios.request(config);
    if (response.status == 200) {
        req.cookies.delete("token")
        req.cookies.set("token", "")
        return new NextResponse(response.data, {
            status: response.status,
            statusText: response.statusText,
            headers: {
                'content-type': 'application/json',
                'Set-Cookie': `access-token=${token}; Path=/; Max-Age=0`
            }
        })
    }
    else
        return new NextResponse(response.data, {
            status: response.status, statusText: response.statusText, headers: {
                'content-type': 'application/json',
                'Set-Cookie': `access-token=${token}; Path=/; Max-Age=0`
            }
        })
}