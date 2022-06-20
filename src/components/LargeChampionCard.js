import { StarBorder, Star } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';

const LargeChampionCard = (props) => {
  return (
    <div className='largechampioncard'>
      { props.isSkin ? 
        null
        :
        props.isFavorited ?
        <ButtonBase 
          className='starbutton sb'
          onClick={props.handleStarClicked}
        >
          <Star />
        </ButtonBase> 
        :
        <ButtonBase 
          onClick={props.handleStarClicked}
          className='starbutton sb'
        >
          <StarBorder />
        </ButtonBase>
    }
      <img
        src={props.imgUrl}
        alt={`${props.name}.jpg`}
        width={150}
        height={273}
      />
      <h3>{props.name}</h3>
    </div>
  );
};

export default LargeChampionCard;