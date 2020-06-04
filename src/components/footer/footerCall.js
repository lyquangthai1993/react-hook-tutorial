import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";

const FooterCall = (props) => {
  const { className = "" } = props;
  return (
    <div className={ClassNames("footer footer-call-wrapper", className)}>
      <FontAwesomeIcon icon="phone-alt" className={"icon"}/>
      Want to talk to someone? <a href={"tel:+0800115222"}
                                  className={"text-link-small-blue underline"}>Give us a call</a>
    </div>
  );
};

FooterCall.propTypes = {
  className: PropTypes.string
};

export default FooterCall;
