import { useEffect } from 'react';

import SmallChampionSearchResults from '../components/SmallChampionSearchResults';

const SmallChampionSearchResultsContainer = (props) => {

  useEffect(() => {
    if (props.searchValue.length === 0) {
      props.setFilteredChampionList([]);
    }
  }, [props.searchValue, props.setFilteredChampionList])


  return (
    <SmallChampionSearchResults 
      filteredChampionList={props.filteredChampionList}
      setSelectedChampion={props.setSelectedChampion}
    />
  );
};

export default SmallChampionSearchResultsContainer;