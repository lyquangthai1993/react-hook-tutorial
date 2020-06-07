/**
 *
 * TextBox
 *
 */

import ClassNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import {ErrorMessage} from "react-hook-form";
import "./style.scss";
// import styled from 'styled-components';
import {isEmpty} from "lodash";
const TextBox = ({label, className, placeholder, type, register, name, errors, ...rest}) => {
  return (
    <div className={ClassNames("text-box-wrapper", "form-group", className)}>
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          className={ClassNames(
            "form-control",
            !isEmpty(errors && errors[name] && errors[name].message) && "is-invalid"
          )}
          placeholder={placeholder}
          name={name}
          ref={register}
          {...rest}
        />
        <ErrorMessage as={<p className="text-danger" />} errors={errors} name={name} />
      </div>
    </div>
  );
};
TextBox.defaultProps = {};
TextBox.propTypes = {
  ref: PropTypes.any,
  register: PropTypes.any,
  subscription: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  appendLabel: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string,
  isTextarea: PropTypes.bool,
  readOnly: PropTypes.bool,
  showError: PropTypes.bool,
  inputRef: PropTypes.any,
  value: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.any,
  errors: PropTypes.string,
  classNameAppend: PropTypes.string,
  prependLabel: PropTypes.any,
  classNamePrepend: PropTypes.string,
  classNameInput: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export default TextBox;
