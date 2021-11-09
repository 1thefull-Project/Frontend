import styled from "@emotion/styled";
import React from "react";


interface ItemProps {
    title: string;
  }


export default function Content({img, title, desc, tag}) {
    return(
        <Box>
            <img src = {img} alt={title} title={title}/>
            
            <Tag>

            </Tag>

            <Tittle>

            </Tittle>
        </Box>
    );
}


const Box = styled.div`

`;
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

