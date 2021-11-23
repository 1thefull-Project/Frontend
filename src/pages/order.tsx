import React, { useState } from "react";
import styled from "@emotion/styled";

export default function Order() {
    const [addressInfo, setAddressInfo] = useState<boolean>(false);
    const toggleAddressInfo = () => setAddressInfo(addressInfo => !addressInfo);

    const [orderInfo, setOrderInfo] = useState<boolean>(false);
    const toggleOrderInfo = () => setOrderInfo(orderInfo => !orderInfo);

    return(
        <Layout>
            <p className='headline'>주문서</p>
            {/* 주문자 */}
            <Section>
                <Box style={{height: '50px'}}>
                    <Horizontal>
                        <p className='headline'>주문자</p> <p className='blue-text'>큐시즘</p> {/* 사용자 이름 */}
                    </Horizontal>
                </Box>
            </Section>

            {/* 배송지 */}
            <Section>
                {addressInfo ?  //배송지 직접 입력
                    <Box style={{height: '220px'}}>
                        <p className='headline'>배송지</p>
                        <Horizontal>
                            <input placeholder='  우편번호' className='mini-box' style={{width: '181px'}} /><div className='btn_code'>우편번호 찾기</div>
                        </Horizontal>
                        <input placeholder='  주소' className='mini-box' />
                        <input placeholder='  상세주소' className='mini-box' />
                        <input placeholder='  전화번호' className='mini-box' />
                    </Box>
                :               //기본 결제수단 불러오기
                    <Box style={{height: '119px'}}>
                        <p className='headline'>배송지</p>
                        <p className='basic-text'>(12345) 서울시 서초구 강남대로 53길 8(원더동, 풀아파트), 210동 1127호</p>
                        <p className='basic-text'>010-9876-5432</p>
                    </Box>
                }
                
                <Check onClick={toggleAddressInfo}>
                    <img src={addressInfo ? "/button/order_uncheck.png" : "/button/order_check.png"} alt="" width={13} height={13} style={{marginTop: '6px', marginLeft: '16px'}}/>
                    <p style={{marginLeft: '11px'}} className='basic-text' >나의 기본 배송지 불러오기</p>
                </Check>
            </Section>

            {/* 결제수단 */}
            <Section>
                {orderInfo ?    //결제수단 직접 입력
                    <Box style={{height: '100px'}}>
                        <p className='headline'>결제수단</p>
                        <Horizontal>
                            <YellowBox>신용카드</YellowBox>
                            <YellowBox>계좌이체</YellowBox>
                            <YellowBox>휴대폰결제</YellowBox>
                        </Horizontal>
                    </Box>
                :               //기본 결제수단 불러오기
                    <Box style={{height: '80px'}}>
                        <p className='headline'>결제수단</p>
                        <p className='basic-text'>원더카드 / 123456******789*, 일시불</p>
                     </Box>
                }
                <Check onClick={toggleOrderInfo}>
                    <img src={orderInfo? "/button/order_uncheck.png" : "/button/order_check.png"} alt="" width={13} height={13} style={{marginTop: '6px', marginLeft: '16px'}}/>
                    <p style={{marginLeft: '11px'}} className='basic-text' >나의 기본 결제수단 불러오기</p>
                </Check>
            </Section>

            {/* 주문상품 */}
            <Section>
                <p className='headline'>주문상품</p>
                <Horizontal>
                    <img src="/order_item.png" alt="" width={82} height={80} style={{marginBottom: '8px'}}/>
                    <BasicBox style={{width: '235px', height: '80px'}}>
                        <p className='basic-text'>비건 에코퍼 겨울 목도리/워머<br/>색상: 베이지 / 수량: 1개</p>
                        <p className='mini-text'>[주최자] 1theFull<br/>[판매업체] (주)제로나우리</p>
                    </BasicBox>
                </Horizontal>
                <BasicBox style={{width: '328px', height: '125px'}}>
                <p className='headline'>최종 결제 금액</p>
                    <Horizontal style={{width: '254px', marginLeft: '19px'}}>
                        <p className='basic-text'>총 상품가격<br/>배송비</p>
                        <p className='basic-text' style={{textAlign: 'right'}}>10,900원<br/>2,000원</p>
                    </Horizontal>
                    <Bar style={{marginLeft: '-13px'}}/>
                    <Horizontal style={{width: '254px', marginLeft: '19px'}}>
                        <p className='headline' style={{marginTop: '12px'}}>총 결제 금액</p>
                        <p className='headline' style={{color: '#7BCFFF'}}>12,900원</p>
                    </Horizontal>
                </BasicBox>
            </Section>
            <p className='under-text'>구매 및 결제대행서비스 이용약관</p>
            <p className='under-text'>개인정보 제공안내</p>

            {/*결제하기 버튼*/}
            <MenuBar>
                <div className='btn_payment'>결제하기</div>
            </MenuBar>
        </Layout>
    );
}

const Layout = styled.div`
    width:360px;
        
    margin-right:auto;
    margin-left:auto;
    padding-top: 21px;
    padding-left: 16px;
    padding-right: 16px;

    justify-content:center;
    display: flex;
    flex-direction: column;
    text-align: center;

    .headline{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        

        color: #686867;
    }

    .blue-text{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 14px;
        color: #7BCFFF;
    }

    .basic-text{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #686867;
        text-align: left;
    }

    .mini-text{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 9px;
        line-height: 11px;
        color: #686867;
        text-align: left;
    }

    .under-text{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-decoration-line: underline;
        color: #686867;
        
        margin-left: 14px;
    }
`;

const Box = styled.div`
    width: 328px;
    padding-top: 16px;
    padding-left: 14px;
    padding-right: 14px;

    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
    border-radius: 5px;
`;

const Section = styled.section`
    margin-bottom: 20px;

    .mini-box{
        width: 300px;
        height: 35px;
        margin-bottom: 5px;

        background: #FFFFFF;
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .btn_code{
        width: 105px;
        height: 30px;
        margin-left: 11px;

        justify-content:center;
        display: flex;
        flex-direction: column;
        text-align: center;

        background: #FED15E;
        border-radius: 5px;

        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
    }
`;

const Horizontal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Check = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;

    cursor : pointer;
`;

const YellowBox = styled.div`
    width: 90px;
    height: 31px;
    background: #FFFFFF;
    border: 1px solid #FFB000;
    box-sizing: border-box;
    border-radius: 2px;

    justify-content:center;
    display: flex;
    text-align: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;

    color: #FFB000;
`;

const BasicBox= styled.div`
    padding-top: 12px;
    padding-left: 15px;
    padding-bottom: 10px;
    margin-bottom: 8px;

    background: #FFFFFF;
    border: 1px solid #EBEBEB;
    box-sizing: border-box;
`;

const Bar = styled.div`
    width: 319px;
    height: 0px;
    border: 1px solid #EBEBEB;
`;

const MenuBar = styled.div`
    width: 360px;
    height: 60px;
    background: rgba(254, 254, 254, 0.95);

    display: flex;
    align-items: center;
    justify-content:center;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    .btn_payment{
        width: 295px;
        height: 38px;
        background: #FFD15B;
        border-radius: 5px;

        cursor : pointer;

        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content:center;
        color: #FFFFFF;
    }

`