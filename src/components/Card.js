import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './Card.css';

const Cards = props => {
  const { title, url } = props;

  return (
    <div className="container">
      <Row>
        <Col md={3}>
          <img src={url} alt="" />
        </Col>

        <Col md={9}>
          <h2>{title}</h2>
        </Col>
      </Row>
    </div>
  );
};
export default Cards;
