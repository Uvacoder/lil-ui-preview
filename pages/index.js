import Head from "next/head";
import { ModalPreview, PanePreview } from "previews";

export default function Home() {
  return (
    <>
      <Head>
        <title>lil ui - minimalistic components for React projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen pt-20 text-center">
        <div className="mb-10">
          <div className="font-normal text-4xl flex items-center justify-center w-8 h-8 leading-none bg-gradient-to-br from-red-400 to-yellow-400 mx-auto rounded-full text-white text-center shadow-xl shadow-gray-600/20 mb-3">
            <span className="relative mt-3">*</span>
          </div>
          <h1 className="font-black text-5xl">lil ui</h1>
          <h2>A very basic set of useful React components</h2>
          <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 items-center justify-center mt-3 mb-5 text-xs font-semibold md:space-x-4 font-mono">
            <div className="bg-pink-200 text-pink-500 px-3 py-px rounded-full">
              Currently in alpha
            </div>
            <a
              className="bg-gray-200 text-gray-600 px-3 py-px rounded-full hover:underline"
              target="_blank"
              href="https://github.com/rishimohan/lil-ui"
            >
              View on Github
            </a>
            <a
              target="_blank"
              className="bg-blue-100 text-blue-500 px-3 py-px rounded-full hover:underline"
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
