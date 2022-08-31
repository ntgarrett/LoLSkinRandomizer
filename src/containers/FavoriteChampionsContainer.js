import SmallChampionCardContainer from './SmallChampionCardContainer';

const FavoriteChampionsContainer = (props) => {

  return (
    <div className='smallchamplist'>
      {props.favoriteChampionList.map((champ, i) => {
        return (
          <SmallChampionCardContainer
            urlName={champ.urlName}
            name={champ.name}
            uId={champ.uId}
            setSelectedChampion={props.setSelectedChampion}
            key={i}
          />
        )
      })}
    </div>
  );
}

export default FavoriteChampionsContainer;