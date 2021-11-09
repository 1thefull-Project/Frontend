import styled from "@emotion/styled";
import React from "react";

export default function Content() {
    return(
        <div>
            <Tag>

            </Tag>
            <Tittle>

            </Tittle>
        </div>
    );
}


const Tag = styled.span `
`;
const Tittle = styled.span `
    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #000000;
`;

