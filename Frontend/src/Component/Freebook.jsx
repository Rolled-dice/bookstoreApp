import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
// import { useSearchParams } from "react-router-dom";
function Freebook() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get("http://localhost:4001/book");
      console.log(res.data);

      setBook(res.data);
    };

    getBook();
  }, []);

  const filterData = book.filter((data) => data.category === "free");
  // console.log(filterdata);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl mt-5 container mx-auto md: px-4 ">
        <h1 className=" font-bold text-xl">Free Offered Books</h1>
        <p className="text-xl  mt-3">
          Free books open doors to knowledge and stories without cost, offering
          everyone access to diverse literature and learning opportunities. They
          promote a love for reading, support lifelong learning, and foster a
          culture of accessibility and sharing in the literary community.
        </p>

        <div className="slider-container">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
