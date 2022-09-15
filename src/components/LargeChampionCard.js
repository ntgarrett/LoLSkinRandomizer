import { useEffect } from 'react'

import { StarBorder, Star } from '@mui/icons-material'
import { ButtonBase, Tooltip } from '@mui/material'

import lgcardplaceholder from '../assets/images/lgcardplaceholder.png'
import lgfallback from '../assets/images/lgfallback.png'

const LargeChampionCard = props => {
  const {
    name,
    imgUrl,
    handleStarClicked,
    isFavorited,
    isSkin,
    cardText,
    animation,
    setAnimation,
  } = props

  useEffect(() => {
    if (animation) {
      const intervalId = setTimeout(() => {
        setAnimation(false)
      }, 700)

      return () => clearInterval(intervalId)
    }
  }, [animation, setAnimation])

  const animationStyle = 'flash 700ms 1 ease-out'

  return (
    <div className="largechampioncard">
      <img
        className="largecardborder"
        src={name !== undefined ? imgUrl : lgcardplaceholder}
        onError={e => (e.target.src = lgfallback)}
        alt={`${name}.jpg`}
        width={150}
        height={273}
      />
      <span>
        {isSkin || name === undefined ? null : isFavorited ? (
          <Tooltip
            title="Remove from favorites"
            disableHoverListener={isSkin === true || name === undefined}
          >
            <ButtonBase
              className="starbutton sb"
              onClick={handleStarClicked}
              disabled={isSkin || name === undefined}
              sx={{ mr: 1, color: 'gold' }}
            >
              <Star
                sx={{
                  opacity: isSkin ? 0 : name === undefined ? 0 : 100,
                  fontSize: 30,
                }}
              />
            </ButtonBase>
          </Tooltip>
        ) : (
          <Tooltip
            title="Add to favorites"
            disableHoverListener={isSkin === true || name === undefined}
          >
            <ButtonBase
              onClick={handleStarClicked}
              className="starbutton sb"
              disabled={isSkin || name === undefined}
              sx={{ mr: 1 }}
            >
              <StarBorder
                sx={{
                  opacity: isSkin ? 0 : name === undefined ? 0 : 100,
                  fontSize: 30,
                }}
              />
            </ButtonBase>
          </Tooltip>
        )}
        {animation ? (
          <h3 style={{ animation: animation ? animationStyle : '' }}>{cardText()}</h3>
        ) : (
          <h3>{cardText()}</h3>
        )}
      </span>
    </div>
  )
}

export default LargeChampionCard
