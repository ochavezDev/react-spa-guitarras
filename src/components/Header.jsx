import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-amber-50/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <h1 className="text-2xl font-bold font-serif text-stone-800">
          Luthier &amp; Co.
        </h1>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/catalogo">Catalogo</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
