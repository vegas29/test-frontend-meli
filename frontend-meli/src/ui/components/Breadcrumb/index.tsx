import React from 'react';
import { useItemsStore } from '../../../store/store';
import { Item } from '../../../types/item';
import "./style.scss";

const Breadcrumb = () => {
    
  const dataCategories:Item = useItemsStore(state => state.items);

  const renderCategory = (item:string, index:number, array:string[]) => {
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
        {dataCategories?.categories?.map(renderCategory)}
      </ol>
    </section>
  );
};

export default Breadcrumb;