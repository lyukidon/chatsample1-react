/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, Form, Stack } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { css, jsx } from "@emotion/react";

const input = css`
    background-color: #fff;
    border-radius: 30px;
    border: none;
`;

const send = css`
    background-color: #d7e7ff;
    border-radius: 30px;
    border:none;
    &:disabled {
        background-color: #a1a1a1;
        color: #6c757d;
        cursor: not-allowed;
    }
`;

export default ({ userId }) => {
    const { register, handleSubmit, control, formState } = useForm();

    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const { chatContent } = data;
        await axios
            .post("http://localhost:3000/chat", {
                userId,
                chatContent,
            })
            .catch((err) => console.error(err));
        await axios
            .get("http://localhost:3000/chat")
            .then((res) => res.data)
            .then((data) => dispatch(addChat(data)));
    };
    useEffect(() => {
        console.log(formState.isValid);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                css={input}
                type="text"
                {...register("chatContent", { required: true })}
            />
            <button css={send} type="submit" disabled={!formState.isValid}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
};
