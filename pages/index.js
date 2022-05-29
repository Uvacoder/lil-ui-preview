import Head from "next/head";
import { ModalPreview, PanePreview, ButtonPreview } from "previews";

export default function Home() {
  return (
    <>
      <main className="bg-gray-50 min-h-screen pt-20 text-center">
        <div className="mb-10">
          <div className="font-normal text-4xl flex items-center justify-center w-8 h-8 leading-none bg-gradient-to-br from-red-400 to-yellow-400 mx-auto rounded-full text-white text-center shadow-lg shadow-gray-400/10 mb-3">
            <span className="relative mt-3">*</span>
          </div>
          <h1 className="font-black text-5xl">lil ui</h1>
          <h2>Minimalistic SIY(style it yourself) UI components for your React project</h2>
          <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 items-center justify-center mt-3 mb-5 text-xs font-semibold md:space-x-4">
            <div className="bg-pink-200 text-pink-500 px-3 py-[3px] rounded-full">
              Currently in Beta
            </div>
            <a
              className="bg-gray-200 text-gray-600 px-3 py-[3px] rounded-full hover:underline"
              target="_blank"
              href="https://github.com/rishimohan/lil-ui"
            >
              View on Github
            </a>
            <a
              target="_blank"
              className="bg-blue-100 text-blue-500 px-3 py-[3px] rounded-full hover:underline"
              href="https://twitter.com/thelifeofrishi"
            >
              By @thelifeofrishi
            </a>
          </div>
        </div>

        <div className="space-y-10 pb-48">
          <ModalPreview />
          <PanePreview />
          <ButtonPreview />
        </div>
      </main>
    </>
  );
}
