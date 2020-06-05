import React from "react";
import { Route } from "react-router";
import Home from "screens/Home/home";
import HookInHook from "screens/HookInHook/hook-in-hook";
import IntervalDemo from "screens/IntervalDemo/interval-demo";
import WindowSize from "screens/WindowSize/window-size";

export const routeLinks = {
  home: {
    path: "/",
    exact: true,
    name: "Home",
    hideInNav: true,
    component: Home,
  },
  interval: {
    path: "/interval",
    name: "Interval demo",
    component: IntervalDemo,
  },
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
        const {path, component, exact} = routeLinks[key];
        return <Route key={key} exact={exact} path={path} component={component} />;
      })}
    </div>
  );
};
