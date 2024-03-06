import { Outlet } from "react-router-dom";
import { Navbargroup } from "./components/navbar/Navbargroup";

export const App = () => {
  return (
    <>
      <Navbargroup />
      <Outlet />
    </>
  );
};
