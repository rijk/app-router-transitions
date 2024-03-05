"use client";

import NextLink from "next/link";
import { ComponentProps } from "react";
import { useNavigationTransition } from "./page-transitions/context";

type Props = ComponentProps<typeof NextLink>;

const Link = (props: Props) => {
  const { navigate } = useNavigationTransition();
  return (
    <NextLink
      {...props}
      onClick={(e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href) navigate(href);
      }}
    />
  );
};

export default Link;
