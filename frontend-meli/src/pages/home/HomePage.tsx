import React from "react";
import Helmet from "react-helmet";
import SearchNavbar from "../../ui/components/SearchNavbar";
import StartToSearch from "../../ui/components/StartToSearch";
import logo from "../../assets/Logo_ML.png";

const HomePage = () => {
  return (
    <nav>
      <Helmet>
        <title>Mercado Libre Colombia - Envíos Gratis en el día</title>
        <meta name="description" content="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles." />
        <meta property="og:title" content="Mercado Libre Colombia" />
        <meta property="og:image" content={logo} />
        <meta property="og:description" content="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles." />
      </Helmet>
      <SearchNavbar />
      <StartToSearch />
      {/* <Breadcrumb/>
      <FlatList/> */}
    </nav>
  )
}

export default HomePage;