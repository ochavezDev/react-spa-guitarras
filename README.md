# 🎸 Luthier SPA - Aprendiendo React Router DOM

¡Bienvenido al repositorio de **Luthier & Co.**! Este proyecto es una aplicación web de página única (SPA) desarrollada con **React** y **Vite**, estilizada con **Tailwind CSS**, cuyo objetivo principal es dominar el enrutamiento del lado del cliente mediante **React Router DOM**.

La aplicación emula una tienda de guitarras de boutique y un taller de luthier, sirviendo como el entorno perfecto para entender el ciclo de vida de las rutas, parámetros dinámicos y diseños anidados.

---

## 🎓 Conceptos de React Router DOM Implementados

A lo largo del desarrollo de este proyecto se han aplicado y consolidado los siguientes pilares de enrutamiento:

### 1. 🔀 Rutas Anidadas y Diseños Globales (`Layout` & `Outlet`)
En lugar de repetir el `<Header />` y el `<Footer />` en cada página individual, implementamos un diseño base unificado.
* **`Layout.jsx`**: Actúa como la estructura maestra de la aplicación.
* **`<Outlet />`**: Funciona como un marcador de posición dinámico. React Router inyectará el componente de la ruta activa (como `Home` o `Catalogo`) exactamente en este espacio, manteniendo el Header y Footer fijos sin renderizados innecesarios.

### 2. 🗺️ Definición de Rutas (`Routes` & `Route`)
La configuración central de la aplicación mapea las URLs del navegador con sus respectivos componentes de vista:
* Las rutas estáticas conectan `/`, `/catalogo`, `/contacto` y `/acerca`.
* Se utiliza un comodín `path="*"` vinculado al componente `Error404.jsx` para capturar cualquier ruta inexistente y mejorar la experiencia de usuario.

### 3. 🔗 Navegación sin Recarga (`Link`)
En componentes como `Header.jsx`, `Home.jsx` y `GuitarCard.jsx`, se reemplazaron las etiquetas tradicionales `<a>` por `<Link to="...">`. Esto intercepta el clic del navegador, evitando que la página se recargue por completo y logrando una transición instantánea típica de una SPA nativa.

### 4. 🏷️ Rutas Dinámicas y Lectura de Parámetros (`useParams`)
Para la vista detallada de cada instrumento:
* En `GuitarCard.jsx` creamos el enlace dinámico apuntando al ID único del producto:  
  ```jsx
  <Link to={`/producto/${guitarra.id}`}>
