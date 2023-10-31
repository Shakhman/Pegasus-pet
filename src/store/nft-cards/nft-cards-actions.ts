export const SET_NFT_CARDS = 'SET_NFT_CARDS';
export const SET_NFT_CARD_BY_ID = 'SET_NFT_CARD_BY_ID';
export const SET_NFT_CARD_FILTER = 'SET_NFT_CARD_FILTER';

export const setNFTCards = (data: any) => ({
  type: SET_NFT_CARDS,
  payload: data,
});

type SetFavoriteCardByIdPayload = {
  id: number;
  isFavorite: boolean;
};

export const setFavoriteCardById = (data: SetFavoriteCardByIdPayload) => ({
  type: SET_NFT_CARD_BY_ID,
  payload: data,
});

export const setNFTCardFilter = (payload: string) => ({
  type: SET_NFT_CARD_FILTER,
  payload,
});

export const fetchNFTCards = () => async (dispatch) => {
  fetch('http://localhost:3001/nft-cards')
    .then((data) => data.json())
    .then((data) => dispatch(setNFTCards(data)));
};
