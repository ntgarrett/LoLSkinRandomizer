import { buildSkinLoadingImageUrl } from '../api/urlBuilder';
import { addChampionToFavorites, removeChampionFromFavorites } from '../redux/user/actions';
import LargeChampionCard from '../components/LargeChampionCard';

const LargeChampionCardContainer = (props) => {
  const { urlName, name, uId, skinNum, isFavorited, dispatch, isSkin, animation, setAnimation } = props;

  const handleStarClicked = () => {
    const champ = {
      urlName: urlName,
      name: name,
      uId: uId
    };

    if (isFavorited) {
      dispatch(removeChampionFromFavorites('REMOVE_CHAMPION_FROM_FAVORITES', champ));
    } else {
      dispatch(addChampionToFavorites('ADD_CHAMPION_TO_FAVORITES', champ));
    }
  };


  function determineCardText() {
    if (props.name) {
      return props.name === 'default' ? "Default" : props.name;
    } else {
      return props.isSkin ? "Skin Result" : "Champion";
    }
  }
  
  return (
    <LargeChampionCard
      name={name} 
      imgUrl={buildSkinLoadingImageUrl(urlName, skinNum)}
      handleStarClicked={handleStarClicked}
      isFavorited={isFavorited}
      isSkin={isSkin}
      cardText={determineCardText}
      animation={animation}
      setAnimation={setAnimation}
    />
  );
};

export default LargeChampionCardContainer;