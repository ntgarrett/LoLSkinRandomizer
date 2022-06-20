const SmallChampionCard = (props) => {
  return (
    <div 
      className="smallchampcard"
      onClick={props.handleClick}  
    >
      <img 
        src={props.imgSrc} 
        alt='Square'
        width='40'
        height='40'
      />
      <p>{props.name}</p>
    </div>
  );
};

export default SmallChampionCard;