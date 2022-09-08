import smfallback from "../assets/images/smfallback.png";

const SmallChampionCard = (props) => {
  return (
    <div 
      className="smallchampcard"
      onClick={props.handleClick}  
    >
      <img 
        className="scimg"
        src={props.imgSrc} 
        onError={(e) => e.target.src = smfallback }
        alt='Champ'
        width='40'
        height='40'
      />
      <p>{props.name}</p>
    </div>
  );
};

export default SmallChampionCard;