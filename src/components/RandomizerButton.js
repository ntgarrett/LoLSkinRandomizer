import { ButtonBase } from '@mui/material'
import CasinoIcon from '@mui/icons-material/Casino'

const RandomizerButton = props => {
  return (
    <ButtonBase onClick={props.handleButtonClick} disabled={props.isDisabled}>
      <div className={props.determineClassNames()}>
        <CasinoIcon />
        <h2>RANDOMIZE</h2>
      </div>
    </ButtonBase>
  )
}

export default RandomizerButton
