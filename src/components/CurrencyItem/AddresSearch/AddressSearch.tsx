import React, { useState } from "react";
import { IoSearch } from "react-icons/io5"
import { SearchContainer, SearchIconContainer, SearchInput } from "../../Header/styled-components/styled-components-header"
import { CurrencyItemText } from "../styled-components/styled-components-curItem";
import { AddressSearchContainer, BalanceContainer } from "./styled-components/styled-components-address";
import { fetchAddress } from "./utils/fetchAddress";
import numeral from 'numeral';
import { useAppDispatch } from "../../../hooks/hooks";
import { addBalance } from "../../../store/currenciesReducer/currenciesReducer";

interface AddressSearchProps {
    id: string;
    symbol?: string;
}

const AddressSearch: React.FC<AddressSearchProps> = ({ id, symbol }) => {

    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
  
    const searchAddress = async () => {
        const balanceRes = await fetchAddress(id, address, setLoading);
        if(balanceRes){
            dispatch(addBalance({address, balance: balanceRes, id}))
            setBalance(balanceRes)
        }else{
            setBalance(0);
        }
    };
    const searchAddressKey = (e:React.KeyboardEvent) => {
       if(e.key === 'Enter'){
        searchAddress()
       }
    };

    return (
        <AddressSearchContainer>
            <SearchContainer>
                <SearchInput 
                onKeyPress={searchAddressKey}
                onChange={(e) => { setAddress(e.target.value) }} 
                width={'400px'}
                placeholder='Wallet address'
                ></SearchInput>
                <SearchIconContainer onClick={searchAddress}>
                    <IoSearch size='20px' style={{ color: 'rgba(255,255,255, 0.5)' }} />
                </SearchIconContainer>
            </SearchContainer>
            {loading && <p style={{textAlign:'center', color:'white'}}>...loading</p>}
            {balance !== null &&
            <BalanceContainer>
                {balance!==0 && !loading ?
                <div>
                <CurrencyItemText>Balance:</CurrencyItemText>
                <CurrencyItemText>{numeral(balance).format('0,0.0000')} {symbol}</CurrencyItemText>
                </div>
                :
                <CurrencyItemText>{loading? '' : 'no results'}</CurrencyItemText>
               }
                
            </BalanceContainer>}
        </AddressSearchContainer>
    )
};

export default AddressSearch;