import Link from "next/link";
import { cookies } from "next/headers";
import LangSwitcherClient from "./lang-switcher-client";
import jwt from "jsonwebtoken";
import { Name, Logout, Login, Home, About } from "./translations";

const SECRET = "supersecret"; // TODO: Закинуть в ENV

export default async function Header() {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");
  const token = tokenCookie?.value ?? null;

  let email: string | null = null;
  if (token) {
    try {
      const payload = jwt.verify(token, SECRET) as { email: string };
      email = payload.email;
    } catch {
      email = null;
    }
  }

  return (
    <header className="flex flex-col sm:flex-row justify-between p-4 border-b border-gray-300 gap-4 sm:gap-0">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
        <Link href="/" className="flex items-center h-full">
          <Name />
        </Link>

        <div className="flex gap-4 flex-wrap sm:flex-nowrap">
          <Link href="/" className="flex items-center h-full">
            <button className="py-1 cursor-pointer">
              <Home />
            </button>
          </Link>

          {email && (
            <Link href="/about" className="flex items-center h-full">
              <button className="py-1 cursor-pointer">
                <About />
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12">
        <LangSwitcherClient />

        {email ? (
          <form
            action="/api/logout"
            method="POST"
            className="flex items-center gap-2"
          >
            <span>{email}</span>
            <button type="submit" className="px-3 py-1 cursor-pointer">
              <Logout />
            </button>
          </form>
        ) : (
          <Link href="/login">
            <button className="px-3 py-1 cursor-pointer">
              <Login />
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
