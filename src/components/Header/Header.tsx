import React, {useState } from 'react';
import { HeaderContainer, SearchContainer, SearchInput, SearchIconContainer } from './styled-components/styled-components-header';
import { IoSearch } from "react-icons/io5";
import { useAppDispatch } from '../../hooks/hooks';
import { fetchCurrencies } from '../../store/currenciesReducer/currenciesAPI';
import { removeAllCurrencies, setSearchTerm } from '../../store/currenciesReducer/currenciesReducer';

const Header = () => {

    const dispatch = useAppDispatch();
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchTerm((e.target.value).trim()))
    };

    return (
        <HeaderContainer>
            <SearchContainer>
                <SearchInput 
                shadow={true}
                onChange={handleSearch} 
                width={'60vw'}
                placeholder='Search currency'
                ></SearchInput>
                <SearchIconContainer>
                    <IoSearch size='20px' style={{color: 'rgba(255,255,255, 0.5)'}} />
                </SearchIconContainer>
            </SearchContainer>
        </HeaderContainer>
    )
};

export default Header;

function removeAll(): any {
    throw new Error('Function not implemented.');
}
