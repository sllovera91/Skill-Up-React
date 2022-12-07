import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { WithNavBar } from "./layout/WithNavBar";
import { Inicio, Balance, CargaSaldo, EnvioDinero, Gastos, Movimientos, Error404 } from "../pages";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Register } from "../pages/register/Register";

export const Rutas = () => {
  const { status, verifToken } = useAuth();

  useEffect(() => {
    verifToken();
  }, []);

  if (status === "validando") {
    return (
      <h1>Aguarde un momento...</h1>
    );
  }

  return (

  <BrowserRouter>
    <Routes>
    {
       (status === "validado")
      ? <Route path='/' element={<WithNavBar/>}>
          <Route index element ={<Inicio/>}/>
          <Route path="Login" element={<Inicio />} />
          <Route path="Balance" element={<Balance/>} />
          <Route path="CargaSaldo" element={<CargaSaldo/>} />
          <Route path="EnviarDinero" element={<EnvioDinero/>} />
          <Route path="Gastos" element={<Gastos/>} />
          <Route path="Movimientos" element={<Movimientos/>} />
          <Route path="/*" element={ < Error404 /> } />
          <Route path="Register" element={<Navigate to="/" />} ></Route>
      </Route>
      : (
            <>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={ <Register />} />
          </>
          )
      }
    </Routes>
    </BrowserRouter>
  );
};
export default Rutas;
