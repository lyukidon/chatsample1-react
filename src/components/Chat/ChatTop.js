/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { jsx, css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faBars,
    faMagnifyingGlass,
    faX,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/search";

function Search() {
    const dispatch = useDispatch();
    const search = useSelector((state)=>state.search);

    const onChange = (e) => {
        const data = e.target.value;
        dispatch(setSearch(data));
    };

    return (
        <div>
            <input type="text" onChange={onChange} />
        </div>
    );
}

const container = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
        background-color: rgba(0, 0, 0, 0);
        border: none;
        > svg {
            color: #fff;
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
    const [searchToggle, setSearchToggle] = useState(false);

    const onSearch = () => {
        setSearchToggle(!searchToggle);
    };

    return (
        <div css={container}>
            <button variant="outline-danger" onClick={logout}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {searchToggle ? <Search /> : <div>{user.id}</div>}
            <div>
                {searchToggle ? (
                    <button>
                        <FontAwesomeIcon icon={faX} onClick={onSearch} />
                    </button>
                ) : (
                    <button>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            onClick={onSearch}
                        />
                    </button>
                )}
                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    );
};
