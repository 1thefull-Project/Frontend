import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "semantic-ui-react";


var BuyingEnd = ({closeModal, openModalEnd, openModalOrder}) => {
    return(
        <div>
            <Modal>
                 <div className = "Box">
                     <div className = "Title">공구모집 마감하기</div>
                     <div>
                         <button className = "EndButton" onClick = {openModalEnd}>공구 종료하기</button>   
                     </div>
                         <button className = "StartButton" onClick = {openModalOrder}>주문 진행하기</button>  
                     <div>
                     <button className = "Cancel" onClick = {closeModal }>취소</button>  
                     </div>
                 </div>
                 <img src = "/detailpage/popup_char_hide.png" className = "bee"/>
             </Modal>
        </div>
     );

}

export default BuyingEnd
   
   



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
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
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