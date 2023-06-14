import { cookies, headers } from 'next/headers';
import UserAPI from '../../../endpoint/userEndPoint';
import axios from 'axios';
import { useSession } from "next-auth/react"
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  let body = await request.json()

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: UserAPI.login,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODJlZmE1YjU1MmYxYjZhNTNjZmYwMiIsImlhdCI6MTY4NjMwMjYzMCwiZXhwIjoxNjg2OTA3NDMwfQ.8S4UCi9m6ZVgtotNOAemN4RvF2A-TZ0NGjqZAp3cuk4'
    },
    data: body
  };

  const response = await axios.request(config)
  if(response.status == 200)
  {
    return NextResponse.json( response.data, {
      status: 200,
      headers: { 'Set-Cookie': `token=${response.data.token}`},
    });
  }
}
