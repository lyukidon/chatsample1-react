import React, { useState, useEffect } from "react";
import { Container, Card, Badge, Stack } from "react-bootstrap";
import axios from "axios";
import { useInterval } from "react-use";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../../store/chat";

function List({ id, chatContent }) {
    return (
        <Card body>
            <Stack direction="horizontal">
                <Badge bg="light" text="dark">
                    {id}
                </Badge>
                {chatContent}
            </Stack>
        </Card>
    );
}

export default () => {
    const chat = useSelector((state) => state.chat);
    const dispatch = useDispatch();

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/chat");
        const chatData = await res.data.chats;
        await dispatch(addChat(chatData));
        await console.log(chat)
    };

    useInterval(getData, 1000);

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            {chat.map((data, i) => {
                return <List id={data.userId} chatContent={data.chatContent} />;
            })}
        </Container>
    );
};

// Badge New message
