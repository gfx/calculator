import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

class Display extends React.Component<any, any> {
  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
(Display as any).propTypes ={
  value: PropTypes.string,
};
export default Display;
