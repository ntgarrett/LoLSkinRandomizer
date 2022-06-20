import SmallChampionCardContainer from "../containers/SmallChampionCardContainer";

const SmallChampionSearchResults = (props) => {
  const { filteredChampionList, setSelectedChampion } = props;

  return (
    <div className='sclistcontainer'>
      <div className='smallchamplist'>
        {filteredChampionList.map((champ, i) => {
          return (
            <SmallChampionCardContainer 
              urlName={champ.id}
              name={champ.name}
              uId={champ.key}
              setSelectedChampion={setSelectedChampion}
              key={i}
            />
          )
        })}
      </div>
    </div>
  );
};

export default SmallChampionSearchResults;