import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchCurrencies } from "./currenciesAPI";
import { Balance, Currency } from "./types/currenciesTypes";

const currenciesAdapter = createEntityAdapter<Currency>();

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: currenciesAdapter.getInitialState({
    loading: false,
    loadingMore: false,
    error: false,
    noResults: false,
    page: 1,
    searchTerm: '',
    balances: <Balance[]>[]
  }),
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
    removeAllCurrencies: currenciesAdapter.removeAll,
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addBalance: (state, action:PayloadAction<Balance>)=>{
      state.balances.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      currenciesAdapter.addMany(state, action.payload)
      if (!action.payload[0]) {
        state.noResults = true;
      }else{
        state.noResults = false
      }
      state.loading = false;
      state.loadingMore = false;
      state.error = false;
    })
    builder.addCase(fetchCurrencies.pending, (state) => {
      if (state.ids.length > 0) {
        state.loadingMore = true;
      } else {
        state.loading = true;
      }
    })
    builder.addCase(fetchCurrencies.rejected, (state) => {
      state.loading = false;
      state.loadingMore = false;
      state.error = true;
    })
  },
});

export default currenciesSlice.reducer;
export const currenciesSelectors = currenciesAdapter.getSelectors<RootState>(
  (state) => state.currencies);
export const { setPage, removeAllCurrencies, setSearchTerm, addBalance } = currenciesSlice.actions