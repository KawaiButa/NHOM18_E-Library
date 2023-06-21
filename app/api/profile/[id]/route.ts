import endpoint from "../../../../endpoint/Utils"
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Reader from "../../../../models/reader";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value;
    if (token) {
        var res;
        if (req.headers.get("Content-Type") == "application/json") {
            const data = await req.json()
            res = await axios.patch(endpoint + "/api/v1/users/update-me/" + params.id, data, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
            }).then((response) => {
                if (response.status == 200) {
                    const data = response.data
                    const user = { id: data._id, name: data.firstName + " " + data.lastName, email: data.email, image: "", role: data.role }
                    return NextResponse.json(user, { status: 200, statusText: "Success" })
                }
                else
                    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
            }).catch((error) => {
                return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
            })
        }
        else {
            const data = await req.formData()
            res = await axios.patch(endpoint + "/api/v1/users/update-me/" + params.id, data, {
                method: "PATCH",
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": "Bearer " + token,
                },
            }).then((response) => {
                if (response.status == 200) {


                    const data = response.data
                    console.log(data)
                    const user = { id: data._id, name: data.firstName + " " + data.lastName, email: data.email, image: "", role: data.role }
                    return NextResponse.json(user, { status: 200, statusText: "Success" })
                }
                else
                    return NextResponse.json(response.data, { status: response.status, statusText: response.statusText })
            }).catch((error) => {
                console.log(error)
                return NextResponse.json(error.response.data.message, { status: 409, statusText: "Conflict" })
            })

        }

        return res
    }
    else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const token = req.cookies.get("token")?.value
    console.log(token)
    if (token) {
        // in a real world application you might read the user id from the session and then do a database request
        // to get more information on the user if needed
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'https://book-library-management.onrender.com/api/v1/readers?user=' + params.id,
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        };
        const response = await axios.request(config).then((response) => {
            if (response.status == 200) {
                const data = response.data.data.doc;
                var count = 0;
                data.forEach(element => {
                    count++
                });
                if (count == 0)
                    return NextResponse.json(null, { status: 204, statusText: "No Content" })
                else {
                    const resData = data.at(0)
                    const reader = new Reader(resData._id, resData.fullName, resData.readerType, resData.address, resData.cardCreatedAt, resData.user, resData.email, resData.dateOfBirth);
                    return NextResponse.json(reader, { status: 200, statusText: "Success" })
                }
            }

        })
            .catch((error) => {
                return NextResponse.json(error.response.data, { status: response.status, statusText: response.statusText })
            })
        return response
    } else
        return NextResponse.json(null, { status: 401, statusText: "Unauthorized" })

}
