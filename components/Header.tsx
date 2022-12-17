import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="https://rb.gy/ops3sd"
              alt="logo"
              width={130}
              height={130}
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex ">
        <a className="headerLink link-underline link-underline-black">
          Product
        </a>
        <a className="headerLink link-underline link-underline-black">About</a>
        <a className="headerLink link-underline link-underline-black">
          Contact
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <AiOutlineHeart className="headerIcon" />
        <Link href="/login">
          <AiOutlineUser className="headerIcon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
