"use client"

import Image from "next/image";
import Link from 'next/link'

export default function Home() {

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center bg-primary">
      <div className="text-black p-20">
        <h1 className="text-5xl font-semibold my-5">Welcome to BOSS Store</h1>
        <p className="text-2xl font-semibold mb-5">Your one-stop shop for everything you need! <br /> Shop the latest products at unbeatable prices.</p>
        <Link href="/product" className='btn text-center text-xl text-white font-semibold rounded-md duration-150'>Products ➡️</Link>
      </div>
      <Image src="/Capybara.png" width={300} height={300} alt="Capybara.png"></Image>
    </div>
  );
}
