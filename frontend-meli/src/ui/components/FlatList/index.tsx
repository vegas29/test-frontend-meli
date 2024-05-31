import React from 'react';
import FlatListItem from '../FlatListItem';
import { useItemsStore } from '../../../store/store';
import { ItemElement } from '../../../types/item';
import './style.scss';

export const FlatList = () => {

    const { items } = useItemsStore(state => state.items);

    const list = items?.map((item: ItemElement) => {
        return (
            items.length > 0 && (
                <div>
                    <FlatListItem key={item.id} item={item} />
                </div>
            )
        );
    });

    return (
        <section className="flatlist__results">
            <div className="flatlist__results-layout flatlist__results-container">
                {list.length > 0 ? list : <div>No hay publicaciones que coincidan con tu búsqueda.</div>}
            </div>
        </section>
    )
}

export default FlatList;