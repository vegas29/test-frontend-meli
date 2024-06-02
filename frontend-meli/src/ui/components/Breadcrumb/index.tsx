import React from 'react';
import { useItemsStore } from '../../../store/store';
import "./style.scss";

const Breadcrumb = () => {
    
  const dataCategories= useItemsStore(state => state.items);

  if (!dataCategories?.categories || dataCategories?.categories.length === 0) {
    return null;
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
        {dataCategories?.categories.map(renderCategory)}
      </ol>
    </section>
  );
};

export default Breadcrumb;