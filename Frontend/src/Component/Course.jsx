import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstoreapp-backend-2dnp.onrender.com/book");
        console.log(res.data);

        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBook();
  }, []);
  // console.log(list);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md: px-4   flex flex-col md:flex-row">
        <div className="mt-32 justify-center items-center  text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            {" "}
            We're delighted to have you{" "}
            <span className="text-pink-500">Here !:)</span>{" "}
          </h1>
          <p className="mt-4 font-semibold">
            Unlock exclusive knowledge and elevate your skills with our premium
            courses – success is just a click away! Invest in yourself today and
            transform your future with expert-led content, hands-on learning,
            and unparalleled support. Join our community of achievers and start
            your journey to mastery now
          </p>
          <Link to="/">
            <button className="mt-6 rounded-md bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
          <div className="mt-12  grid grid-cols-1 md:grid-cols-4  ">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
