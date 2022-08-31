const SkinCard = (props) => {
  return (
    <div 
      className={props.determineClassNames()}
      onClick={props.handleSkinClicked}
    >
      <img 
        src={props.urlName}
        alt={`img.jpg`}
        width={38}
        height={68}
      />
      <p>{props.name}</p>
    </div>
  );
}

export default SkinCard;