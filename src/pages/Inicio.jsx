import React from "react";
import { Title } from "../components/Title";

export const Inicio = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={"./alkemy_logo.svg"} className="App-logo" alt="logo" />
      <Title size={"h1"}>Bienvenidos a AlkyBank</Title>

      <hr/>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </header>
  </div>
  );
};
