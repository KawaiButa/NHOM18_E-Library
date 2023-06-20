import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import endpoint from "../../../endpoint/Utils";
import { User } from "../../../models/user";

export async function GET(req:NextRequest){
    const token = req.cookies.get("token")?.value;
    if (token) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: endpoint + '/api/v1/users',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        };

        const res = await axios.request(config)
            .then((response) => {
                if (response.status == 200) {
                    const result: User[] = []
                    const data = response.data.data.doc;
                    data.forEach(element => {
                        result.push({id: element._id, name: element.firstName + " " + element.lastName, email: element.email, image: "", role: element.role } as User)
                    });
                    console.log(result)
                    return NextResponse.json(result, { status: 200, statusText: "Success" });
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