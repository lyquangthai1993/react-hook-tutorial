import React, {useState} from "react";
import PropTypes from "prop-types";
import "./interval-demo.scss";
import CounterInterval from "components/CounterInterval/counter-interval";
import {Button} from "reactstrap";

const IntervalDemo = (props) => {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className={"interval-demo-wrapper"}>
      {showCounter && <CounterInterval />}

      <div className="">
        <Button
          color="warning"
          onClick={() => {
            setShowCounter((c) => !c);
          }}
        >
          Toggle counter
        </Button>
      </div>
    </div>
  );
};

IntervalDemo.defaultProps = {};

IntervalDemo.propTypes = {};

export default IntervalDemo;
