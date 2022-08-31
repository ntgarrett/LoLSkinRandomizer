import { useEffect } from 'react';

import SmallChampionSearchResults from '../components/SmallChampionSearchResults';

const SmallChampionSearchResultsContainer = (props) => {
  const { filteredChampionList, setFilteredChampionList, setSelectedChampion, searchValue } = props;

  useEffect(() => {
    if (searchValue.length === 0) {
      setFilteredChampionList([]);
    }
  }, [searchValue, setFilteredChampionList])


  return (
    <SmallChampionSearchResults 
      filteredChampionList={filteredChampionList}
      setSelectedChampion={setSelectedChampion}
    />
  );
};

export default SmallChampionSearchResultsContainer;