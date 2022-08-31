import { StarBorder, Star } from '@mui/icons-material';
import { ButtonBase, Tooltip } from '@mui/material';
import lgcardplaceholder from "../assets/lgcardplaceholder.png";

const LargeChampionCard = (props) => {
  function determineCardText() {
    if (props.name) {
      return props.name === 'default' ? "Default" : props.name;
    } else {
      return props.isSkin ? "Skin Result" : "Select a Champion";
    }
  }

  return (
    <div className='largechampioncard'>
      <img
        className="largecardborder"
        src={props.name !== undefined ? props.imgUrl : lgcardplaceholder}
        alt={`${props.name}.jpg`}
        width={150}
        height={273}
      />
      <span>
        {
          props.isSkin || props.name === undefined ? null
          :
          props.isFavorited ?
          <Tooltip 
            title="Remove from favorites" 
            disableHoverListener={props.isSkin === true || props.name === undefined}
          >
            <ButtonBase 
              className="starbutton sb"
              onClick={props.handleStarClicked}
              disabled={props.isSkin || props.name === undefined}
              sx={{ mr: 1 }}
            >
              <Star sx={{ 
                opacity: props.isSkin ? 0 : props.name === undefined ? 0 : 100,
                fontSize: 30
              }}/>
            </ButtonBase> 
          </Tooltip>
          :
          <Tooltip
            title="Add to favorites"
            disableHoverListener={props.isSkin === true || props.name === undefined}
          >
            <ButtonBase 
              onClick={props.handleStarClicked}
              className="starbutton sb"
              disabled={props.isSkin || props.name === undefined}
              sx={{ mr: 1 }}
            >
              <StarBorder 
                sx={{ 
                  opacity: props.isSkin ? 0 : props.name === undefined ? 0 : 100,
                  fontSize: 30
                }}
              />
            </ButtonBase>
          </Tooltip>
        }
        <h3>{determineCardText()}</h3>
      </span>
    </div>
  );
};

export default LargeChampionCard;