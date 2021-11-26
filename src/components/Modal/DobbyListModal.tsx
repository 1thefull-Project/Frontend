import React, { useState, useEffect } from "react";
import axios, {AxiosResponse} from 'axios';
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListElement } from '../Content/ListElement'

 export const DobbyListModal = ({closeModalAfter}) => {

    const [dobbyList, setDobbyList] = useState<any>();
    
    useEffect(() => {
        async function getDobbyList(){
            await axios.get(process.env.NEXT_PUBLIC_GET_DOBBYLIST as string + '/1', { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log(res.data);
                setDobbyList(res.data);
            }
        })
        }
        getDobbyList()
    }, [])

    var settings1 = {
        dots: false,
        infinite: false,
        slidesToScroll: 3,
        speed: 1000,
        cssEase: 'ease',
        variableWidth: true,
      };

    return(
        <div>
            <Modal>
                 <div className = "Box">
                    <img src="/button/dobbyList_excel_save.png" alt="" width={148} height={20} className='btn_excel'/>

                    { dobbyList ?
                    <>
                     <ListArea className = "wrap">
                     { dobbyList === undefined ?
                        <>
                        </>
                        :   // api 받아올때
                        <>
                            <Slider {...settings1}>
                                <div>
                                    <Title style={{width: '32px'}}>번호</Title>
                                    {dobbyList.dobbyList.map((data, idx) => (
                                        <Content key = {idx} style={{width: '32px', background: '#F9F9F9'}}>{idx+1}</Content>
                                    ))}
                                </div>
                                <div>
                                    <Title style={{width: '57px'}}>이름</Title>
                                    {dobbyList.dobbyList.map((data, idx) => (
                                        <Content key = {idx} style={{width: '57px'}}>{data.name}</Content>
                                    ))}
                                </div>
                                <div>
                                    <Title style={{width: '138px'}}>주문 상세내용</Title>
                                    {dobbyList.dobbyList.map((data, idx) => (
                                        <Content key = {idx} style={{width: '138px', fontSize: '8px'}}>{data.option}</Content>
                                    ))}
                                </div>
                                <div>
                                    <Title style={{width: '187px'}}>주소</Title>
                                    {dobbyList.dobbyList.map((data, idx) => (
                                        <Content key = {idx} style={{width: '187px', fontSize: '8px'}}>{data.address}</Content>
                                    ))}
                                </div>
                                <div>
                                    <Title style={{width: '90px'}}>전화번호</Title>
                                    {dobbyList.dobbyList.map((data, idx) => (
                                        <Content key = {idx} style={{width: '90px'}}>{data.phone}</Content>
                                    ))}
                                </div>
                                <div>
                                    <Title style={{width: '57px'}}>주문 금액</Title>
                                    {dobbyList.dobbyList.map((data, idx) => (
                                        <Content key = {idx} style={{width: '57px'}}>{data.orderPrice}</Content>
                                    ))}
                                </div>
                                <div>
                                    <Title style={{width: '57px'}}>결제 금액</Title>
                                    {dobbyList.dobbyList.map((data, idx) => (
                                        <Content key = {idx} style={{width: '57px'}}>{data.payPrice}</Content>
                                    ))}
                                </div>
                                {/* <div><ListElement title='이름' name='name' font={12} data={dobbyList}/></div>
                                <div><ListElement title='주문 상세내용' name='option' font={12} data={dobbyList}/></div>
                                <div><ListElement title='주소' name='address' font={12} data={dobbyList}/></div>
                                <div><ListElement title='전화번호' name='phone' font={12} data={dobbyList}/></div>
                                <div><ListElement title='주문 금액' name='orderPrice'font={12} data={dobbyList}/></div>
                                <div><ListElement title='결제 금액' name='payPrice' font={12} data={dobbyList}/></div> */}
                            </Slider>
                        </>
                        }
                     </ListArea>
                     </>
                     : null
                    }
                     <CLOSEBTN onClick = {closeModalAfter}>
                        <p>닫기</p>
                    </CLOSEBTN>
                 </div>
             </Modal>
        </div>
     );

}
export default DobbyListModal;

const Modal = styled.div`

    justifyContent: center;
    alignItems: center;
    position: fixed;
    top: 96px;
    left: 20px;
    width: 100%;
    height: 50;

    .Box{
        position: fixed;
        background: rgba(255, 255, 255, 0.97);
        height: 479px;
        width: 320px;
        border-radius: 15px;
        z-index:1;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    }

    .btn_excel{
        position: fixed;
        left: 178px;
        top: 110px;
    }
    `;

    const ListArea = styled.div`
        width: 320px;
        height: 343px;
        position: fixed;
        left: 20px;
        top: 151px;
        overflow: hidden;
    `;

    const Title = styled.div` 
    height: 28.58px;

    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center;

    color: #686867;
`;

const Content = styled.div`
    height: 40px;

    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content:center;

    color: #686867;
`;

    const CLOSEBTN = styled.div`
        width: 110px;
        height: 30.28px;
        position: fixed;
        left: 125px;
        top: 522px;
        background: #FED15E;
        border-radius: 17px;

        p{
            position: fixed;
            left: 165px;
            top: 529.5px;

            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;

            color: #FFFFFF;
        }
    `;