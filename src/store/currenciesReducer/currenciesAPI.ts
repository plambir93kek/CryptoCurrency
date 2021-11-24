import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Currency } from "./types/currenciesTypes";

const url = 'https://api.coingecko.com/api/v3/coins/markets'

export const fetchCurrencies = createAsyncThunk<
   Currency[],
   {page: number, name:string}
>(
    'currencies/fetchCurrencies',
    async ({page, name}) => {
        const response = await axios.get<Currency[]>(url, {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 10,
                sparkline: false,
                page: page,
                ids: 'bitcoin, bitcoin-cash, ethereum, dogecoin, litecoin, zcash, dash, bitcoin-sv, ecash, groestlcoin'
            }
        })
        return response.data;
    }
)