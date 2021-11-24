import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCurrencies } from '../../store/currenciesReducer/currenciesAPI';
import { currenciesSelectors, setPage, setSearchTerm } from '../../store/currenciesReducer/currenciesReducer';
import CurrencyItem from '../CurrencyItem/CurrencyItem';
import MainPageHead from './MainPageHead';
import { Button, ButtonContainer, Loader, LoaderContainter, LoaderText, MainPageContainer } from './styled-components/styled-componets-mainpage';
import { CSVLink } from "react-csv";
import { csvDataComp, headers } from './utils/csv';

const MainPage = () => {

    const dispatch = useAppDispatch();
    const {searchTerm, balances} = useAppSelector(state => state.currencies)
    const currencies = Object.values(useAppSelector(currenciesSelectors.selectEntities)).filter(cur => {
        const regex = new RegExp(searchTerm, 'is')
        const string = cur?.name || '';
        return regex.test(string)
    });
    const { page, loading, noResults, loadingMore, error } = useAppSelector(state => state.currencies);

    const csvData = csvDataComp(balances);
    const csvReport = {
        fileName: 'Report.csv',
        headers: headers,
        data: csvData
    }

    const showMore = () => {
        dispatch(setPage(page + 1))
    }

    useEffect(() => {
        dispatch(fetchCurrencies({ page, name: '' }))
    }, [page]);

    return (
        <>
            {error && <p style={{ color: 'white', textAlign: 'center' }}>...server error</p>}
            {loading &&
                <LoaderContainter>
                    <LoaderText>Loading...</LoaderText>
                    <Loader></Loader>
                </LoaderContainter>
            }
            <MainPageContainer loading={loading}>
                {!noResults &&
                    <CSVLink  {...csvReport}>
                        <Button>CSV Export</Button>
                    </CSVLink>}
                {noResults ? <p style={{ color: 'white', textAlign: 'center' }}>no results</p> : <MainPageHead />}
                {currencies?.map(currency =>
                    <CurrencyItem
                        id={currency?.id}
                        current_price={currency?.current_price}
                        image={currency?.image}
                        symbol={currency?.symbol}
                        total_volume={currency?.total_volume}
                        name={currency?.name}
                        price_change_24h={currency?.price_change_percentage_24h}
                    />
                )}
                <ButtonContainer>
                    {!(currencies.length < 10) && <Button onClick={showMore}>{loadingMore ? 'Loading...' : 'Show More'}</Button>}
                </ButtonContainer>
            </MainPageContainer>
        </>
    )
};


export default MainPage;