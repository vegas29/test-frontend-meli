import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useItemsStore } from '../../../store/store';
import { Item } from '../../../types/item';
import "./style.scss";

const Breadcrumb = () => {

  const [categories, setCategories] = useState<string[]>();
  const dataItem:Item = useItemsStore(state => state.items);
  const dataCategories:string[]= useItemsStore(state => state?.categories);
  const { id } = useParams();

  useEffect( () => {
    if (id) {
      setCategories(dataCategories);
    }
  }, [dataCategories?.categories]);


  const renderCategory = (item:string, index:number, array:string[]) => {
    const isActive = index === array.length - 1;
    const isActiveClass = isActive ? 'breadcrumb-active' : '';

    return (
      <li key={index} className={isActiveClass}>
        <a href="/" onClick={e => e.preventDefault()}>
          {item}
        </a>
      </li>
    );
  };

  return (
    <section className="container__breadcrumb">
      <ol className="container__breadcrumbs-ol">
        {dataItem?.categories?.length > 0 ? dataItem?.categories?.map(renderCategory) : categories?.map(renderCategory)}
      </ol>
    </section>
  );
};

export default Breadcrumb;