import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SearchNavbar from '../../ui/components/SearchNavbar';
import Breadcrumb from '../../ui/components/Breadcrumb';
import ItemDetails from '../../ui/components/ItemDetails';
import { getItemById } from '../../helpers/';
import { ItemElement } from '../../types/item';

const PDPPage = () => {

  const { id } = useParams();
  const [item, setItem] = useState<ItemElement>();

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
        {item && <title>{item?.title} | Mercado Libre</title>}
        {item && item?.description && (<meta name="description" content={item?.description.substring(0, 200)} />)}

        <meta property="og:type" content="meli-co:product" />
        {item && item?.title && (<meta property="og:title" content={`${item?.title} | Mercado Libre`} />)}
        {item && item?.description && (<meta property="og:description" content={item?.description.substring(0, 200)} />)}
        {item && item?.pictures.secure_url && (<meta property="og:image" content={item?.pictures.secure_url} />)}
        {item && item?.id && (<meta property="og:url" content={location.href} />)}
        
        {item && item?.title && (<meta property="twitter:title" content={`${item?.title} | Mercado Libre`} />)}
        {item && item?.description && (<meta property="twitter:description" content={item?.description.substring(0, 200)} />)}
        {item && item?.pictures.secure_url && (<meta property="twitter:image" content={item?.pictures.secure_url} />)}
        <meta property="twitter:card" content="summary_large_image"/>
      </Helmet>
      <SearchNavbar />
      <Breadcrumb/>
      <ItemDetails item={item!}/>
    </div>
  )
}

export default PDPPage;
