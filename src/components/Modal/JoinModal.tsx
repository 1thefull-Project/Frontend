import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import {BsChevronCompactDown} from "react-icons/bs";

var count = 0;

var JoinModal = ({openModalItem, closeModalItem}) => {
   
   const [Items, countItem] = useState(count);
   const Add = () =>{
      count += 1;
      countItem(count);

   };

   const DisCount = () =>{
      count -= 1;
      countItem(count);

   };

   

 
    return(
        <div>
            <Modal>
                 <div className = "Box">
                    <div className = "Icon" onClick = {closeModalItem}><BsChevronCompactDown /></div>
                    <div className = "Title">공동구매 참여 폼</div>
                    <div className = "subTitle">색상</div>
                    <select>
                       <option value = "베이지">베이지</option>
                       <option value = "블랙">블랙</option>
                       <option value = "그레이">그레이</option>
                    </select>
                    <div className = "subTitle">사이즈</div>
                    <select>
                       <option value = "Long">롱(Long) - 110cm</option>
                       <option value = "Short">숏(Short) - 87cm</option>
                    </select>
                    <div className = "subTitle">개수</div>
                    <div style = {{display: "flex"}}>
                    <img src = "/detailpage/ItemDelete.png" onClick = {DisCount} style = {{marginLeft: "30.08px", marginRight: "14.38px", width: "24.64px", height:"24px", marginTop:"6.17px"}}/>
                     <div className = "CountBox">{Items}</div>
                     <img src = "/detailpage/ItemPlus.png" onClick = {Add} style = {{marginLeft: "14.38px", width: "24.64px", height:"24px", marginTop:"6.17px"}}/>
                    </div>
                 </div>
             </Modal>
        </div>
     );

}

export default JoinModal



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
   .CountBox {
      height: 35px;
      width: 223.85235595703125px;
      left: 69.1015625px;
      top: 681.171875px;
      border-radius: 5px;
      vertical-align: middle;
      padding-top:8px;
      font-size:16px;
      border: 1px solid #C4C4C4;

   }
  
    position: fixed;
    background: rgba(255,255,255,0.95);
    height: 358px;
    width: 360px;
    left: 0px;
    top: 247px;
    border-radius: 15px;
    z-index:3;

    select{
      height: 34.7095947265625px;
      width: 306px;
      left: 27px;
      top: 522.556640625px;
      border-radius: 5px;
      background: rgba(255,255,255,0.95);    
      margin-bottom:19px;

      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;

      option{
         background-color:#FFFFFF;
         font-family: Roboto;

      }
    }

    .Title{
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: center;

      color: #797979;

      margin-bottom:21.21px;

    }
    .subTitle{
       margin-left:27px;
       margin-bottom:9.13px;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
   
      color: #606060;

    }

}

.Icon{
   margin-top : 13px;
   margin-bottom:15.68px;
   color: #797979;

   font-family: Roboto;
   font-size: 16px;
   font-style: normal;
   font-weight: 700;
   line-height: 19px;
   letter-spacing: 0em;
   text-align: center;

}

`