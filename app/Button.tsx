"use client";

import Link from "next/link";
import React from "react";
import { setCookie, deleteCookie } from "./actions";

type Props = {
  children?: React.ReactNode;
} & any;

export const Buttons: React.FC<Props> = (props) => {
  return (
    <>
      <button
        onClick={() => {
          setCookie({
            name: "login",
            value: "1",
            hours: 24,
            path: "/",
          });
        }}
      >
        Set Cookie
      </button>
      <button
        onClick={() => {
          deleteCookie("login", "/");
        }}
      >
        Delete Cookie
      </button>
      <Link href="/login">Authenticated Route</Link>
    </>
  );
};
