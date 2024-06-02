import React, { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useItemsStore } from '../../../store/store';
import { useForm } from "../../../hooks/useForm";
import { getResultsFromSearch } from '../../../helpers/getResultsFromSearch';
import logo from "../../../assets/Logo_ML.png";
import './style.scss';


export const SearchNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { addItems, setLoading } = useItemsStore();

    const { search = '' } = queryString.parse(location.search);
    const [{ searchText }, handleInputChange] = useForm({
        searchText: search
    });


    const getItemsOnPLP = async () => {
        const result = await getResultsFromSearch(search);
        console.log('result', result)
        addItems(result);
        setLoading(true);
    }

    useEffect( () => {
        getItemsOnPLP();
        console.log('me ejcute')
    }, [search]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchText.trim() === '') {
            return;
        }

        navigate(`/items?search=${searchText}`);

    }

    return (
        <header className="search-navbar">
            <div className="search-navbar__container">
                <div className="search-navbar__grid search-navbar__flex-center">
                    <div className="search-navbar__container-logo">
                        <a className="search-navbar__logo" href="/">
                            <img src={logo} alt="Mercado Libre Logo" width="56" height="36" />
                        </a>
                    </div>
                    <div className="search-navbar__container-form">
                        <form className="search-navbar__form" onSubmit={(e) => handleSubmit(e)}>
                            <input
                                type="text"
                                name="searchText"
                                value={searchText}
                                onChange={handleInputChange}
                                autoComplete="false"
                                placeholder="Nunca dejes de buscar"
                                className="search-navbar__input"
                            />
                            <button
                                type="submit"
                                className="search-navbar__button"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SearchNavbar;