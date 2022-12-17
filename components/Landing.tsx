import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-2xl font-semibold text-transparent">
          Largest NFT marketplace
        </span>
        <h1 className="space-y-3 text-3xl font-semibold tracking-wide lg:text-4xl xl:text-5xl">
          <span className="block">Discover,collect,and sell</span>
          <span className="block">extraordinary NFTs</span>
        </h1>
        <div>
            <a className="link link-underline link-underline-black">Explore</a>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image src="/bg-image.jpg" alt="bg-image" width={450} height={450}/>
      </div>
    </section>
  );
};

export default Landing;
