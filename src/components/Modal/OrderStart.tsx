import styled from "@emotion/styled";

var OrderStart = ({closeModalOrder, openModalOrder,ChangeColor}) => {
    return(
        <div>
            <Modal>
                 <div className = "Box">
                     <div className = "Title">주문 진행하기</div>
                     <div className = "Text">
                         <div>공구모집을 종료하고</div>
                         <div>주문을 진행하시겠습니까?</div>
                         
                     </div>
                   
                     <div>
                        <button className = "Yes" onClick = {ChangeColor}>예</button> 
                        <button className = "No" onClick = {closeModalOrder}>아니오</button>  
                     </div>
                 </div>
                 <img src = "/detailpage/popup_char_hide.png" className = "bee"/>
             </Modal>
        </div>
     );

}

export default OrderStart
   
 
 
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
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
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
         top:188px;
         z-index:2;
         
     }
 
     .Title{
         margin-top:22px;
         margin-bottom:26.48px;

         font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color:#666666;

     }
     
     .Text{
         margin-left:auto;
         margin-right:auto;
         margin-bottom:30.69px;
        width: 170px;
        text-align:centere;


        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
        

        color:#666666;

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