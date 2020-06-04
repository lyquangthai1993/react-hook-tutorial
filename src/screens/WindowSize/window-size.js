import React from "react";
import PropTypes from "prop-types";
import "./window-size.scss";
import {useWindowResize} from "hooks";

const WindowSize = (props) => {
  const windowSize = useWindowResize();
  const {height = 0, width = 0} = windowSize;
  return (
    <div className={"window-size-wrapper"}>
      <div className="box-show-window-size">
          <div>Height window: {height}</div>
          <div>Width window: {width}</div>
      </div>
    </div>
  );
};

WindowSize.defaultProps = {};

WindowSize.propTypes = {};

export default WindowSize;
