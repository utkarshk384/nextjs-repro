"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const Component: React.FC<Props> = (props) => {
  const {} = props;

  const searchParams = useSearchParams();

  return (
    <>
      {searchParams.get("login") && (
        <p>User is {searchParams.get("login") ? "not " : ""}authenticated </p>
      )}
    </>
  );
};
