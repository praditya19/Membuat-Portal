import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../components/Card.css';
import Cards from '../components/Card';

class Home extends Component {
  render() {
    console.log(this.props.posts, '>>>>> mantab');
    return (
      <div>
        <Row>
          <Col md={8}>
            {this.props.posts.map((value, index) => {
              return <Cards title={value.title} url={value.url} />;
            })}
          </Col>
          <Col md={4}>cc</Col>
        </Row>
      </div>
    );
  }
}
export default Home;
