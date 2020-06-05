import React from "react";
import "./hook-in-hook.scss";

const HookInHook = (props) => {
  // const windowSize = useWindowResize();
  // const {height: heightWin = 0, width: widthWin = 0} = windowSize;

  return (
    <div className={"hook-in-hook-wrapper"}>
      <h2>Hook in hook</h2>

    </div>
  );
};

HookInHook.defaultProps = {};

HookInHook.propTypes = {};

export default HookInHook;
