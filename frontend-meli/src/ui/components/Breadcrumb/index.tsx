import React from 'react';
import { useItemsStore } from '../../../store/store';
import "./style.scss";

const Breadcrumb = () => {
    
  const { categories }= useItemsStore(state => state.items);

  if (!categories || categories.length === 0) {
    return null; // No renderizar nada si no hay categorías
  }

  const renderCategory = (item, index, array) => {
    const isActive = index === array.length - 1;
    const classes = isActive ? 'breadcrumb-active' : '';

    return (
      <li key={index} className={classes}>
        <a href="/" onClick={e => e.preventDefault()}>
          {item}
        </a>
      </li>
    );
  };

  return (
    <section className="container__breadcrumb">
      <ol className="container__breadcrumbs-ol">
        {categories.map(renderCategory)}
      </ol>
    </section>
  );
};

export default Breadcrumb;