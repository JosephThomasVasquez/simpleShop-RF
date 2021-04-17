import React from "react";
import { Route } from "react-router-dom";

const AuthRoute = ({ component: ComponentView, ...Components }) => {
  return <Route>{...Components}</Route>;
};

export default AuthRoute;
