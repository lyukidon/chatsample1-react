/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { css, jsx } from "@emotion/react";

const inputStyle = css`
    width: 100%;
    background-color: #fff;
    border-radius: 30px;
    border: none;
`;

const send = css`
    background-color: #d7e7ff;
    border-radius: 30px;
    border: none;
    &:disabled {
        background-color: #a1a1a1;
        color: #6c757d;
        cursor: not-allowed;
    }
`;

const formStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 25px;
`;

export default ({ userId }) => {
    const { register, handleSubmit, control, formState } = useForm();

    const dispatch = useDispatch();
    const chat = useSelector((state) => state.chat);

    const onSubmit = async (data) => {
        const { chatContent } = data;
        await axios
            .post("http://localhost:3002/chat", {
                userId,
                chatContent,
            })
            .catch((err) => console.error(err));
        await axios;
        const res = await axios.get(
            `http://localhost:3002/chat/${chat[chat.length - 1].id}`
        );
        const chatData = await res.data.chats;
        await dispatch(addChat(chatData));
    };

    return (
        <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <input
                css={inputStyle}
                type="text"
                {...register("chatContent", { required: true })}
            />
            <button css={send} type="submit" disabled={!formState.isValid}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
};
