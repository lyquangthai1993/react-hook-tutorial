import React from "react";
import { Route } from "react-router";
import HookInHook from "screens/HookInHook/hook-in-hook";
import WindowSize from "screens/WindowSize/window-size";

export const routeLinks = {
  useWindowResize: {
    path: "/use-window-size",
    name: "Window resize",
    component: WindowSize,
  },
  useHookInHook: {
    path: "/use-hook-in-hook",
    name: "Hook in hook",
    component: HookInHook,
  },
};
export default () => {
  return (
    <div className={"routes-wrapper"}>
      {Object.keys(routeLinks).map((key) => {
        const {path, component} = routeLinks[key];
        return <Route path={path} component={component} />;
      })}
    </div>
  );
};
