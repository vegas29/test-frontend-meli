import React from 'react';
import { useItemsStore } from '../../../store/store';
import FlatListItem from '../FlatListItem';
import { DataIsLoading, Item, ItemElement } from '../../../types/item';
import { Loader } from '../Loader/Loader';
import './style.scss';

export const FlatList = () => {

    const dataItems:Item = useItemsStore(state => state?.items);
    const dataIsLoading:DataIsLoading | boolean = useItemsStore(state => state?.isLoading);

    const list = dataItems?.items?.map((item: ItemElement) => {
        return (
            dataItems?.items?.length > 0 && (
                <div key={item?.id}>
                    <FlatListItem item={item} />
                </div>
            )
        );
    });

    return (
        dataIsLoading?.isLoading ? (
            <Loader/>
        ) : (
            <section className="flatlist__results">
                <div className="flatlist__results-layout flatlist__results-container">
                    {list?.length > 0 ? list : <p className="flatlist__results-text">No hay publicaciones que coincidan con tu búsqueda.</p>}
                </div>
            </section>
        )
    )
}

export default FlatList;