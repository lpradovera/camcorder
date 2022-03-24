import React from "react";
import { GetStartedButton } from "./components/GetStartedButton/GetStartedButton";

export const Home = () => {
  return (
    <>
      <div className="max-w-7xl h-screen mx-auto py-6 px-4 sm:px-6 md:pt-20 lg:pt-28 lg:px-8 flex flex-col items-center">
        <h1 className="text-3xl pt-11 text-center font-bold text-silver-100 font-extrabold">
          Your online recording studio
        </h1>
        <p className="mt-4 pt-11 pb-11 text-center text-silver-100 font-medium">
          The easiest way to record podcasts and videos in studio quality from
          anywhere. All from the browser.
        </p>
        <GetStartedButton />
      </div>
    </>
  );
};
