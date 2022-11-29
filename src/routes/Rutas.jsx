import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../home/Home";
import WithNavBar from "./layout/WithNavBar";

const Rutas = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<WithNavBar/>}>
            <Route index element ={<Home/>}/>
            <Route path="login" element={<Login />} />
        </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
