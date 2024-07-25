import React from "react";
import Navbar from "../Component/Navbar";
import Contacts from "../Component/Contacts";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Contacts />
      </div>
    </>
  );
}

export default Contact;
