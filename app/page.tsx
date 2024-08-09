import { Suspense } from "react";
import { Component } from "./Component";
import { Buttons } from "./Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Buttons />
      <Suspense>
        <Component />
      </Suspense>
    </main>
  );
}
