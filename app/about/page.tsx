import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import Content from "./Content";

const SECRET = "supersecret"; // TODO: Закинуть в ENV

export default async function AboutPage() {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");
  const token = tokenCookie?.value ?? null;

  if (!token) {
    redirect("/login");
  }

  let email;
  try {
    const payload = jwt.verify(token, SECRET) as { email: string };
    email = payload.email;
  } catch {
    redirect("/login");
  }

  return <Content email={email} />;
}
