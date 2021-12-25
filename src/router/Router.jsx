import { Swicth, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Swicth>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Swicth>
            {page1Routes.map((route) => {
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>;
            })}
          </Swicth>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Swicth>
            {page2Routes.map((route) => {
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>;
            })}
          </Swicth>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Swicth>
  );
};
