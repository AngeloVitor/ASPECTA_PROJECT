import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <strong>ASPECTA</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#" className="contrast">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="contrast">
              Preço
            </a>
          </li>
          <li>
            <a href="#" className="contrast">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
