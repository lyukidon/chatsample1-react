import React, { useState } from "react";
import FormComponent from "./components/FormComponent";

import { Container, Row, Col } from "react-bootstrap";

function App() {
    const [user, setUser] = useState({
        id: null,
        pw: null,
    });
    return (
        <Container>
            {user.id && user.pw ? (
                <Row>
                    <Col></Col>
                </Row>
            ) : (
                <Row className="justify-content-md-center">
                    <Col>
                        <FormComponent user={user} setUser={setUser} />
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default App;
