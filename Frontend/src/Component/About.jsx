import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-2xl  container mx-auto md: px-4   flex flex-col md:flex-row ">
          <Navbar />
          <div className="  mt-32">
            <h1 className="text-4xl font-bold mb-6 flex justify-center">
              About Us
            </h1>
            <p className="mb-4 text-xl font-semibold leading-relaxed">
              Welcome to our Bookstore! We are passionate about bringing you a
              wide selection of books from all genres. Whether you are looking
              for the latest bestsellers, classic literature, or niche academic
              texts, we have something for everyone.
            </p>
            <p className="mb-4 text-xl font-semibold leading-relaxed">
              Our mission is to foster a love of reading and learning in our
              community. We believe that books have the power to transform lives
              and open minds. That's why we work hard to create a welcoming
              space where you can explore and discover new books and authors.
            </p>
            <p className="mb-4 text-xl font-semibold leading-relaxed">
              We also host regular events, including author signings, book
              clubs, and children's story time. Check out our events page for
              more information and to stay up-to-date with what's happening at
              our bookstore.
            </p>
            <p className="mb-4 text-xl font-semibold leading-relaxed">
              Thank you for choosing our bookstore. We hope you enjoy your time
              here and find exactly what you're looking for. Happy reading!
            </p>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
