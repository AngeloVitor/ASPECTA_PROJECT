import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";
import { PricePage } from "../pages/PricePage";
import { RegisterPage } from "../pages/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home/",
        element: <HomePage />,
      },
      {
        path: "about/",
        element: <AboutPage />,
      },
      {
        path: "contact/",
        element: <ContactPage />,
      },
      {
        path: "login/",
        element: <LoginPage />,
      },
      {
        path: "price/",
        element: <PricePage />,
      },
    ],
  },
  {
    path: "accounts/",
    children: [
      {
        path: "login/",
        element: <LoginPage />,
      },
      {
        path: "register/",
        element: <RegisterPage />,
      },
    ],
  },
]);
