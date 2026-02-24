import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken";
import db from "@/app/API/db";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    const stmt = db.prepare(`SELECT id, name, email, cell, password, created_at FROM Users WHERE email = ?`);
    const user = stmt.get(email.trim());
    if (!user || !user.password) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
    if (!process.env.JWT_SECRET) {
      return NextResponse.json(
        { error: "JWT secret not configured" },
        { status: 500 }
      );
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    return NextResponse.json(
      {
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          Cell:user.cell,
          created_at:user.created_at,
        },
        success: true
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
