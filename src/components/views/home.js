import React, { Component } from 'react';
import {
  Container, Row, Col,
  Card, CardHeader, CardBody
}                           from 'reactstrap';

import logo                 from '../../assets/logo.png';

class Home extends Component {
  render() {
    return (
      <Container className="mt-5 text-center">
        <Row>
          <Col xs="12" className="text-center">
            <img src={logo} alt="Christ Fellowship Logo" className="w-25 h-auto"/>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col>
            <h1 className="text-secondary">
              Christ Fellowship Church
              <br></br>
              <small>
                Website Development
              </small>
            </h1>
          </Col>
        </Row>
        
        <hr></hr>
        
        <Row>
          <Col>
            <p>
              Here are a few tips and tricks to get you started with our development practices
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="4">
            <Card color="success">
              <CardHeader className="h4 text-uppercase">
                Styling
              </CardHeader>
              <CardBody className="bg-white text-left">

                <h5>
                  Libraries:
                </h5>
                <ul>
                  <li>
                    <a href="#">Bootstrap</a> for general styling
                  </li>

                  <li>
                    <a href="#">Reactstrap</a> as a Bootstrap helper tool for React
                  </li>
                </ul>

                <h5>
                  Where to start:
                </h5>
                <ul>
                  <li>
                    Add custom styling rules to <code>bootstrap-theme.scss</code>
                  </li>

                  <li>
                    <strong>DO NOT</strong> make any changes to <code>christ-fellowship-core.scss</code> as this file contains standardized styling
                  </li>
                </ul>

              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card color="secondary">
              <CardHeader className="h4 text-uppercase text-light">
                Developing
              </CardHeader>
              <CardBody className="bg-white text-left">

                <h5>
                  New Web Pages:
                </h5>
                <ul>
                  <li>
                    Add all new web pages to the <code>views</code> directory
                  </li>
                </ul>

                <h5>
                  Components:
                </h5>
                <ul>
                  <li>
                    Add your custom components to the <code>components</code> directory
                  </li>

                  <li>
                    Please do your best to keep components organized
                  </li>
                </ul>

              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="4">
            <Card color="danger">
              <CardHeader className="h4 text-uppercase">
                Helpful Info
              </CardHeader>
              <CardBody className="bg-white text-left">

                <h5>
                  Adding New Page Routes:
                </h5>
                <ul>
                  <li>
                    Add all new web page routes to <code>App.js</code>
                  </li>
                  <li>
                    We use a library called <a href="https://reacttraining.com/react-router/web/guides/quick-start">React Router DOM</a> and you can find some helper resources <a href="https://reacttraining.com/react-router/web/guides/quick-start">here</a>
                  </li>
                </ul>

                <h5>
                  Rerenceing API Endpoint:
                </h5>
                <ul>
                  <li>
                    Inside of <code>index.js</code>, you'll find a variable called <code>httpLink</code> and you should update the <code>uri</code> property with the value of your API endpoint
                  </li>
                </ul>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
