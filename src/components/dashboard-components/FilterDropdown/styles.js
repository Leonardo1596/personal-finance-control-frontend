import styled from "styled-components";

export const FilterDropdown = styled.div`
    button {
        background-color: rgb(106, 90, 205);
        color: white;
        border: 1px solid grey;
        border-radius: 15px;
        width: 100px;
        height: 35px;
        outline: none;
    }

    button:hover {
        background-color: rgb(80, 90, 150);
    }

    a {
        cursor: pointer;
    }

    a:hover {
        background-color: rgb(106, 90, 205);
        color: white;
    }
`;