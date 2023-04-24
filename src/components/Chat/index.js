/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef } from "react";

import ChatTop from "./ChatTop";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";

import { css } from "@emotion/react";

const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const components = css`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    background-color: #003488;
    color: #fff;
    height: 80vh;
`;
const listContainer = css`
    height: 100%;
    overflow-y: auto;
`

export default ({ user, setUser }) => {

    const listRef = useRef(null);

    return (
        <div css={container}>
            <div css={components}>
                <ChatTop user={user} setUser={setUser} />
                <div css={listContainer} ref={listRef}>
                    <ChatList listRef={listRef} />
                </div>
                <ChatForm userId={user.id}/>
            </div>
        </div>
    );
};
