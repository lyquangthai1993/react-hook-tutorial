import ClassNames from "classnames";
import { isFunction } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routeLinks } from "app-routes";
import avatar from "images/user.svg";
import "./style.scss";

const ListLabelGroup = props => {
  const {
    className = "",
    variant = "flush",
    listItem = [],
    appendIcon = "",
    theme = "grey",
    labelGroup = "",
    hideImage = false,
    classNameOfLabel = "",
    loading = false,
    showEmpty,
    showSerialNumber = false
  } = props;
  
  return (
    <div className={ClassNames("list-label-group", className)}>
      {labelGroup && (
        <div className={ClassNames("label-group", "button-link-white")}>
          {labelGroup}
        </div>
      )}
      {listItem.length ? (
        <ListGroup variant={variant} className={theme}>
          {listItem.map((item, index) => {
            const {
              productId = "",
              name = "",
              icon,
              theme = "",
              image = "",
              description = "",
              isLearnMore = false,
              className = "",
              serialNumber = "",
              action
            } = item;
            return (
              <ListGroup.Item
                className={ClassNames(theme, className, isFunction(action) && "btn")}
                key={index}
                onClick={e => {
                  e.stopPropagation();
                  isFunction(action) && action(e, index, item);
                }}
              >
                <div className={"d-flex align-items-center"}>
                  {!hideImage && (
                    <div className={"align-self-start"}>
                      <div className={"image-block image-center-vertical"}>
                        <span className={"helper"}/>
                        <img
                          src={image}
                          alt="avatar"
                          className={"image"}
                          onError={e => {
                            e.target.onerror = null;
                            e.target.src = avatar;
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div className={ClassNames("flex-fill")}>
                    <div className={"p-base name text-left"}>
                      <div className={"name-with-learn-more d-sm-flex align-items-center"}>
                        <div className={ClassNames("name", classNameOfLabel)}>
                          {name}
                          {showSerialNumber && <div className={"paragraph-small serial-number"}>{serialNumber}</div>}
                        </div>
                        {isLearnMore ? (
                          <Link
                            to={{
                              pathname: routeLinks.productDetail.replace(
                                ":id",
                                productId
                              ),
                              state: {
                                id: productId,
                                productDetail: {
                                  productId,
                                  name,
                                  image,
                                  description
                                }
                              }
                            }}
                            className={
                              "learn-more text-link-small-blue underline ml-auto text-nowrap"
                            }
                          >
                            Learn more
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={"icon-block"}>
                      <span className={"append-icon"}>
                        {icon || appendIcon}
                      </span>
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      ) : (
        <ListGroup.Item className={"empty"}>
          {loading ? "Loading..." : showEmpty ? "Empty" : ""}
        </ListGroup.Item>
      )}
    </div>
  );
};
ListLabelGroup.defaultProps = {
  hideImage: false,
  loading: false,
  showEmpty: true
};
ListLabelGroup.propTypes = {
  className: PropTypes.string,
  labelGroup: PropTypes.string,
  classNameOfLabel: PropTypes.string,
  variant: PropTypes.string,
  theme: PropTypes.string,
  listItem: PropTypes.array,
  appendIcon: PropTypes.node,
  hideImage: PropTypes.bool,
  showSerialNumber: PropTypes.bool,
  loading: PropTypes.bool,
  showEmpty: PropTypes.bool
};

export default ListLabelGroup;
