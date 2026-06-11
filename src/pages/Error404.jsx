import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-7xl font-bold text-amber-700 mb-4">404</h1>
      <p className="text-xl text-stone-600 mb-8">Página no encontrada</p>
      {/* Acá va Link a "/" con className "text-amber-700 underline hover:text-amber-800 text-lg" */}
    </div>
  );
};

export default Error404;
