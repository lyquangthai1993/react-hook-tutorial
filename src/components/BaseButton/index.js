/**
 *
 * BaseButton
 *
 */
import ClassNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
// import styled from 'styled-components';
import { Button } from "react-bootstrap";
import "./style.scss";

function BaseButton(props) {
  const {
    content = "",
    variant = "",
    className = "",
    classNameWarper = "",
    inline = false
  } = props;
  return (
    <div className={ClassNames("base-button",classNameWarper, { "d-inline-block": inline })}>
      <Button
        {...props}
        variant={variant}
        className={ClassNames(className)}
      >{content}
      </Button>
    </div>
  );
}

BaseButton.propTypes = {
  classNameWarper:PropTypes.string,
  content: PropTypes.string.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool
};

export default BaseButton;
