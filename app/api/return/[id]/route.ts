import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../../endpoint/Utils";
import axios from "axios";


export async function DELETE(req: NextRequest,{ params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/return-book-forms/' + params.id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        };

        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 204) {
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