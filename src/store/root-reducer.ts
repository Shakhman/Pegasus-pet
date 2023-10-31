import { combineReducers } from 'redux';

import { NFTCardsReducer } from './nft-cards/nft-cards-reducers';

export const rootReducer = combineReducers({
  cards: NFTCardsReducer
});