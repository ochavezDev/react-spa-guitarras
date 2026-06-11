import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-5xl font-bold font-serif text-stone-800 mb-4">
        Luthier &amp; Co.
      </h1>
      <p className="text-xl text-stone-600 max-w-lg mb-8">
        La excelencia de un instrumento hecho a mano.
      </p>
      <Link
        to="/catalogo"
        className="inline-block bg-stone-800 hover:bg-stone-700 text-amber-200 hover:text-amber-100 font-medium tracking-wider text-sm py-3 px-6 rounded shadow-md transition-all duration-300 uppercase"
      >
        VER CATALOGO
      </Link>
      {/* Acá va un Link a "/catalogo" con className y texto "VER CATÁLOGO" */}
    </div>
  );
};

export default Home;
