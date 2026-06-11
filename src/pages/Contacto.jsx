import React from "react";

const Contacto = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
          ¿Hablamos de tu próximo instrumento?
        </span>
        <h1 className="text-4xl font-bold font-serif text-stone-800 mt-2">
          Ponte en Contacto
        </h1>
        <p className="text-stone-600 mt-4">
          Ya sea para una calibración fina, una restauración vintage o para
          cotizar un instrumento Custom Shop desde cero, estamos aquí para
          escucharte.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Columna de Información (Ocupa 1 espacio) */}
        <div className="space-y-8 bg-stone-800 text-stone-300 p-8 rounded-lg shadow-lg">
          <div>
            <h3 className="text-amber-200 font-serif font-bold text-lg mb-2">
              El Taller
            </h3>
            <p className="text-sm text-stone-400">
              Calle Mayor 12, Madrid, España
            </p>
          </div>
          <div>
            <h3 className="text-amber-200 font-serif font-bold text-lg mb-2">
              Atención Directa
            </h3>
            <p className="text-sm text-stone-400">info@luthierandco.es</p>
            <p className="text-sm text-stone-400">+34 912 345 678</p>
          </div>
          <div>
            <h3 className="text-amber-200 font-serif font-bold text-lg mb-2">
              Horarios de Visita
            </h3>
            <p className="text-sm text-stone-400">
              Lunes a Viernes: 10:00 – 14:00 y 16:30 – 20:30
            </p>
            <p className="text-sm text-stone-400">
              Sábados (Cita previa): 10:00 – 14:00
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm border border-stone-200/60">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full bg-amber-50/50 border border-stone-200 rounded px-4 py-3 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-amber-50/50 border border-stone-200 rounded px-4 py-3 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Asunto
              </label>
              <select className="w-full bg-amber-50/50 border border-stone-200 rounded px-4 py-3 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors">
                <option>Consulta General</option>
                <option>Proyecto Custom Shop</option>
                <option>Taller / Reparación</option>
                <option>Tasación de Instrumento</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Tu Mensaje
              </label>
              <textarea
                rows="5"
                className="w-full bg-amber-50/50 border border-stone-200 rounded px-4 py-3 text-stone-800 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-stone-800 hover:bg-stone-700 text-amber-200 font-medium text-sm tracking-wider py-3 px-6 rounded uppercase transition-colors shadow-md"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
