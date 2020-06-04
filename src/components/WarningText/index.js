import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as WarningLogo } from "images/icon/warning_white.svg";
import "./WarningText.scss";

const WarningText = props => {
  return (
    <div className={"warning-text-wrapper d-flex"}>
      <div>
        <WarningLogo className="warning-logo"/>
      </div>
      <div className="warning-content warning-note">
        {props.text}
      </div>
    </div>
  );
};

WarningText.defaultProps = {};

WarningText.propTypes = {
  text: PropTypes.string
};

export default WarningText;
