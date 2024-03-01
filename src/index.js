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
import NewProjectPage from "./components/NewProjectPage";
import NewProjectDetails from "./components/NewProjectDetails";
import AboutNewProject from "./components/AboutNewProject";
import LeftSideMenu from "./components/LeftSideMenu";
import ChangePassword from "./components/ChangePassword";
import AccountSettings from "./components/AccountSettings";
import FilterByMenu from "./components/FilterByMenu";
import HomePage from "./components/HomePage";
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
  {
    path: "/NewProject",
    element: <NewProjectPage />,
  },
  {
    path: "/NewProjectDetails",
    element: <NewProjectDetails />,
  },
  {
    path: "/AboutProjectDetails",
    element: <AboutNewProject />,
  },
  {
    path: "/LeftSideMenu",
    element: <LeftSideMenu />,
  },
  {
    path: "/ChangePassword",
    element: <ChangePassword />,
  },
  {
    path: "/AccountSettings",
    element: <AccountSettings />,
  },
  {
    path: "FilterByMenu",
    element: <FilterByMenu />,
  },
  {
    path: "Home",
    element: <HomePage/>
  }
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
