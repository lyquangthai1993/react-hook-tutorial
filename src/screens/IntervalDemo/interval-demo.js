import CounterInterval from "components/CounterInterval/counter-interval";
import React, { useState } from "react";
import { Button } from "reactstrap";
import "./interval-demo.scss";

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
