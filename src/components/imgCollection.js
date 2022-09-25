import React from "react";
import imagesJson from './img'
import ImgCard from './imgCard'

export default function ImgCollection() {
  const imgArrs = imagesJson.images;

  return (
    <div className="flex flex-wrap justify-center align-middle md:justify-evenly">
      {imgArrs.map((imgArr) => {
        return <ImgCard link={imgArr} key={imgArr.keyId}></ImgCard>;
      })}
    </div>
  );
}
