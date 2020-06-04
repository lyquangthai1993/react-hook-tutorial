/**
 *
 * RadioList
 *
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClassNames from "classnames";
import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

const handleCompare = (value, valueOption, isMultiple) => {
  if (!isMultiple) return value.toString() !== valueOption.toString();
  else {
    return value.indexOf(valueOption) === -1;
  }
};
export const RadioList = props => {
  const {
    className = "",
    options = [],
    value = "",
    name = "",
    label = "",
    subscription = "",
    touched = false,
    error = "",
    isCheckbox,
    isMultiple,
    onSelect = () => {
    }
  } = props;
  return (
    <div
      className={ClassNames("radio-list-wrapper", className, {
        error: touched && !_.isEmpty(error)
      })}
    >
      {label && (
        <div className={"label paragraph-heading-charcoal"}>{label}</div>
      )}
      {subscription && (
        <div className={"subscription input-help-text"}>{subscription}</div>
      )}
      {options.map((op, index) => {
        const { label = "", value: valueOption, isDisable = false } = op;
        let compare = handleCompare(value, valueOption, isMultiple);
        return (
          <div className={"option-wrapper"} key={index}>
            <label className={"cursor-pointer d-flex"}>
              <div>
                {!isCheckbox ? (
                  <FontAwesomeIcon
                    icon={["far", compare ? "circle" : "dot-circle"]}
                    className={ClassNames(
                      "radio-icon",
                      compare ? "color-charcoal-grey" : "color-cerulean", { "disable-radio": isDisable }
                    )}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={["far", compare ? "square" : "check-square"]}
                    className={ClassNames(
                      "radio-icon",
                      compare ? "color-charcoal-grey" : "color-cerulean"
                    )}
                  />
                )}
              </div>
              <div>
                <input
                  className="base-input"
                  name={name}
                  checked={valueOption === value}
                  value={valueOption}
                  type={isMultiple ? "checkbox" : "radio"}
                  onChange={e => {
                    if (!isDisable) {
                      if (!isMultiple) onSelect(e.target.value);
                      else {
                        if (value.indexOf(valueOption) === -1)
                          onSelect([].concat(value, valueOption));
                        else {
                          onSelect(value.filter(v => v !== valueOption));
                        }
                      }
                    }
                  }}
                />
                
                {label && <span className={ClassNames("base-labe p-base", {
                  "disable-radio": isDisable
                })}>{label}</span>}
              </div>
            </label>
          </div>
        );
      })}
      {touched && error && <div className="input-field-error">{error}</div>}
    </div>
  );
};
RadioList.defaultProps = {
  className: "",
  label: "",
  subscription: "",
  name: "",
  error: "",
  options: [],
  isCheckbox: false,
  isMultiple: false,
  onSelect: () => {
  }
};
RadioList.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
  subscription: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.array,
  isCheckbox: PropTypes.bool,
  isMultiple: PropTypes.bool,
  touched: PropTypes.oneOf([true, false, undefined])
};
