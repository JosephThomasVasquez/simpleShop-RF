import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthRoute = ({ component: ComponentView, ...Components }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...Components}
      render={(props) => {
        return currentUser ? (
          <ComponentView {...props} />
        ) : (
          <Redirect tp="signin" />
        );
      }}
    ></Route>
  );
};

export default AuthRoute;
