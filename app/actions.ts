"use server";
import { cookies } from "next/headers";

export type CookieType = {
  name: string;
  value: string;
} & CookieOpts;

type CookieOpts = {
  hours?: number;
  path?: string;
};

export const setCookie = async (cookie: CookieType) => {
  const { name, value, hours = 24, path = "/" } = cookie;

  const c = cookies();

  const maxAge = hours * 60 * 60;

  c.set(name, value, {
    path,
    maxAge,
  });
};

export const getCookie = async (name: string) => {
  const c = cookies();

  return c.get(name);
};

export const deleteCookie = async (name: string, path?: string) => {
  const c = cookies();
  c.delete(name);
};
