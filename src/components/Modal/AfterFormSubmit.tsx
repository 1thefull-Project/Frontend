import styled from "@emotion/styled";
import  Router  from "next/router";
import { useState } from "react";
import { Button } from "semantic-ui-react";

const AfterFormSubmit = ({closeModalAfter}) =>{
    const targetPage = "/order";
    var MovePage = () => {
        return Router.push(targetPage);
    }
    return(
        <div>
            <Modal>
                 <div className = "Box">
                     <div className = "Title">공동구매 참여하기</div>
                     <div className = "TextArea">
                         <div className = "Text">
                         공동구매에 참여하시겠습니까?
                     </div>
                     <div className = "SubText">
                        ※ 참여 인원은 공동구매 과정에 큰 영향을 미치므로 신중하게 선택하시길 바랍니다.
                     </div>
                     </div>
                     <div>
                        <button className = "Yes" onClick = {MovePage}>예</button> 
                        <button className = "No" onClick = {closeModalAfter}>아니오</button>  
                     </div>
                 </div>
                 <img src = "/detailpage/popup_char_hide.png" className = "bee"/>
             </Modal>
        </div>
     );

}

export default AfterFormSubmit


const Modal = styled.div`

     justifyContent: center;
     alignItems: center;
     position: fixed;
     top: 188px;
     left: 128.86px;
     width: 100%;
     height: 50;
 
     font-family: NotoSansKR;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 19px;
     letter-spacing: 0em;
     text-align: center;
 
     
     .Box{
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
         position: fixed;
         background: rgba(255,255,255,0.95);
         height: 171px;
         width: 320px;
         left: 20px;
         top: 225px;
         border-radius: 15px;
         z-index:1;
 
     }
     .bee{
         position: fixed;
         left:123px;
         top:166px;
         z-index:2;
         
     }
 
     .Title{
         margin-top:19.59px;
         margin-bottom:24px;

        
        font-family: NotoSansKR;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color:#666666;

     }
     .TextArea{
         margin-left:auto;
         margin-right:auto;
         margin-bottom:24.83px;
         text-align:center;
         width:220px;
     }
     
     .Text{
         
        text-align:center;

        font-family: NotoSansKR;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
        
        margin-bottom:4px;


        color:#666666;

     }
     .SubText{
        
        font-family: NotoSansKR;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: center;
        cololr: #666666;
     }
 
     button{
        height: 30.28125px;
        width: 110px;
        left: 53px;
        top: 433.6873779296875px;
        border-radius: 17px;
        

        font-family: NotoSansKR;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;

        
     }
     .Yes{
        margin-right:33px;

        background-color: #FED15E;
        border: 0px solid #FED15E;
        color: #ffffff;
    }

    .No{

        background-color: #C4C4C4;
        border: 0px solid #FED15E;
        color: #ffffff;

    }
 
   
    
 
 `