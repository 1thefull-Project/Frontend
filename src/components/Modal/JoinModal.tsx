import styled from "@emotion/styled";
import axios from "axios";
import {BsChevronCompactDown} from "react-icons/bs";

var JoinModal = ({openModalItem, closeModalItem}) => {

 
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
            
      margin-bottom:19px;
    }

    option{
      font-family: Roboto;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      
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