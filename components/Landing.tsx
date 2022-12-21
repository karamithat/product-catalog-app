import Image from "next/image";
import React from "react";
import Button from "./Button";

const Landing = () => {
  return (
    <section className="top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-semibold text-transparent">
          Largest NFT marketplace
        </span>
        <h1 className="space-y-3 text-3xl font-semibold tracking-wide lg:text-4xl xl:text-5xl">
          <span className="block">Discover,collect,and sell</span>
          <span className="block">extraordinary NFTs</span>
        </h1>
        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link link-underline link-underline-black">Explore</a>
        </div>
      </div>
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image
          className="rounded-full"
          src="/hero.jpg"
          alt="bg-image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Landing;
