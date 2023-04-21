/** @jsxImportSource @emotion/react */

import React from "react";
import { useForm, Controller } from "react-hook-form";

import { jsx, css } from "@emotion/react";

const container = css`
    padding: 100px;
    background-color:  #003488;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const title = css`
    color: #fff;
    font-size: 20px;
    padding: 20px
`

const formContainer = css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const inputContainer = css`
    display:flex;
    flex-direction: column;
    margin: 10px 0;
`

export default ({ user, setUser }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { id, pw } = data;
        setUser({
            id,
            pw,
        });
    };

    return (
        <div css={container}>
            <div css={title}>Chat</div>
            <form css={formContainer} onSubmit={handleSubmit(onSubmit)}>
                <div css={inputContainer}>
                    <input type="text" placeholder="ID" {...register("id")} />
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        {...register("pw")}
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};
