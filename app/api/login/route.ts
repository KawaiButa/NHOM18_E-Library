import { cookies, headers } from 'next/headers';
import UserAPI from '../../../endpoint/userEndPoint';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let body = await request.json()

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: UserAPI.login,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body
  };

  const response = await axios.request(config).then((response) => {
    if (response.status == 200) {
      return NextResponse.json(response.data, {
        status: 200,
        headers: { 'Set-Cookie': `token=${response.data.token}` },
      });
    }

  }).catch((error) =>{ console.log(error); return NextResponse.json(error.response.data.message, { status: error.response.status, statusText: error.response.statusText })})
  return response;
}
