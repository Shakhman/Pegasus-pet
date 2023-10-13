import { combineReducers } from 'redux';

import { authReducer } from './auth/auth-reducers';
import { NFTCardsReducer } from './nft-cards/nft-cards-reducers';

export const rootReducer = combineReducers({
  auth: authReducer,
  cards: NFTCardsReducer
});