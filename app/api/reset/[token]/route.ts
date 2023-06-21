import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../../endpoint/Utils";

export async function PATCH(req: NextRequest, { params }: { params: { token: string } }) {
    const data = await req.json()
    let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: endpoint + '/api/v1/users/reset-password/' + params.token,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    const res = await axios.request(config)
        .then((response) => {
            if (response.status == 200) {

                return NextResponse.json(response.data, {
                    status: 200,
                    headers: { 'Set-Cookie': `token=${response.data.token}` },
                });
            }
            else
                return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })

        })
        .catch((error) => {
            return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
        })
    return res
}

