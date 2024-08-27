import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Authprovider from "./Component/Context/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Authprovider>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </Authprovider>
  </BrowserRouter>

  // </React.StrictMode>,
);
