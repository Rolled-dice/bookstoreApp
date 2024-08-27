import React from "react";
import banner from "../../public/banner.png";
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md: px-4   flex flex-col md:flex-row ">
        <div className=" order-2 md:order-1 w-full  md:w-1/2 md:mt-32">
          <div className=" space-y-12">
            <h1 className="text-4xl font-bold">
              {" "}
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everday !!!</span>
            </h1>
            <p className="text-xl text-justify">
              Welcome to our bookstore, where each book opens a door to endless
              possibilities. Explore our curated collection ranging from
              classics to bestsellers, offering adventure, wisdom, and moments
              of pure joy. Find your next favorite read and let the journey
              begin!
            </p>
          </div>
          <input
            type="text"
            placeholder="Enter your email to login"
            className="input input-bordered w-full  mt-5 md:mt-12"
          />

          <button className="btn btn-secondary mt-5"> Get Started</button>
        </div>
        <div className=" order-1 md:order-2w-full md:w-1/2">
          <img src={banner} className="   md:pt-20 w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
