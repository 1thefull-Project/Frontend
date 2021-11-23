import styled from "@emotion/styled";

var OrderModal = () => {
    return(
        <div>
            <Modal>
                 <div className = "Box">
                     <div className = "Title">결제중</div>
                     <img src = "/detailpage/popup_char_order1.png" className = "bee"/>
                 </div>
             </Modal>
        </div>
     );

}
export default OrderModal;
   
 const Modal = styled.div`

     justifyContent: center;
     alignItems: center;
     position: fixed;
     top: 168px;
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
         height: 154px;
         width: 320px;
         left: 20px;
         top: 280px;
         border-radius: 15px;
         z-index:1;
         box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
 
     }
     .bee{
         position: fixed;
         left:110px;
         top:345px;
         z-index:2;
         
     }
 
     .Title{
         margin-top:30px;

         font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: center;
        color:#666666;
     }
 `