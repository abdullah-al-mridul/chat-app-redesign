"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "@/app/globals.module.css";
const NavLink = ({ children, href, className }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link href={href} className={`${isActive ? styles.nav__active : ""}`}>
      {children}
    </Link>
  );
};

export default NavLink;
