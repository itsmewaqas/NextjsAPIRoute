import { NextResponse } from "next/server";
import { dataList } from "../data";

export function GET() {
    const data = dataList;
    return NextResponse.json(data, { status: 200 })
}

export async function POST(req) {
    try {
        const payload = await req.json();
        console.log(payload);
        const { name, age, email, cell } = payload;
        if (!name || !age || !email || !cell ){
            return NextResponse.json(
                { result: 'required field not found', success: false },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { result: 'new user created', success: true },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { result: 'Invalid JSON body', success: false },
            { status: 500 }
        );
    }
}








