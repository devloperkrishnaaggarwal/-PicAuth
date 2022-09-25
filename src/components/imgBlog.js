import React from "react";
import { useLocation as myLocation } from "react-router-dom";

export default function ImgBlog() {
  const location = myLocation();
  document.title = "PicAuth | Authors Page";

  return (
    <>
      <div className="flex justify-center align-middle h-screen">
        <div className="max-w-sm bg-white rounded-2xl border m-10 border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-2xl" src={location.state.img.url} alt="" />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              This Image Author is{" "}
              <span className="bg-amber-400">{`${location.state.img.author} `}</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
