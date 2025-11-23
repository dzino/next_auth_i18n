import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { headers } from "next/headers";

const SECRET = "supersecret"; // TODO: Закинуть в ENV
const EMAIL = "test@email.com";
const PASSWORD = "123456";

export async function POST(req: Request) {
  const body = await req.formData();
  const email = body.get("email")?.toString();
  const password = body.get("password")?.toString();

  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = "http";
  const baseUrl = `${protocol}://${host}`;

  if (email !== EMAIL || password !== PASSWORD) {
    return NextResponse.redirect(new URL("/login?error=1", baseUrl));
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1d" });

  const res = NextResponse.redirect(new URL("/", baseUrl));
  res.cookies.set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 86400,
  });

  return res;
}
