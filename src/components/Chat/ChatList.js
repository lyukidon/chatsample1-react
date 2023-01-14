import React from "react";
import { Container,  Card, Badge, Stack } from "react-bootstrap";

export default () => {
    return (
        <Card body>
            <Stack direction='horizontal'>
                <Badge bg='light' text="dark">ID</Badge>
                Message
            </Stack>
        </Card>
    )
};

// Badge New message