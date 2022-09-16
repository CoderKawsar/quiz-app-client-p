import React from "react";
import { Link } from "react-router-dom";

function SingleHomeItem({ title, img, classes, link }) {
  return (
    <Link
      to={`/${link}/1`}
      className={`bg-white p-8 rounded flex flex-col items-center pb-4 hover:bg-sky-100 ${classes}`}
    >
      <img className="h-24 w-24" src={img} alt="HTML5" />
      <p className="font-semibold mt-4">{title}</p>
    </Link>
  );
}

export default SingleHomeItem;
