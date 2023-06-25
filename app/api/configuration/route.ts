import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../endpoint/Utils";
import axios from "axios";

export async function POST(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (token) {
        const data = req.json()
        console.log(data)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/users/change-library-regulations',
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            data: data
        };

        const response = await axios.request(config)
        if (response.status == 200 || response.status == 201) {
            console.log(response.data)
            return NextResponse.json("Success", { status: 200, statusText: "Success" });
        }
    else
        return NextResponse.json(null, { status: response.status, statusText: response.statusText })
}
    else
return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}