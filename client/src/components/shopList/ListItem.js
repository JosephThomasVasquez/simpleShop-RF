import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ListItem = ({ item }) => {
  return <li className="item-li">{item.name}</li>;
};

export default ListItem;
