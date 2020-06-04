import DivRef from "components/DivRef";
import React, {useState} from "react";
import {Button} from "reactstrap";
import "./hook-in-hook.scss";
import { useWindowResize } from "hooks";

const HookInHook = (props) => {
  // const windowSize = useWindowResize();
  // const {height: heightWin = 0, width: widthWin = 0} = windowSize;
  const [heightState, setHeightState] = useState(150);
  return (
    <div className={"hook-in-hook-wrapper"}>
       {/* <div className="box-show-window-size">
          <div>Height window: {heightWin}</div>
          <div>Width window: {widthWin}</div>
      </div> */}

      <DivRef name="box1" height={heightState} />
      <DivRef name="box2" backgroundColor="red" width={300} height={heightState} />
      
    </div>
  );
};

HookInHook.defaultProps = {};

HookInHook.propTypes = {};

export default HookInHook;
