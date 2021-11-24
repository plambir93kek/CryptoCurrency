import React, {useState } from 'react';
import { HeaderContainer, SearchContainer, SearchInput, SearchIconContainer } from './styled-components/styled-components-header';
import { IoSearch } from "react-icons/io5";
import { useAppDispatch } from '../../hooks/hooks';
import { fetchCurrencies } from '../../store/currenciesReducer/currenciesAPI';
import { removeAllCurrencies } from '../../store/currenciesReducer/currenciesReducer';

const Header = () => {

    const dispatch = useAppDispatch();
    const [searchTerm, setSearchterm] = useState('');

    const search = () =>{
        dispatch(removeAllCurrencies())
        dispatch(fetchCurrencies({page:1, name: searchTerm}))
    };

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchterm(e.target.value);
        if(e.target.value===''){
            dispatch(removeAllCurrencies())
            dispatch(fetchCurrencies({page:1, name: ''}))
        }
    };

    const searchKey = (e:React.KeyboardEvent)=> {
        if(e.key === 'Enter'){
            search()
          }
    };

    return (
        <HeaderContainer>
            <SearchContainer>
                <SearchInput 
                shadow={true}
                onKeyPress={searchKey} 
                onChange={handleSearch} 
                width={'60vw'}
                placeholder='Search currency by ID'
                ></SearchInput>
                <SearchIconContainer onClick={search}>
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
