import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login/Login";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<Login />);

reportWebVitals();