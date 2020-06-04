import ClassNames from "classnames";
import { isFunction } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";
import "./ItemAction.scss";

const ItemAction = props => {
  const {
    item,
    index,
    icon,
    theme = "",
    name = "",
    sub = "",
    className = "",
    action
  } = props;
  return (
    <div className={"item-action-wrapper"}>
      <ListGroup.Item
        className={ClassNames(theme, className, isFunction(action) && "btn")}
        key={index}
        onClick={e => {
          e.stopPropagation();
          isFunction(action) && action(e, index, item);
        }}
      >
        <div className={"d-flex align-items-center"}>
          <div className={ClassNames("flex-fill")}>
            <div className={"text-left"}>
              <div className={ClassNames("name input-label-blue")}>{name}</div>
              {sub && <div className={"paragraph-small sub"}>{sub}</div>}
            </div>
          </div>
          
          <div className={"icon-block"}>
            <span className={"append-icon"}>{icon}</span>
          </div>
        </div>
      </ListGroup.Item>
    </div>
  );
};

ItemAction.defaultProps = {};

ItemAction.propTypes = {
  item: PropTypes.any,
  icon: PropTypes.any,
  theme: PropTypes.string,
  name: PropTypes.string.isRequired,
  sub: PropTypes.string,
  className: PropTypes.string,
  index: PropTypes.number,
  action: PropTypes.func
};

export default ItemAction;
