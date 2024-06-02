import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import SearchNavbar from '../../ui/components/SearchNavbar';
import Breadcrumb from '../../ui/components/Breadcrumb';
import FlatList from '../../ui/components/FlatList';

const PLPPage = () => {

  const location = useLocation();
  const { search = '' } = queryString.parse(location.search);

  return (
    <div>
      <Helmet>
        <title> { search } | Mercado Libre</title>
        <meta name="description" content={`Envíos Gratis en el día ✓ Compre ${search} en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.`} />
      </Helmet>
      <SearchNavbar />
      <Breadcrumb/>
      <FlatList/>
    </div>
  )
}

export default PLPPage;
