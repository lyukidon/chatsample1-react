import React from "react";
import { Container } from "react-bootstrap";

import ChatTop from './ChatTop'
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

export default ({user, setUser}) => {
    return (
        <Container>
            <ChatTop user={user} setUser={setUser} />
            <ChatList />
            <ChatForm user={user} />
        </Container>
    );
};
