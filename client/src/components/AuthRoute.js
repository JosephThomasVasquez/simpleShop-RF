import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthRoute = ({ component: ComponentView, ...Components }) => {
  const { currentUser } = useAuth();

  return (
    <Route>
      {...Components}
      render=
      {(props) => {
        currentUser ? <ComponentView {...props} /> : <Redirect tp="signin" />;
      }}
    </Route>
  );
};

export default AuthRoute;
