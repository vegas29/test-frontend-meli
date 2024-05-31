import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../helpers/formatPrice';
import { ItemElement } from '../../../types/item';
import "./style.scss";

export const FlatListItem = ({ item }: ItemElement) => {

    const { id, price: { amount }, free_shipping, condition, title } = item;

    const url = `/items/${id}`;
    const symbol = "$";
    const priceItem = formatPrice(amount, symbol);
    const freeShippingItem = free_shipping ? 'flatlist__item-free-shipping' : 'flatlist__item-no-free-shipping';
    const conditionItem = condition === 'new' ? 'Nuevo' : 'Usado';

    return (
        <article className="flatlist__container">
            <div className="flatlist__container-grid">
                <div className="flatlist__item-picture">
                    <Link to={url}>
                        <img src={item?.picture} alt={title} width="180" height="180" />
                    </Link>
                </div>

                <div>
                    <div className="flatlist__price-wrapper">
                        <div className="flatlist__item-price">{priceItem}
                            <span className={freeShippingItem}></span>
                        </div>
                    </div>
                    <h2 className="flatlist__title">
                        <Link to={url}>{title}</Link>
                    </h2>
                </div>

                <div>
                    <div className="flatlist__item-condition">{conditionItem}</div>
                </div>
            </div>

        </article>
    )
}

export default FlatListItem;