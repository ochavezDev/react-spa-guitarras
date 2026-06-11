import React from "react";

const Acerca = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
            Nuestra Historia
          </span>
          <h1 className="text-4xl font-bold font-serif text-stone-800 mt-2 mb-6">
            El Arte de Esculpir el Sonido
          </h1>
          <p className="text-stone-600 mb-4 leading-relaxed">
            Fundado en 1994, nuestro taller nació con una premisa clara: los
            grandes instrumentos no se fabrican en masa, se esculpen con
            paciencia, pasión y absoluto respeto por la madera.
          </p>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Cada guitarra y bajo que pasa por las manos de nuestros luthiers es
            tratado como una pieza única. Seleccionamos minuciosamente maderas
            tonales estacionadas por décadas para asegurar que cada nota tenga
            el alma, la resonancia y la calidez que los músicos profesionales
            buscan.
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-4 my-6 italic text-stone-700 bg-amber-100/50 py-2 pr-2 rounded-r">
            "No buscamos la perfección matemática, buscamos el carácter y el
            timbre único que despierte la inspiración del músico."
          </blockquote>
        </div>
        <div className="relative h-[450px] bg-stone-200 rounded-lg overflow-hidden shadow-xl border border-stone-200/50 flex items-center justify-center text-stone-400">
          <img
            src="https://img.freepik.com/foto-gratis/hombre-mediana-edad-su-taller-instrumentos_23-2149018600.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Taller de Luthier"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Acerca;
