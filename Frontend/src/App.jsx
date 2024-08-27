import React from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./Component/Signup";
import Contact from "./Contact/Contact";
import About from "./Component/About";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./Component/Context/Authprovider";
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
