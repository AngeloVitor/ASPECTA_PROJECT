import { Outlet } from "react-router-dom";
import { Navbargroup } from "./components/navbar/Navbargroup";
import "./styles/Global.css"

export const App = () => {
  return (
    <>
      <Navbargroup />
      <Outlet />
    </>
  );
};
