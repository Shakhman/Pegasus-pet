import { createSlice, createAsyncThunk, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '@/store';
import { AxiosInstance } from 'axios';

export type NFTCard = {
  id: number;
  isFavorite: boolean;
  title: string,
  author: string,
  bid: number,
  img: string,
  tags: string[]
  users?: string[],
}

type NFTCardsState = {
  cards: NFTCard[],
  filter: 'art' | 'music' | 'sport' | '',
  state: 'idle' | 'loading',
  error: unknown | null,
}

const initialState: NFTCardsState = {
  cards: [],
  filter: '',
  state: 'idle',
  error: null,
}; 


export const fetchNFTCards = createAsyncThunk<
  NFTCard[],
  void,
  {
    dispatch: AppDispatch,
    state: RootState,
    extra: {
      client: AxiosInstance
    }
  }>(
    '@@nft/fetch-nft-cards',
    async (_, {
      rejectWithValue, extra: { client }
    }) => {
      try {
        return client.get('/nft-cards').then(data => data.data);
      } catch(err) {
        return rejectWithValue('Failed to fetch all todos.');
      }
    },
    {
      condition: (_, { getState }) => {
        const { state } = getState().nftCards;
  
        if (state === 'loading') {
          return false;
        }
      }
    }
  );


export const setNFTCardIsFavorite = createAsyncThunk<
  NFTCard,
  {
    id: NFTCard['id'],
    isFavorite: NFTCard['isFavorite']
  },
  {
    dispatch: AppDispatch,
    state: RootState,
    extra: {
      client: AxiosInstance
    }
  }>(
    '@@nft/set-nft-cards-is-favorite',
    async ({ id, isFavorite }, {
      rejectWithValue, extra: { client }
    }) => {
      try {
        return client.patch('/nft-cards/' + id, {
          isFavorite,
        });
      } catch(err) {
        console.log(err);
        return rejectWithValue('Failed to fetch all todos.');
      }
    },
    {
      condition: (_, { getState }) => {
        const { state } = getState().nftCards;

        console.log(state);
    
        if (state === 'loading') {
          return false;
        }
      }
    }
  );
  

const NFTCardsSlice = createSlice({
  name: '@@/nft-cards',
  initialState,
  reducers: {
    setNFTFilter(state, action: PayloadAction<NFTCardsState['filter']>) {
      state.filter = action.payload;
    },
    clearNFTFilter(state) {
      state.filter = '';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNFTCards.pending, (state) => {
        state.state = 'loading';
        state.error = null;
      })
      .addCase(fetchNFTCards.rejected, (state, action) => {
        state.state = 'idle',
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchNFTCards.fulfilled, (state, action) => {
        state.state = 'idle',
        state.cards = action.payload;
      })
      .addCase(setNFTCardIsFavorite.pending, (state) => {
        state.state = 'loading';
        state.error = null;
      })
      .addCase(setNFTCardIsFavorite.rejected, (state, action) => {
        state.state = 'idle';
        state.error = action.payload || action.error.message;
      })
      .addCase(setNFTCardIsFavorite.fulfilled, (state) => {
        state.state = 'idle';
      });
  },
});

export const NFTCardsReducer = NFTCardsSlice.reducer;

export const { setNFTFilter, clearNFTFilter } = NFTCardsSlice.actions;

export const selectNFTCards = (state: RootState) => state.nftCards.cards;

export const selectNFTCardFilter = (state: RootState) => state.nftCards.filter;

export const selectNFTCardsByFilter = createSelector([selectNFTCards, selectNFTCardFilter],
  (cards, filter) => {
    if (!filter) {
      return cards;
    }

    return cards.filter(card => {  
      return card.tags.includes(filter);
    });
  }
);

