import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../pages/home/HomePage";
import { AboutPage } from "../pages/about/AboutPage";
import { ContactPage } from "../pages/contact/ContactPage";
import { LoginPage } from "../pages/login/LoginPage";
import { PricePage } from "../pages/price/PricePage";
import { RegisterPage } from "../pages/register/RegisterPage";

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
