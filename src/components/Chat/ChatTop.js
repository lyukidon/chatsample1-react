/** @jsxImportSource @emotion/react */

import React from "react";
import { jsx, css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";

const container = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > button {
        background-color: rgba(0,0,0,0);
        border:none;
        > svg {
            color: #fff
        }
    }
`;

export default ({ user, setUser }) => {
    const logout = () => {
        setUser({
            id: "",
            pw: "",
        });
    };
    return (
        <div css={container}>
            <button variant="outline-danger" onClick={logout}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div>{user.id}</div>
            <button>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    );
};
