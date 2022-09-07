import { Component } from "react";
import { PropTypes } from "prop-types";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.src,
      isError: false,
    };
  }

  onError = () => {
    if (!this.state.isError) {
      this.setState({
        src: this.props.fallbackSrc,
        isError: true,
      });
    }
  }

  render() {
    const { src } = this.state;
    const {
      src: _1,
      fallbackSrc: _2,
      ...props
    } = this.props;
    
    return (
      <img
        src={src}
        onError={this.onError}
        {...props}
      />
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string
};