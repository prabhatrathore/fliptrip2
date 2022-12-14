import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Forms from "./Forms";
// import Tables from "./Tables";

const tourroute = ({ match }) => (
  <Switch>
    {/* match.url ==app/tour */}
    <Redirect exact from={`${match.url}/`} to={`${match.url}/forms`} />
    <Route path={`${match.url}/forms`} component={Forms} />
    {/* app/tour/forms/ */}
    {/* <Route path={`${match.url}/tables`} component={Tables} /> */}
  </Switch>
);

export default tourroute;
