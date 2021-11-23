import React, { useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { myContext } from "../context";
import { User } from '../pages/types/usertypes';
import { AlarmList } from '../components/Content/AlarmCard-list';

export default function Alarm(){
    const userObject = useContext(myContext) as User;
    console.log(userObject);

    const testData = {
        _id: "619bae2dba15934cdf333002",
        googleId: "115031468865039700441",
        userId: 1,
        name: "공구비",
        email: "09beee@gmail.com",
        phone: "010-9876-5432",
        deal: 10,
        follower: 83,
        following: 12,
        resentProduct: [
            13
        ],
        ongoingProduct: [
            14,
            15
        ],
        address: "서울특별시 공동구 구매로 21길 9-20호",
        lobbyAlarm: [
            {
            itemId: 8,
            content: "진행 중인 '구르미 그린 조명'의 공구모집 최소 인원이 충족되었습니다. 주문을 진행해보세요!",
            _id: "619bd7608bead400608503a1"
            }
        ],
        dobbyAlarm: [
            {
            itemId: 8,
            content: "참여 중인 '구르미 그린 조명'의 새로운 공지사항이 업로드되었습니다. 공지사항을 확인해보세요!",
            _id: "619bd5efc5485cc23138464b"
            },
            {
            itemId: 1,
            content: "참여 중인 '비건 에코퍼 겨울 목도리/워머'의 새로운 공지사항이 업로드되었습니다. 공지사항을 확인해보세요!",
            _id: "619bd6cac5485cc231384664"
            }
        ],
        createdAt: "2021-11-22 23:50:21",
        __v: 0
    }



    return(
            <Section1>
                <div className="wrap">
                    <Title>알림 내역</Title>
                    { !userObject.userId ?
                    <>          
                    <AlarmList data={testData}/>
                    </>
                    : null
                    }
                </div>
            </Section1>
    );
}
const Section1 = styled.section`
    width : 360px;
    margin-right :auto;
    margin-left :auto;
    display : flex;
    flex-direction : column;
    justify-content : left;
    text-align : left;
    .wrap{
        margin-top: 20px;
    }
    
    font-family : Roboto;
    font-style : normal;
    font-weight : normal;
    font-size : 11px;
    color : #000000;

`;

const Title = styled.div`
    width: 100px;
    height: 22px;

    margin-left : 19px;
    margin-bottom : 16px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #666666;
`;