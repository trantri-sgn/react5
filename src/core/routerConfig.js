import React from "react";
import { Route, Switch } from "react-router-dom";

export default function routerConfig(routers) {
  return (
    <Switch>
      {routers.map((e) => {
        const { exact, path, component: Component, routers: childRouters } = e;
        let children = [];
        if (childRouters) {
          children = routerConfig(childRouters);
        }
        return (
          <Route
            key={Component}
            exact={exact}
            path={path}
            component={(...prop) => (
              <Component {...prop}>{children}</Component>
            )}
          ></Route>
        );
      })}
    </Switch>
  );
}
