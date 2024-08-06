"use client";

import { deleteCookie, setCookie } from "@/utils/cookies";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Home() {

  const handler =() => {

    // Lets assume this is cookies set from the server
    setCookie({
       name: "login",
       value: "1",
       hours: 24,
       path: "/"
    })
  }

  const deleteCookieHandler =( ) => {
    deleteCookie("login", "/")
  }

  const searchParams = useSearchParams()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handler}>Set Cookie</button>
      <button onClick={deleteCookieHandler}>Delete Cookie</button>
      <Link href="/login">Authenticated Route</Link>

      {searchParams.get("login") && 
      <p>User is {searchParams.get("login") ? "not " : ""}authenticated </p>
      }
    </main>
  );
}
