import ClassNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./LabelBackground.scss";

const LabelBackground = props => {
  const {
    label,
    backgroundColor,
    classNameLabel
  } = props;
  return (
    <div className={ClassNames("label-background-wrapper, p-16")}
         style={{
           backgroundColor
         }}>
      <div className={classNameLabel}>{label}</div>
    </div>
  );
};

LabelBackground.defaultProps = {
  backgroundColor: "var(--dusk-blue)",
  classNameLabel: "button-link-white"
};

LabelBackground.propTypes = {
  backgroundColor: PropTypes.string,
  classNameLabel: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default LabelBackground;
