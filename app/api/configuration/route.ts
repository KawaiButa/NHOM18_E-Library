import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../endpoint/Utils";
import axios from "axios";

export async function POST(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (token) {
        const data = await req.json()
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/validation',
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
            data: data
        };

        const response = await axios.request(config)
        if (response.status == 200 || response.status == 201) {
            const data = response.data.data
            return NextResponse.json({
                ageMin: data.ageMin,
                ageMax: data.ageMax,
                expiredMonth: data.expiredMonth,
                numberOfBooks: data.numberOfBooks,
                publicationYear: data.publicationYear,
                borrowingDate: data.borrowingDate
            }, { status: 200, statusText: "Success" });
        }
        else
            return NextResponse.json(null, { status: response.status, statusText: response.statusText })
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}
export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")?.value
    if (token) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/validation',
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
            },
        };

        const response = await axios.request(config)
        if (response.status == 200 || response.status == 201) {
            const data = response.data.validation;
            return NextResponse.json({
                ageMin: data.ageMin,
                ageMax: data.ageMax,
                expiredMonth: data.expiredMonth,
                numberOfBooks: data.numberOfBooks,
                publicationYear: data.publicationYear,
                borrowingDate: data.borrowingDate
            }, { status: 200, statusText: "Success" });
        }
        else
            return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}