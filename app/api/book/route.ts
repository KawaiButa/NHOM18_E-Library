import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Book from "../../../models/Book";
import BookAPI from "../../../endpoint/bookAPI";


export async function GET(req:NextRequest){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BookAPI.allEndpoint,
        headers: { 
          'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODRhNDQ5ZTVkYmE5MWRkYzA4YmJmZiIsImlhdCI6MTY4NjQxNDQxMCwiZXhwIjoxNjg3MDE5MjEwfQ.lfmcozg-LTO_HzdQqyvzblrzx6mR7oraZuQRHRNNOrs'
        }
      };
      
    const response = await axios.request(config)
    if(response.status == 200)
    {
        var result: Book[] = []
        const data = response.data.data.doc;
        data.forEach(element => {
            result.push(new Book(element._id, element.nameBook, element.author, element.photoUrls[0], element.numberOfBooks))
        });
        return NextResponse.json(result,{status: 200, statusText:"OK"});
    }
    else
        return NextResponse.json(response.data, {status: response.status, statusText: response.statusText})
}