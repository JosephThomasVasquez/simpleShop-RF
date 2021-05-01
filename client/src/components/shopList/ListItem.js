import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ListItem = ({ item }) => {
  return (
    <div className="item-container">
      <li className="item-li">{item.name}</li>
    </div>
  );
};

export default ListItem;
