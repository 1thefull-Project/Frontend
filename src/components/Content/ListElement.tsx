import styled from "@emotion/styled";
import React, { useState } from "react";

interface DobbyListProps {
    title: string;
    name: string;
    font: number;
    data: any;
}
export const ListElement: React.FC<DobbyListProps> = ({ title, name, font, data }) => { 
    console.log(data);

    return (
        <>
        {data === undefined? 
            <>
            </>
            : // api 받아올때
            <>
                <Title>{title}</Title>
                {data.dobbyList.map((data, idx) => (
                    <Content key = {idx}>{data.name}</Content>
                ))}
            </>
        }
        </>
    )
}

const Title = styled.div`
    width: 102px; 
    height: 28.58px;

    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;

    font-family: NotoSansKR;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center;

    color: #686867;
`;

const Content = styled.div`
    width: 102px;
    height: 32.16px;

    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;
`;