import { SET_NFT_CARD_BY_ID, SET_NFT_CARD_FILTER, SET_NFT_CARDS } from './nft-cards-actions';

export const NFTCardsReducer = (state = { cards: [], filter: '' }, action: any) => {
  switch(action.type) {
  case SET_NFT_CARDS: {
    return {
      ...state,
      cards: action.payload
    };
  }
  case SET_NFT_CARD_BY_ID: {
    const newCards = state.cards.map(item => {
      if (item.id === action.payload.id) {
        return {
          ...item as object,
          isFavorite: action.payload.isFavorite,
        };
      }

      return item;
    });

    return {
      ...state,
      cards: newCards,
    };
  }
  case SET_NFT_CARD_FILTER: {
    return {
      ...state,
      filter: action.payload,
    };
  }
  default: {
    return state;
  }
  }
};