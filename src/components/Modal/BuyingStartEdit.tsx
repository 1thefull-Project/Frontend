import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "semantic-ui-react";

export default function BuyingStart () {
   
        return(
                <div>
                    <Modal>
                         <div className = "Box">
                             <div className = "Title">공동구매 시작</div>
                             <div className = "TextArea">
                                 <div className = "Text">
                                 해당 게시글을 수정하시겠습니까?
                             </div>
                             <div className = "SubText">
                                ※ 공동구매 진행 후에는 글을 수정할 수 없으며 공지 추가 기능만 사용 가능합니다.
                             </div>
                             </div>
                             <div>
                                <button className = "Yes">네</button> 
                                <button className = "No">아니오</button>  
                             </div>
                         </div>
                         <img src = "/detailpage/popup_char_show.png" className = "bee"/>
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
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
         position: fixed;
         background: rgba(255,255,255,0.95);
         height: 171px;
         width: 320px;
         left: 20px;
         top: 247px;
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

        
        font-family: Roboto;
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

        font-family: Roboto;
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
        
        font-family: Roboto;
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
        

        font-family: Roboto;
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