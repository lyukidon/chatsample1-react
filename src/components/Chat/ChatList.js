/** @jsxImportSource @emotion/react */

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useInterval } from "react-use";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../../store/chat";
import { jsx, css } from "@emotion/react";

const chatContainer = css`
    display: flex;
    flex-direction: row;
`;

const chatBubble = css`
    padding: 0px 10px;
    border-radius: 30px;
    background-color: #a0c4ff;
    color: black;
`;

const bubbleContainer = css``;

const infoContainer = css`
    display: flex;
    flex-direction: row;
`

function List({ id, chatContent, time }) {
    return (
        <div css={chatContainer}>
            <div css={bubbleContainer}>
                <div>{id}</div>
                <div css={infoContainer}>
                    <div css={chatBubble}>{chatContent}</div>
                    <div>{time}</div>
                </div>
                
            </div>
        </div>
    );
}

export default () => {
    const chat = useSelector((state) => state.chat);
    const dispatch = useDispatch();

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/chat");
        const chatData = await res.data.chats;
        await dispatch(addChat(chatData));
        await console.log(chat);
    };

    useInterval(getData, 1000);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {chat.map((data, i) => {
                return <List id={data.userId} chatContent={data.chatContent} time={data.time} />;
            })}
        </div>
    );
};

// Badge New message
