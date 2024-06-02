import React from 'react';

import { formatPrice } from '../../../helpers/formatPrice';
import { Loader } from '../Loader/Loader';
import { useItemsStore } from '../../../store/store';
import './style.scss';

export const ItemDetails = ({item}) => {

    const { isLoading } = useItemsStore(state => state.isLoading);

    if(!item) return (<div></div>);

    const symbol = "$";
    const finalPrice = formatPrice(item?.price?.amount, symbol);
    const finalCondition = item?.condition === 'new' ? 'Nuevo' : 'Usado';

    return (

        isLoading ? (
            <Loader/>
        ) : (
            <section className="item__container">

                <div className="item__container-grid">

                    <div className='item__container-column'>
                        <div className="item__container-picture">
                            <img src={item?.pictures?.secure_url} alt={item?.title} />
                        </div>

                        <div className="item__description">
                            <h2>Descripción del producto</h2>
                            <div dangerouslySetInnerHTML={{ __html: item?.description.replace(/(\r\n|\n|\r)/gm, "<br>") }} />
                        </div>
                    </div>

                    <div className="item__container-details">
                        <div>
                            <div className="meli-conditions-and-sold-quantity">{finalCondition} - {item?.initial_quantity} disponibles</div>
                            <h1>{item?.title}</h1>
                            <div className="item__price">{finalPrice}<sup>00</sup></div>

                            <input type='button' className="item__button" value="Comprar" />
                        </div>
                    </div>
                </div>

            </section>
        )
    );
}

export default ItemDetails;