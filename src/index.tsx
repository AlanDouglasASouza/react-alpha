import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./components/Create/Create";
import Update from "./components/Update/Update";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

root.render(<RouterProvider router={router} />);

reportWebVitals();
