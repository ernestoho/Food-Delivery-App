import React from "react";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-cols justify-center items-center min-h-screen">
        <h1 className="text-black text-md">
          Hello World!
        </h1>
      </div>
    </div>
  )
}
