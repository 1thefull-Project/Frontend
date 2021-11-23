import React, { useState } from "react";
import { AlarmCard } from "../AlarmCard";

interface IAlarmListProps {
    data: any;
}
export const AlarmList: React.FC<IAlarmListProps> = ({ data }) => { 
    console.log(data);


return (
    <>
    {data === undefined? 
        <>
        </>
        : // api 받아올때
        <>
            {new Array(data.lobbyAlarm.length).fill(0).map((_, idx) => ( 
            <AlarmCard
                        key = {idx}
                        itemId = {data.lobbyAlarm[idx].itemId}
                        content = {data.lobbyAlarm[idx].content}
                        isLobby = {true}
            />
            ))}
            {new Array(data.dobbyAlarm.length).fill(0).map((_, idx) => ( 
            <AlarmCard
                        key = {idx}
                        itemId = {data.dobbyAlarm[idx].itemId}
                        content = {data.dobbyAlarm[idx].content}
                        isLobby = {false}
            />
            ))}            
        </>
    }
    </>
)
}