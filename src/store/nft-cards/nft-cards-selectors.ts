export const getNFTCards = (state: any) => state.cards.cards;

export const getSelectedFilter = (state: any) => state.cards.filter;

export const getFilteredNFTCards = (state: any) => state.cards.cards.filter(card => {
  const { filter = '' } = state.cards;

  if (!filter) {
    return true;
  }
    
  return card.tags.includes(state.cards.filter);
});