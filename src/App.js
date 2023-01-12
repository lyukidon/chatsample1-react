import React from "react";
import Form from './components/Form'

import { Container, Row, Col } from "react-bootstrap";

function App() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Form />
          </Col>
        </Row>
      </Container>
    );
}

export default App;
