import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import SearchNavbar from '../../ui/components/SearchNavbar';
import Breadcrumb from '../../ui/components/Breadcrumb';
import ItemDetails from '../../ui/components/ItemDetails';
import { useParams } from 'react-router-dom';
import { getItemById } from '../../helpers/getItemById';


const PDPPage = () => {

  const { id } = useParams();
  const [item, setItem] = useState();
  

  const getItemOnPDP = async (id:string) => {
    const item =  await getItemById(id);
    setItem(item);
  }

  useEffect( () => {
    getItemOnPDP(id!);
  }, [id]);


  return (
    <div>
      <Helmet>
          {/* {data && <title>{data.title} | Mercado libre</title>}
          {data && data.description && (<meta name="description" content={data.description.substr(0, 200)} />)}

          <meta property="og:type" content="meli-uy:product" />
          {data && data.title && (<meta property="og:title" content={`${data.title} | Mercado libre`} />)}
          {data && data.description && (<meta property="og:description" content={data.description.substr(0, 200)} />)}
          {data && data.picture && (<meta property="og:image" content={data.picture} />)}
          {data && data.id && (<meta property="og:url" content={location.href} />)}
          
          {data && data.title && (<meta property="twitter:title" content={`${data.title} | Mercado libre`} />)}
          {data && data.description && (<meta property="twitter:description" content={data.description.substr(0, 200)} />)}
          {data && data.picture && (<meta property="twitter:image" content={data.picture} />)}
          <meta property="twitter:card" content="summary_large_image"/> */}
      </Helmet>
      <SearchNavbar />
      <Breadcrumb/>
      <ItemDetails item={item}/>
    </div>
  )
}

export default PDPPage;
