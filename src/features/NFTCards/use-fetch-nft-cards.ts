import { useEffect } from 'react';
import { fetchNFTCards, selectNFTCardsByFilter } from './nft-cards-slice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

export function useFetchNFTCards() {
  const filteredCards = useAppSelector(selectNFTCardsByFilter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const promise = dispatch(fetchNFTCards());
    
    return () => {
      promise.abort();
    };
  }, [dispatch]);


  return filteredCards;
}
