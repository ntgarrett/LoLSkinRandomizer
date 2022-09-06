import RandomizerButton from "../components/RandomizerButton";

const RandomizerButtonContainer = (props) => {
  function determineClassNames() {
    if (props.isDisabled) {
      return "randombutton rbdisabled";
    } else {
      return "randombutton rbenabled";
    }
  }

  return (
    <RandomizerButton 
      handleButtonClick={props.handleButtonClick}
      isDisabled={props.isDisabled}
      determineClassNames={determineClassNames}
    />
  );
}

export default RandomizerButtonContainer;