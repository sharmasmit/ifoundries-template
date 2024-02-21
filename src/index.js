import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./components/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerifyEmail from "./components/VerifyEmail";
import CreateNewPassword from "./components/CreateNewPassword";
import ResetPasswordPopup from "./components/ResetPasswordPopup";
import LoginSignupPage from "./components/LoginSignupPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/VerifyEmail",
    element: <VerifyEmail />,
  },
  {
    path: "/CreateNewPassword",
    element: <CreateNewPassword />,
  },
  {
    path: "/ResetPasswordPopup",
    element: <ResetPasswordPopup />,
  },
  {
    path: "/LoginSignupPage",
    element: <LoginSignupPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
