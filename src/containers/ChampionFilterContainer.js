import ChampionFilter from "../components/ChampionFilter";

const ChampionFilterContainer = (props) => {
  const { setFilteredChampionList, allChampions, setSelectedChampion, searchValue, setSearchValue } = props;

  const filterListOfChampions = (val) => {
    let filteredList = allChampions.filter((champ) => champ.name.toLowerCase().includes(val.toLowerCase()));

    setFilteredChampionList(filteredList);
  }
  
  const onChange = (e) => {
    setSearchValue(e.target.value);
  }

  const onSubmitSearch = () => {
    filterListOfChampions(searchValue);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      filterListOfChampions(searchValue);
    } else {
      setSearchValue(e.target.value);
    }
  }

  return (
    <ChampionFilter 
      onChange={onChange}
      onSubmitSearch={onSubmitSearch}
      handleKeyPress={handleKeyPress}
      searchValue={searchValue}
      setSelectedChampion={setSelectedChampion}
    />
  );
};

export default ChampionFilterContainer;