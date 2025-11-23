import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST() {
  const headersList = await headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = "http";
  const baseUrl = `${protocol}://${host}`;

  const res = NextResponse.redirect(new URL("/", baseUrl));
  res.cookies.set({ name: "token", value: "", path: "/", maxAge: 0 });
  return res;
}
