import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Login} from "../components/login/Login";
import {WithNavBar} from "./layout/WithNavBar";
import { Inicio, Balance, CargaSaldo, EnvioDinero, Gastos, Movimientos, Error404 } from '../pages';


export const Rutas = () => {

  const status = 'validado'


  return (
  <BrowserRouter>
    <Routes>
    {
       ( status === 'validado')  
      ?
      <Route path='/' element={<WithNavBar/>}>
          <Route index element ={<Inicio/>}/>
          <Route path="Login" element={<Inicio />} />
          <Route path="Balance" element={<Balance/>} />
          <Route path="CargaSaldo" element={<CargaSaldo/>} />
          <Route path="EnvioDinero" element={<EnvioDinero/>} />
          <Route path="Gastos" element={<Gastos/>} />
          <Route path="Movimientos" element={<Movimientos/>} />
          <Route path="/*" element={ < Error404 /> } />
      </Route>
      :
      <Route path="/*" element={<Login />} />
      }
    </Routes>
    </BrowserRouter>
  );
};
