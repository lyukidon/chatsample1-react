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
    padding: 3px 10px;
    border-radius: 30px;
    background-color: #a0c4ff;
    color: black;
`;

const bubbleContainer = css``;

const infoContainer = css`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-end;
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

const listContainer=css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #e1e1e1;
`

export default () => {
    const chat = useSelector((state) => state.chat);
    const dispatch = useDispatch();

    const getData = async () => {
        if (chat.length === 0){
            const res = await axios.get("http://localhost:3000/chat");
            const chatData = await res.data.chats;
            await dispatch(addChat(chatData));
        } else {
            console.log(chat[chat.length - 1].id)
            const res = await axios.get(`http://localhost:3000/chat/${chat[chat.length - 1].id}`)
            const chatData = await res.data.chats;
            await console.log(chatData)
            await dispatch(addChat(chatData));
        }
    };

    // const polling = async (location, callback) => {
    //     const res = await axios.get(location);
    //     const {status, data} = res;

    //     if(status === 502){
    //         await polling(location, callback)
    //     }else if(status !== 200){
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    //         await polling(location, callback)
    //     }else{ // status 200 : good
    //         await polling(location, callback);
    //     }
    // }

    useInterval(getData,1000)

    useEffect(() => {
        // polling('http://localhost:3000/chat', (data)=>{
        //     dispatch(addChat(data))
        // })
        getData()
    }, []);

    return (
        <div css={listContainer}>
            {chat.map((data, i) => {
                return <List id={data.userId} chatContent={data.chatContent} time={data.time} />;
            })}
        </div>
    );
};

// Badge New message
