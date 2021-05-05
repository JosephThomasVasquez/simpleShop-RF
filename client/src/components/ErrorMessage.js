import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ errorMsg }) => {
  return <Alert variant="danger">{errorMsg}</Alert>;
};

export default ErrorMessage;
