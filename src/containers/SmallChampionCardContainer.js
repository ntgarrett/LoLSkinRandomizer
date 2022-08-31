import { buildSkinSquareImageUrl } from "../api/urlBuilder";
import SmallChampionCard from "../components/SmallChampionCard";

const SmallChampionCardContainer = (props) => {
  const { urlName, name, uId, setSelectedChampion, setDrawerOpen, favorited } = props;

  const handleClick = () => {
    const c = {
      urlName: urlName,
      name: name,
      uId: uId
    }

    setSelectedChampion(c);
    if (favorited) {
      setDrawerOpen(false);
    }
  }

  return (
    <SmallChampionCard
      name={name}
      imgSrc={buildSkinSquareImageUrl(urlName)}
      handleClick={handleClick}
    />
  );
};

export default SmallChampionCardContainer;