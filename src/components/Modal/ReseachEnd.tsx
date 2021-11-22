import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "semantic-ui-react";

export default function BuyingEnd () {
   
    return(
       <div>
           <Modal>
                <div className = "Box">
                    <div className = "Title">수요조사 마감하기</div>
                    <div>
                        <button className = "EndButton">공동구매 종료하기</button>   
                    </div>
                        <button className = "StartButton">공동구매 시작하기</button>  
                    <div>
                    <button className = "Cancel">취소</button>  
                    </div>
                </div>
                <img src = "/detailpage/popup_char_hide.png" className = "bee"/>
            </Modal>
       </div>
    );
}


const Modal = styled.div`

    justifyContent: center;
    alignItems: center;
    position: fixed;
    top: 188px;
    left: 128.86px;
    width: 100%;
    height: 50;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;

    
    .Box{
        position: fixed;
        background: rgba(255,255,255,0.95);
        height: 217px;
        width: 320px;
        left: 20px;
        top: 247px;
        border-radius: 15px;
        z-index:1;

    }
    .bee{
        position: fixed;
        left:123px;
        top:188px;
        z-index:2;
        
    }

    .Title{
        margin-top:22px;
        margin-bottom:14px;
    }

    .EndButton{
        margin-bottom:7.63px;


        height: 40.685794830322266px;
        width: 237px;
        left: 61px;
        top: 364px;
        border-radius: 6px;

        background-color: #FFFFFF;
        border: 1px solid #C4C4C4;
        color: #C4C4C4;

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;

    }

    .Cancel{
        height: 38.42708206176758px;
        width: 110px;
        left: 125px;
        top: 469.2291259765625px;
        border-radius: 19.21354103088379px;
        

        background-color: #FED15E;
        border: 1px solid #FED15E;
        color: #FFFFFF;

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;



    }

    .StartButton{
        margin-bottom:16.23px;

        height: 40.685794830322266px;
        width: 237px;
        left: 61px;
        top: 412.314208984375px;
        border-radius: 6px;

        background-color: #FFFFFF;
        border: 1px solid #FFD15B;
        color: #FFD15B;

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;


    }

   

`