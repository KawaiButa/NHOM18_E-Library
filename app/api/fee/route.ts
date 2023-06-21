import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import endpoint from "../../../endpoint/Utils";
import FeeReceipt from "../../../models/feeReceipt";

export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (token) {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/fee-receipts',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4NjgyMjgxOSwiZXhwIjoxNjg3NDI3NjE5fQ.GRrdKcIPXbK7OVjdF-UA1l3c8zlcPBex10fpDBWaz8A'
            }
        };

        const response = await axios.request(config)
        if (response.status == 200) {
            console.log(response.data)
            const data = response.data.data.doc
            if (data) {
                const result:FeeReceipt[] = []
                data.forEach(element => {
                    const fee = new FeeReceipt(element._id, element.user, element.balance, element.totalDebt, element.amountPaid)
                    result.push(fee)
                });
                return NextResponse.json(result, { status: 200, statusText: "Success" });
            }
            else
            return NextResponse.json(null, { status: 204, statusText: "No Content" })

        }
        else
            return NextResponse.json(null, { status: response.status, statusText: response.statusText })
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}