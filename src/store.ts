import { configureStore } from '@reduxjs/toolkit';
import { client } from './client';

import { NFTCardsReducer } from './features/NFTCards/nft-cards-slice';
// import {todoReducer} from './features/Todos/todos-slice';
// import * as api from './api';

export const store = configureStore({
  reducer: {
    nftCards: NFTCardsReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { client },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

