import { buildSkinSquareImageUrl } from "../api/urlBuilder";
import SmallChampionCard from "../components/SmallChampionCard";

const SmallChampionCardContainer = (props) => {
  const { urlName, name, uId, setSelectedChampion } = props;

  const handleClick = () => {
    const c = {
      urlName: urlName,
      name: name,
      uId: uId
    }

    setSelectedChampion(c);
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