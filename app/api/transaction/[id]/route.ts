import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../../endpoint/Utils";
import axios from "axios";


export async function POST(req: NextRequest, { params }: { params: { id: string } }) {

    const token = req.cookies.get("token")?.value;
    if (token) {
        const body = await req.json();
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/user-transactions?user=' + params.id + "&status=success",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            data: body.body
        };
        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 201) {
                    return NextResponse.json("Success", { status: 200, statusText: "Success" });
                }
                else
                    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })

            })
            .catch((error) => {
                return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
            })
        return res
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })
}