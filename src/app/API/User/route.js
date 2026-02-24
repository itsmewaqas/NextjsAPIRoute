// import { NextResponse } from "next/server"

// export async function GET(request) {
//     return new NextResponse('hello api');
// }

import db from "@/app/API/db";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');

export async function GET() {
    try {
        const tables = db.prepare("SELECT * FROM Users").all();
        return NextResponse.json(tables, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// export async function POST(request) {
//     try {
//         const body = await request.json();
//         const { name, email, cell, password } = body;
//         if (!name || !email || !cell || !password) {
//             return NextResponse.json(
//                 { error: "all fields are required" },
//                 { status: 400 }
//             );
//         }
//         const stmt = db.prepare(`INSERT INTO Users (name, email, cell, password) VALUES (?, ?, ?, ?)`);
//         const result = stmt.run(name, email, cell, password);
//         return NextResponse.json(
//             {
//                 message: "User created successfully",
//                 id: result.lastInsertRowid,
//             },
//             { status: 201 }
//         );
//     } catch (err) {
//         return NextResponse.json(
//             { error: err.message },
//             { status: 500 }
//         );
//     }
// }


export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, cell, password } = body;
        if (!name || !email || !cell || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const stmt = db.prepare(`INSERT INTO Users (name, email, cell, password) VALUES (?, ?, ?, ?)`);
        const result = stmt.run(name, email, cell, hashedPassword);
        return NextResponse.json(
            {
                message: "User created successfully",
                id: result.lastInsertRowid,
            },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}




