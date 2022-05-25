import { useState } from "react";
import Head from "next/head";
import { ModalPreview, PanePreview } from "previews";

export default function Home() {
  return (
    <>
      <Head>
        <title>lil ui - minimalistic components for React projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-yellow-50/50 min-h-screen pt-20 text-center">
        <div className="mb-10">
          <h1 className="font-black text-5xl">lil ui</h1>
          <h2>A very basic set of useful React components</h2>
          <div className="flex items-center justify-center mt-3 mb-5 text-sm space-x-4 font-semibold">
            <div className="bg-green-100 text-green-500 px-3 py-px rounded-full">
              Currently in alpha
            </div>
            <a
              className="bg-blue-100 text-blue-500 px-3 py-px rounded-full"
              href="https://twitter.com/thelifeofrishi"
            >
              @thelifeofrishi
            </a>
          </div>
        </div>

        <div className="space-y-10">
          <ModalPreview />
          <PanePreview />
        </div>
      </main>
    </>
  );
}
