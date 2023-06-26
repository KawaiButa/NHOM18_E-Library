import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../endpoint/Utils";
import axios from "axios";
import Financial from "../../../models/financial";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (token) {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/user-financials/me',
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        };

        const response = await axios.request(config).then((response) => {
            if (response.status == 200) {
                const data = response.data.userFinancials;
                if (data) {
                    const financial = new Financial(data._id, data.user, data.balance, data.totalDebt)
                    return NextResponse.json(financial, { status: 200, statusText: "Success" });
                }
                else
                    return NextResponse.json(null, { status: 204, statusText: "No Content" })

            }
            else
                return NextResponse.json(null, { status: response.status, statusText: response.statusText })

        })
            .catch((error) => {
                return NextResponse.json(error.response.data, { status: 409, statusText: "Conflict" })
            })
        return response
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}