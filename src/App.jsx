import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Error404 from "./pages/Error404";
import Producto from "./pages/Producto";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/acerca" element={<Acerca/>} />
        <Route path="/catalogo" element={<Catalogo/>} />
        <Route path="/producto/:id" element={<Producto/>} />
        <Route path="*" element={<Error404/>} />
      </Route>
    </Routes>
  );
};

export default App;
