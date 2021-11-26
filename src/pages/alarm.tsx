import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { AlarmList } from '../components/Content/AlarmCard-list';
import axios, {AxiosResponse} from 'axios';

export default function Alarm(){
    const [userObject, setUserObject] = useState<any>();
    
    //로그인한 사용자 정보 api 불러오기
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_GET_USER as string, { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log(res.data);
                setUserObject(res.data);
            }
        })
    }, [])    

    return(
            <Section1>
                <div className="wrap">
                    <Title>알림 내역</Title>
                    { userObject ?
                    <>          
                    <AlarmList data={userObject}/>
                    <div style={{height: '200px'}}/>
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
    
    font-family : NotoSansKR;
    font-weight:bold;
    font-size : 11px;
    color : #000000;

`;

const Title = styled.div`
    width: 100px;
    height: 22px;

    margin-left : 19px;
    margin-bottom : 16px;

    font-family: NotoSansKR;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #666666;
`;