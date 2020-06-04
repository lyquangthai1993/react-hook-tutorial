import ClassNames from "classnames";
import { isFunction } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";
import "./style.scss";

const ListGroupAppend = props => {
  const {
    variant = "flush",
    listItem = [],
    appendIcon = "",
    theme = ""
  } = props;
  
  return (
    <div className={"list-group-append"}>
      <ListGroup variant={variant} className={theme}>
        {listItem.map((item, key) => {
          const {
            name = "",
            icon,
            theme = "",
            image = "",
            action
          } = item;
          
          return (
            <ListGroup.Item
              action={isFunction(action)}
              className={ClassNames(theme, "d-flex align-items-center")}
              key={key}
              onClick={e => {
                e.stopPropagation();
                if (isFunction(action))
                  action();
              }}
            >
              {image && (
                <div className={"prepend-icon"}>
                  <img src={image} className={""} alt={"prepend-icon"}/>
                </div>
              )}
              
              <div className={"name"}>{name}</div>
              <span className={"append-icon ml-auto"}>
                {icon || appendIcon}
              </span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

ListGroupAppend.propTypes = {
  variant: PropTypes.string,
  theme: PropTypes.string,
  listItem: PropTypes.array.isRequired,
  appendIcon: PropTypes.node
};

export default ListGroupAppend;
