import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./counter-interval.scss";
import {Button} from "reactstrap";

const CounterInterval = (props) => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    console.log("interval is working");
    setCounter((counter1) => counter1 + 1);
  };

  useEffect(() => {
    const _idInterval = setInterval(increase, 1000);
    return () => {
      console.log("component unmount");
      clearInterval(_idInterval);
    };
  }, []);

  return (
    <div className={"counter-interval-wrapper"}>
      <div>Counter: {counter}</div>
    </div>
  );
};

CounterInterval.defaultProps = {};

CounterInterval.propTypes = {};

export default CounterInterval;
