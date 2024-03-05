import React from 'react';
import Navbargroup from './components/navbar/Navbargroup';
import CadastroUser from './components/casdastroUser/CadastroUser';
import LoginUser from './components/loginUser/LoginUser';
import HomeUser from './components/home/HomeUser';
import Sobre from './components/sobre/Sobre';
import PrecoUser from './components/preco/PrecoUser';
import ContatoUser from './components/contato/ContatoUser';
function App() {
  const { pathname } = window.location;

  const pathToComponent: {[key: string]: React.ComponentType } = {
    '/CadastroUser': CadastroUser,
    '/LoginUser': LoginUser,
    '/HomeUser': HomeUser,
    '/Sobre': Sobre,
    '/PrecoUser': PrecoUser,
    '/ContatoUser':ContatoUser
  };

  const Component = pathToComponent[pathname] || HomeUser;

  return (
    <>
      <Navbargroup />
      <Component />
    </>
  );
}

export default App;
