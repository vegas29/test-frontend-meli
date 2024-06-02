import React from 'react';
import FlatListItem from '../FlatListItem';
import { useItemsStore } from '../../../store/store';
import { ItemElement } from '../../../types/item';
import './style.scss';
import { Loader } from '../Loader/Loader';

export const FlatList = () => {

    const dataItems = useItemsStore(state => state?.items);
    const dataIsLoading= useItemsStore(state => state?.isLoading);

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