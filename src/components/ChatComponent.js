import React from "react";
import { Button, Container } from "react-bootstrap";

export default ({ setUser }) => {
    const logout = () => {
        setUser({
            id: "",
            pw: "",
        });
    };

    return (
        <Container>
            <Button variant="outline-danger" onClick={logout}>
                Log Out
            </Button>
        </Container>
    );
};
