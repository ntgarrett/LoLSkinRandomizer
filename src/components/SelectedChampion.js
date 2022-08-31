import LargeChampionCardContainer from "../containers/LargeChampionCardContainer";

const SelectedChampion = (props) => {
  return (
    <LargeChampionCardContainer
      name={props.name}
      urlName={props.urlName}
      uId={props.uId}
      skinNum={props.skinNum}
      isFavorited={props.isFavorited}
      dispatch={props.dispatch}
      isSkin={props.isSkin}
    />
  );
};

export default SelectedChampion;