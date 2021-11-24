import React, { useState } from 'react';
import { IoCaretDownOutline} from "react-icons/io5";
import { ArrowIcon, CurrencyItemContainer, CurrencyItemIcon, CurrencyItemInfo, CurrencyItemText, NameContainer, Symbol } from './styled-components/styled-components-curItem';
import { CSSTransition } from 'react-transition-group';
import AddressSearch from './AddresSearch/AddressSearch';
import numeral from 'numeral';

interface CurrencyItemProps {
    name?:string;
    id?: string,
    symbol?: string;
    image?: string;
    current_price?: number;
    total_volume?: number;
    price_change_24h?: number;
}

const CurrencyItem:React.FC<CurrencyItemProps> = ({name, id, current_price, symbol, image, total_volume, price_change_24h}) => {

    const [showAddress, setShowAddress] = useState(false);

    return (
        <CSSTransition timeout={500} in={showAddress}>
            <CurrencyItemContainer >
                <CurrencyItemInfo onClick={() => { setShowAddress(!showAddress) }}>
                    <CurrencyItemIcon src={image} />
                    <NameContainer>
                        <CurrencyItemText>{name}</CurrencyItemText>
                        <Symbol>{symbol?.toUpperCase()}</Symbol>
                    </NameContainer>
                    <CurrencyItemText>${numeral(current_price).format('0,0.0')}</CurrencyItemText>
                    {price_change_24h && price_change_24h > 0  ? 
                    <CurrencyItemText>{numeral(price_change_24h).format('0,0.0')}%</CurrencyItemText>
                    :
                    <CurrencyItemText color='red'>{numeral(price_change_24h).format('0,0.0')}%</CurrencyItemText>
                     }
                    <CurrencyItemText>{numeral(total_volume).format('0.0a').toLocaleUpperCase()}</CurrencyItemText>
                    <CSSTransition timeout={200} in={showAddress}>
                        <ArrowIcon>
                            <IoCaretDownOutline style={{ color: 'rgba(255,255,255, 0.5)' }} />
                        </ArrowIcon>
                    </CSSTransition>
                </CurrencyItemInfo>
                {showAddress &&<AddressSearch id={id || '1'} symbol={symbol}></AddressSearch>}
            </CurrencyItemContainer>
        </CSSTransition>
    )
};

export default CurrencyItem;