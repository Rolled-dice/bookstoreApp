import React from "react";
import banner from "./../../public/banner.png";

function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-8 my-9 p-5  ">
        <div className=" card bg-base-100 w-80   dark:bg-slate-900 dark:text-white shadow-xl hover:scale-110 duration-200 ">
          <figure className="container">
            <img src={banner} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white p-2 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
