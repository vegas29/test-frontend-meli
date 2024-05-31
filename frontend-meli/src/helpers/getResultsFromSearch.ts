import meliApi from '../api/meliApi';

export const getResultsFromSearch = async (q: string | (string | null)[] | null) => {

    try {
        const { data } = await meliApi.get(`/items?q=${q}`); 
        return data;

    } catch (error) {
        
        console.log('error in getResultsFromSearch', error);

    }

}