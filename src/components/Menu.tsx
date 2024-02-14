"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const navItems = [
  {
    id: 1,
    title: "HomePage",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Working Hours",
    url: "/",
  },
  {
    id: 4,
    title: "Contacts",
    url: "/",
  },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false; //temprary
  return (
    <>
      <div>
        {!open ? (
          <Image
            src="/open.png"
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src="/close.png"
            alt=""
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {open && (
        <div
          className="bg-red-500 absolute top-24 left-0 w-full h-[calc(100vh-6rem)] text-white
      flex flex-col items-center justify-center gap-8 text-3xl z-10     "
        >
          {navItems.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Order
            </Link>
          )}
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
