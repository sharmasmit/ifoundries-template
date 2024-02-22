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
import LoginPage from "./components/LoginPage";
import ForgotPassword from "./components/ForgotPassword";
import SignupPage from "./components/SignupPage";
import DeleteYourProjects from "./components/DeleteYourProjects";
import LogOutPopup from "./components/LogOutPopup";

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
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/SignupPage",
    element: <SignupPage />,
  },
  {
    path: "/DeleteYourProjects",
    element: <DeleteYourProjects />,
  },
  {
    path: "/LogOutPopup",
    element: <LogOutPopup />,
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
