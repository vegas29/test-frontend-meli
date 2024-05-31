import React from 'react';
import "./style.scss";

const NoResults = () => {
    
  return (
    <section className="noResults__container">
      <h2 className="noResults__title">No hay publicaciones que coincidan con tu búsqueda.</h2>
      
      <ul className="noResults__list">
        <li className="noResults__text"><span className="noResults__bold">Revisa la ortografía</span> de la palabra.</li>
        <li className="noResults__text">Utiliza<span className="noResults__bold">palabras más genéricas</span> o menos palabras.</li>
        <li className="noResults__text"><span className="noResults__text--blue">Navega por las categorías</span> para encontrar un producto similar</li>
      </ul>
    
    </section>
  );
};

export default NoResults;