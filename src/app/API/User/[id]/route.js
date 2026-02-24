import db from "@/app/API/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(request, { params }) {
  try {
    const userId = await params;
    if (!userId.id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }
    const stmt = db.prepare(`SELECT id, name, email, cell, created_at FROM Users WHERE id = ?`);
    const user =  stmt.get(userId.id);
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
    try {
        const userId = await params;
        const payload = await request.json();
        const { name, email, cell, password } = payload;
        if (!userId.id || !name || !email || !cell) {
            return NextResponse.json(
                { result: "Missing required fields", success: false },
                { status: 400 }
            );
        }
        // If password is provided → hash & update it
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const stmt = db.prepare(`UPDATE Users SET name = ?, email = ?, cell = ?, password = ? WHERE id = ?`);
            stmt.run(name, email, cell, hashedPassword, userId.id);
        } else {
            // Update without touching password
            const stmt = db.prepare(`UPDATE Users SET name = ?, email = ?, cell = ? WHERE id = ?`);
            stmt.run(name, email, cell, userId.id);
        }
        return NextResponse.json(
            { result: "Record updated successfully", success: true },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: err.message, success: false },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const userId = await params;
        if (!userId.id) {
            return NextResponse.json(
                { result: "User ID is required", success: false },
                { status: 400 }
            );
        }
        const stmt = db.prepare(`DELETE FROM Users WHERE id = ?`);
        const result = stmt.run(userId.id);
        if (result.changes === 0) {
            return NextResponse.json(
                { result: "User not found", success: false },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { result: "User deleted successfully", success: true },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: err.message, success: false },
            { status: 500 }
        );
    }
}






