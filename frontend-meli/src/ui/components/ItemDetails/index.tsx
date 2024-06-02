import React from 'react';
import { useItemsStore } from '../../../store/store';
import { formatPrice } from '../../../helpers/';
import { Loader } from '../Loader/Loader';
import { DataIsLoading, ItemElementObject } from '../../../types/item';
import './style.scss';

export const ItemDetails = ({item}: ItemElementObject) => {

    const dataIsLoading:DataIsLoading | boolean = useItemsStore(state => state.isLoading);

    const symbol = "$";
    const finalPrice = formatPrice(item?.price?.amount, symbol);
    const finalCondition = item?.condition === 'new' ?  'Nuevo' : 'Cargando...';

    return (

        dataIsLoading?.isLoading ? (
            <Loader/>
        ) : (
            <section className="item__container">

                <div className="item__container-grid">

                    <div className='item__container-column'>
                        <div className="item__container-picture">
                            {!item?.pictures?.secure_url && <Loader/> }
                            <img src={item?.pictures?.secure_url} alt={item?.title} />
                        </div>

                        <div className="item__description">
                            <h2>Descripción del producto</h2>
                            <div className="item__paragraph" dangerouslySetInnerHTML={{ __html: item?.description!.replace(/(\r\n|\n|\r)/gm, "<br>") }} />
                        </div>
                    </div>

                    <div className="item__container-details">
                        <div>
                            <div className="meli-conditions-and-sold-quantity">{finalCondition} - {item?.initial_quantity ? item?.initial_quantity : 0} disponibles</div>
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