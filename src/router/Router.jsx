import { Swicth, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

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

      <Route path="/page2">
        <Page2 />
      </Route>
    </Swicth>
  );
};
