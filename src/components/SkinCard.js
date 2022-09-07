import skinfallback from "../assets/images/skinfallback.png";

const SkinCard = (props) => {
  return (
    <div 
      className={props.determineClassNames()}
      onClick={props.handleSkinClicked}
    >
      <img 
        src={props.urlName}
        alt={`skin`}
        onError={(e) => e.target.src = skinfallback }
        width={38}
        height={68}
      />
      <p>{props.name}</p>
    </div>
  );
}

export default SkinCard;