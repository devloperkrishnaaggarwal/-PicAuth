import React from "react";
import { useNavigate as navigateMe } from "react-router-dom";

export default function ImgCard(props) {
  const navigate = navigateMe();
  function imgBlogFunc() {
    navigate("/imgBlog", { state: { img: props.link } });
  }

  return (
    <img
      src={props.link.url}
      key={props.link.url}
      className="imgCards"
      onClick={imgBlogFunc}
      alt=""
    />
  );
}
