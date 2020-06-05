import { useRefResize } from "hooks";
import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import "./DivRef.scss";

const DivRef = (props) => {
  const {backgroundColor, width, height, name} = props;
  const myRef = useRef(null);

  const {height: heightRef = 0, width: widthRef = 0} = useRefResize(myRef);
  useEffect(() => {
      let element = document.getElementById(name);
      console.log(element)
      element.onresize = function() {
        console.log('eeeeeee')
    };
  }, []);
  return (
    <div ref={myRef} id={name} className={"div-ref-wrapper"}>
      <div
        className="box-show-window-size"
        style={{
          backgroundColor: `var(--${backgroundColor})`,
          width,
          height,
        }}
        onDrag={(e) => {
          console.log(`Div ${name} is resizing`);
        }}
      >
        <p>Height: {heightRef}</p>
        <p>Width: {widthRef}</p>
      </div>
    </div>
  );
};

DivRef.defaultProps = {
  backgroundColor: "primary",
  name: "",
  width: 200,
  height: 200,
};

DivRef.propTypes = {
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default DivRef;
