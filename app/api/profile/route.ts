import React from 'react'
import { User } from '../../../models/user'
import axios, { Axios } from 'axios'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest) {
    const token = req.cookies.get("token")
    console.log(token)
    if (token) {
        // in a real world application you might read the user id from the session and then do a database request
        // to get more information on the user if needed
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'https://book-library-management.onrender.com/api/v1/users/me',
            headers: {
                'Authorization': 'Bearer ' + token.value,
                'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlY2ZmYjk4NzcxYThjZTIwZDI1MyIsImlhdCI6MTY4NjMzMDgwOCwiZXhwIjoxNjg2OTM1NjA4fQ.3-TMbdMozofCk39UA_GGZi28835rvdL9WQ6xoyjDjGk'
            },
        };
        const response = await axios.request(config)
        if (response.status == 200) {
            const resData = response.data.data.doc;
            const user = { id: resData._id, name: resData.firstName + " " + resData.lastName, email: resData.email, image: "", role: resData.role } as User
            return NextResponse.json(user)
        }
        else
            return new NextResponse(null, { status: response.status, statusText: response.statusText })
    } else
        return new NextResponse(null, { status: 401, statusText: "Unauthorized" })

}
