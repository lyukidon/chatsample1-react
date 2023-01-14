import React from "react";
import { Container, Button, Stack } from "react-bootstrap";

export default ({ user, setUser }) => {
    const logout = () => {
        setUser({
            id: "",
            pw: "",
        });
    };
    return (
        <Container>
            <Stack direction="horizontal" className="justify-content-between">
                <div>{user.id}</div>
                <Button variant="outline-danger" onClick={logout}>
                    Log Out
                </Button>
            </Stack>
        </Container>
    );
};
