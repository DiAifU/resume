/* eslint-disable import/no-named-as-default */
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch } from "react-router-dom";

import Resume from "./pages/Resume";
import NotFoundPage from "./pages/NotFoundPage";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Resume} />
        <Route exact path="/resume" component={Resume} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}


export default hot(module)(Routes);
