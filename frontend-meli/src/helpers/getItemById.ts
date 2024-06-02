import meliApi from '../api/meliApi';

export const getItemById = async (id: string | undefined) => {

    try {
        const { data } = await meliApi.get(`/items/${id}`);
        return data;

    } catch (error) {
        console.log('error in getItemById', error);
    }

}