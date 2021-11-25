import styled from "@emotion/styled";
import React, { cloneElement, useEffect, useState } from "react";
import IteminfoFooter from "./IteminfoFooter";
import IteminfoFooterwriter from "./IteminfoFooterwriter";
import { ProgressBar } from "./ProgressBar";
import { BiDotsVerticalRounded } from "react-icons/bi";
import BuyingEnd from "./Modal/BuyingEnd";
import ReseachEnd from "./Modal/ReseachEnd";
import BuyingStart from "./Modal/BuyingStart";
import BuyingStartEdit from "./Modal/BuyingStartEdit";
import { IoIosInformationCircleOutline, IoMdBatteryCharging } from "react-icons/io";
import OrderStart from "./Modal/OrderStart";
import NoticeModal from "./Modal/NoticeModal";
import { GetServerSideProps } from "next";
import axios, { AxiosResponse } from "axios";
import JoinModal from "./Modal/JoinModal";
import AfterFormSubmit from "./Modal/AfterFormSubmit";
import { ItemDescription, ItemProps } from "semantic-ui-react";
import { Center } from "@chakra-ui/layout";
import Image from "next/image";
import router from "next/router";
import { ProgressBarNum } from "./ProgressBarNum";

function label(num) {
    if (num === 0) {
        return "수요조사 진행"
    }
    else if (num === 1) {
        return "수요조사 마감"
    }
    else if (num === 2) {
        return "공구모집 진행"
    }
    else if (num === 3) {
        return "공구모집 마감"
    }
    else if (num === 4) {
        return "주문 진행"
    }
    else if (num === 5) {
        return "배송 시작"
    }
    else {
        return "배송 마감"
    }
}


var Iteminfo = ({ item, userObject }) => {
    // console.log(item)
    // console.log(userObject)
   
 


    const [ItemData, setItemData] = useState<any>();
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_ITEM_LIST as string + `/${item.itemId}`, { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log(res.data);
                setItemData(res.data);
                //console.log('test')
                //console.log(item);
                //console.log(userObject);
                //item.lobbyId === userObject.userId ? console.log(true) : console.log(false);
            }
        })
    }, [])


    const ChangeProgress = () => {
        console.log(item.progress)
         
        axios.get(process.env.NEXT_PUBLIC_ITEM_LIST as string + `/progress/3?itemId=1`, { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log(res.data);
                setItemData(res.data);
            }
        })
    }
    const tmpChange = () => {
        console.log(item.progress)
         
        axios.get(process.env.NEXT_PUBLIC_ITEM_LIST as string + `/progress/2?itemId=1`, { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                console.log(res.data);
                setItemData(res.data);
            }
        })
    }
   

    /*여기서 상태변화 관리 progress ++도 해줘야함 */
    const [ButtonColor, setButtonColor] = useState(false);
    const ChangeColor = () => {
        setIsShowingOrder(false);
        setButtonColor(true);
        ChangeProgress();
        
        const notiTimer = setTimeout(() => {
            location.href = '/view/1';
          }, 1500);
          return () => clearTimeout(notiTimer);

        
    }

    /* 팝업 */
    const [isShowing, setIsShowing] = useState(false);
    const openModal = () => {
        setIsShowing(true);
    };
    const closeModal = () => {
        setIsShowing(false);
    };
    useEffect(() => {

    }, [isShowing]);


    /* 주문진행하기 모달 하드코딩 시러 */
    const [isShowingOrder, setIsShowingOrder] = useState(false);
    const openModalOrder = () => {
        setIsShowing(false);
        setIsShowingOrder(true);

    };
    const closeModalOrder = () => {
        setIsShowingOrder(false);
        setButtonColor(true);
    };

    useEffect(() => {
        if (isShowing) {
            const notiTimer = setTimeout(() => {
                setIsShowingOrder(false);
            }, 3000);
            return () => clearTimeout(notiTimer);
        }
    }, [isShowingOrder]);

    /* 주문진행하기 모달 하드코딩 시러 */
    const [isShowingEnd, setIsShowingEnd] = useState(false);
    const openModalEnd = () => {
        setIsShowing(false);
        setIsShowingEnd(true);
    };
    const closeModalEnd = () => {
        setIsShowingEnd(false);
    };
    useEffect(() => {

    }, [isShowingEnd]);

    /* 공지사항 팝업 */

    const [isShowingNotice, setIsShowingNotice] = useState(false);
    function openModalNotice(){
        setIsShowing(false);
        setIsShowingNotice(true);
/*
        axios.post( process.env.NEXT_PUBLIC_ITEM_LIST as string + '/notice', {
            itemId : ItemData.itemId,
            notice : "test"
        })
            .then(function () {
                // response
                // console.log(res.data.result);
            }).catch(function (err: any) {
                // 오류발생시 실행
                console.log(err);
            }).then(function () {
                // 항상 실행
                router.reload();
            });    
            */    
    };
    const closeModalNotice = () => {
        setIsShowingNotice(false);
    };
    const writeNotice = () => {

    };
    useEffect(() => {

    }, [isShowingNotice]);


    /* 아이템 주문 팝업 */
    const [SubmitOn, setSubmitOn] = useState(false);
    const [isShowingItem, setIsShowingItem] = useState(false);
    const openModalItem = () => {
        setIsShowingItem(true);
        setSubmitOn(true);
    };
    const closeModalItem = () => {
        setIsShowingItem(false);
        setSubmitOn(false);
    };
    useEffect(() => {

    }, [isShowingItem]);

    /* 아이템 주문 팝업 */
    const [isShowingAfter, setIsShowingAfter] = useState(false);
    const openModalAfter = () => {
        setIsShowingAfter(true);
        setIsShowingItem(false);
    };
    const closeModalAfter = () => {
        setIsShowingAfter(false);
    };
    useEffect(() => {

    }, [isShowingAfter]);




    return (
        <div>
            <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <div>
                    {isShowingNotice && <NoticeModal itemId={ItemData.itemId} openModalNotice={openModalNotice} closeModalNotice={closeModalNotice} writeNotice={writeNotice} />}
                </div>
                <div>
                    {isShowing && <ReseachEnd closeModal={closeModal} openModalEnd={openModalEnd} openModalOrder={openModalOrder} />}
                </div>

                <div>
                    {isShowingOrder && <OrderStart closeModalOrder={closeModalOrder} openModalOrder={openModalOrder} ChangeColor={ChangeColor} />}
                </div>

                <div>
                    {isShowingEnd && <BuyingEnd closeModalEnd={closeModalEnd} />}
                </div>

                <div>
                    {isShowingItem && <JoinModal openModalItem={openModalItem} closeModalItem={closeModalItem} />}
                </div>

                <div>
                    {isShowingAfter && <AfterFormSubmit closeModalAfter={closeModalAfter} />}
                </div>
            </div>


            <Write>
                <ItemContent>
                    {item.itemId ? <img src={`/product_img_${item.itemId}.png`} alt={""} /> : <img src={`/product_img_3.png`} />}
                    <TextZone>
                        <label>{label(item.progress!)}</label>
                        <div className="TitleTag">
                            <span>{item.title!} </span><BiDotsVerticalRounded className="dot" />
                            <Tag>
                                {"#" + item.tag[0]}
                                {item.tag[1] ? "  #" + item.tag[1] : null}
                            </Tag>
                        </div>

                    </TextZone>

                    <Progressbar>
                        <div className="ProgressLabel">인원 달성도</div>
                        <ProgressBar width={246} percent={item.targetNum.currentNum! / item.targetNum.maxNum!} />
                    </Progressbar>
                    <Progressbar>
                        <div className="ProgressLabel">     </div>
                        <ProgressBarNum width={246} percent={item.targetNum.currentNum! / item.targetNum.maxNum!} Num = {item.targetNum.currentNum} Target = {item.targetNum.maxNum}/>
                    </Progressbar>
                    <Price>
                        <div className="PriceIndex">예상 가격</div>
                        <div className="EstimatePrice">
                            <div className="EachPrice">
                                최소 인원 달성 시
                                <label className="MinPrice">{item.price.maxPrice}원</label>
                            </div>
                            <div className="EachPrice">
                                최대 인원 달성 시
                                <label className="MaxPrice">{item.price.minPrice}원</label>
                            </div>

                        </div>
                    </Price>

                </ItemContent>
                <Profile>
                    <img src="/detailpage/ProfilePhoto.png" alt="" />
                    <div className="Lovbee">
                        <div className="LovbeeName">러비<div className="MyPageLink">마이 페이지</div></div>
                    </div>
                    <div className="TrustIndex">
                        <div className="TextZone">
                            신뢰 당도
                            <label>80% <IoIosInformationCircleOutline className="Icon" /></label>
                        </div>

                    </div>
                    <img src="/LoveySearch/TrustImg.png" alt="" className="TrustImg" onClick = {tmpChange} />
                </Profile>

                <Menu>
                    <div className="DircetMove">
                        <div className="DirectButton">공지사항</div>
                        <div className="DirectButton">제품 정보</div>
                        <div className="DirectButton">댓글</div>
                        <div className="DirectButton">정보 조회</div>
                    </div>
                </Menu>

                <ContentZone>
                    <Notice>
                        <MenuTitle>
                            <div className='NoticeTitle'>
                                <img src="/componentImg/HoneyIcon.png" alt="" />
                                <label>공지사항</label>
                                {userObject ?
                                    userObject.userId === 1 ?
                                    <img className="MoreButton" src="/button/NoticeMoreButton.png" onClick={openModalNotice} />
                                    : null
                                    : null
                                }
                            </div>
                            <div className="Noticearea">
                                <div className="MainText">· 수요조사 일정</div>
                                <div className="SubText">~ 2021.11.27 </div>
                                <></>
                                <div className="MainText">· 공구모집 일정</div>
                                <div className="SubText"> 2021.11.27 ~ </div>
                                <></>
                                <div className="MainText">· 최소/최대 인원</div>
                                <div className="SubText"> 최소 1(명) / 최대 8(명)</div>
                            </div>
                            {item && userObject?                            
                                new Array(item.notice.length).fill(0).map((_, idx) => (                                    
                                    <NoticeCard key = {idx}>
                                        <ProfileBox>
                                            <Image src="/profile_wonderful.png" alt="" width={17} height={17} />
                                            <UserName>러비</UserName>
                                        </ProfileBox>
                                        <Content>                     
                                            {item.notice[idx]}
                                        </Content>
                                    </NoticeCard>                     
                                ))
                                : null
                            }
                        </MenuTitle>
                    </Notice>

                    <img className="SeperateLine" src="/detailpage/SeperateLine.png" alt="" />

                    <ItemInfomation>
                        <MenuTitle>
                            <img src="/componentImg/HoneyIcon.png" />
                            <label>제품 정보</label>
                        </MenuTitle>
                        <div className="InfomationArea">
                            <div>안녕하세요 더비님들!</div>
                            <div>점점 추워지고 있는데 겨울나기☃ 준비 잘 하고 계신가요?</div>
                            <></><br />
                            <div>1theFull 인 제가</div>
                            <div>한(1)가지로 여러분들의 겨울을 꽉 채워드리려고(Full)</div>
                            <div><b>목도리</b>를 준비했습니다🔥</div>
                            <></><br />
                            <div>바로 비건 패션 브랜드</div>
                            <div><b>'제로나우리'의 에코퍼 목도리/워머</b> 입니다!!</div>


                            <img src="/detailpage/ItemImgMain.png" className="ItemImgMain" />

                            <div className="ref">※ 테스트 제품 이미지 입니다.</div>
                            <></>
                            <div>‘페이크 퍼’지만</div>
                            <div>진짜 밍크 못지 않은 따스함과 부드러움은 물론</div>
                            <div>동물도 살리는 착한 ‘에코퍼’목도리입니다🌱</div>

                            <img src="/detailpage/ItemImageSecond.png" className="ItemImgSub" />
                            <div style={{ marginBottom: '37px' }}>
                                <b>브랜드 ‘제로나우리’</b>는 매년 수익의 일부를 <br />
                                동물보호 단체에 기부하는 브랜드로<br />
                                동물실험을 하지 않으며<br />
                                동물의 털을 사용하지 않은 <br />
                                친환경적인 에코퍼로 동물 사랑을 지킵니다!<br />
                            </div>

                            <div style={{ marginBottom: '77px' }}>
                                저만 알고 싶은 브랜드 였는데,<br />
                                <b>비건 제품인 만큼 많은 분들이 가치소비를 하셨으면<br />
                                    좋겠다</b>고 생각되어 이렇게 공동구매를 열게 되었습니다!<br />
                            </div><br />
                            <div style={{ marginBottom: '10.13px', fontWeight: "Medium" }} className="ItemSize">
                                <div style={{ fontWeight: "bold", marginLeft: "33px", marginBottom: "10px" }}>제품 사이즈</div>
                                <div>Size <b>숏</b>: 18cm *   87cm</div>
                                <div>Size <b>롱</b>: 18cm * 110cm</div>

                            </div>


                            <img src="/detailpage/Itemdetail.png" style={{ marginBottom: '60px' }} />
                            <div style={{ fontWeight: "bold", marginBottom: '10px' }}>제품 색상 견본</div>
                            <div style={{ marginBottom: '10px' }}>
                                가장 무난하게 사용할 수 있는 색으로 <br />
                                <b>베이지, 블랙, 그레이</b>를 준비했습니다!<br />
                                기타 원하는 색상이 있으시다면 수요조사에 써주시면 됩니다.
                            </div>
                            <img src="/detailpage/Itemdetail2.png" style={{ marginBottom: '33.5px' }} />
                            <div style={{ marginBottom: '30px' }}>
                                많은 관심 부탁드려요!<br />
                                비건에 관심 많은 더비님들 환영합니다👍
                            </div>
                        </div>

                    </ItemInfomation>

                    <img className="SeperateLine" src="/detailpage/SeperateLine.png" />

                    <Comment>
                        <MenuTitle>
                            <img src="/componentImg/HoneyIcon.png" />
                            <label>댓글</label>
                        </MenuTitle>

                    </Comment>

                    <img className="SeperateLine" src="/detailpage/SeperateLine.png" />

                    <SellerInfomation>
                        <MenuTitle>
                            <img src="/componentImg/HoneyIcon.png" />
                            <label>정보 조회</label>
                            <div className="InfomationBox">
                                · 등록번호<br />
                                <div style={{ marginLeft: "37px", color: "#666666" }}>828-09-011227<br /></div>
                                · 상호 및 성명<br />
                                <div style={{ marginLeft: "37px", color: "#666666" }}>(주)제로나우리 | 박현운<br /></div>
                                · 소재지<br />
                                <div style={{ marginLeft: "37px", color: "#666666" }}>서울특별시 서초구 강남대로 12길 3, B1<br /></div>
                                · 업태 및 종목<br />
                                <div style={{ marginLeft: "37px", color: "#666666" }}>도,소매업 | 전자상거래(의류)</div>
                            </div>

                            <div className="InfomationButton">
                                <div>
                                    <button className="SellerView">판매업체 정보 조회</button>
                                    <button className="LoveyView">러비 정보 조회</button>
                                </div>
                                <button className="NumberView">운송장 번호 택배 조회</button>
                            </div>

                        </MenuTitle>

                    </SellerInfomation>

                    <NoticeImg>
                        <img src="/componentImg/SellNotice.png" />
                    </NoticeImg>

                    <div className="Footer">
                        {
                            userObject?
                            userObject.userId === 1  ? <IteminfoFooterwriter openModal={openModal} ButtonColor={ButtonColor} Progress = {item.progress} /> : <IteminfoFooter SubmitOn={SubmitOn} openModalItem={openModalItem} openModalAfter={openModalAfter}  />
                            : null
                        }
                        
                    </div>

                </ContentZone>
            </Write>



        </div>

    );

}

export default Iteminfo
const Write = styled.div`
  
    font-family: 'Roboto', sans-serif;
    margin-right:auto;
    margin-left:auto;
    justify-content:center;
    display: flex;
    flex-direction: column;
    width:360px;
    width-max:360px;
    
    .SeperateLine{
        margin-bottom: 25px;
    }
    .Footer{
        width:360px;
        position:fixed; 
        bottom:0px; 
        background: rgba(255,255,255,0.95);
        
    }
    img{
        
    }
    b{
        color: #7BCFFF;
    }
    .ItemSize{
        text-align:left;
        margin-left:115px;
    }
`
const ItemContent = styled.div`
    img{
        width:360px;
        margin-bottom: 14px;
    }
    
 
`
const Tag = styled.div`
    margin-top:6px;
    margin-bottom:19px;
`

const TextZone = styled.div`
    display:flex;
    margin-bottom: 6px;
       label{ 
        height:16px;
        margin-left:16px;
        margin-right: 12px;
        text-align: center;
        line-height:16px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 5px;
        border: 0.4px solid #C4C4C4;
        color: #686867;
        box-sizing: border-box;
        border-radius: 2px;
        float:left;
        width: 66px;
        margin-right:4px;
        
    }
    span{
        display:inline-block;
        width:230px;
        font-family: 'Roboto';
        font-size: 15px;
        font-style: normal;
        font-weight: bold;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
      
    }
    .TitleTag{
        margin-left:12px;
        font-family: Roboto;
        font-size: 10px;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: left;
    .TitleTag2{
        margin-left:12px;
        font-family: Roboto;
        font-size: 7px;
        font-style: normal;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: left;
    }
    .dot{
        position: block;
        left: 338px;
        top:268+66px;
        font-size:15px;
    }
        
    }
    
`
const ContentZone = styled.div`
   text-align:left;
   
`
const Progressbar = styled.div`
    
    display:flex;
    line-height:20px;
    vertical-align:middle;
    max-width:360px;
    width:360px;
    .ProgressLabel{
        vertical-align:middle;
        width: 100px;
        margin-right: 7px;
        margin-left:16px;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 0em;
    }
`
const Price = styled.div`
    margin-left : 16px;
    display:flex;
    text-align:left;
    
    .EstimatePrice{
        display:block;
        margin-left:107px;
    }
    .PriceIndex{
        
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
      
    }
    .EachPrice{
        
        color: #686867;
        font-family: Roboto;
        font-size: 11px;
        font-style: normal;
        font-weight: 500;
        line-height: 13px;
        letter-spacing: 0em;
        vertical-align: middle;
      
    }
    .MinPrice{
        margin-left: 13px;
        
        vertical-align:middle;
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        
    }
    .MaxPrice{
        margin-left: 23px;
        vertical-align:middle;
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFB000;
    }
    .DeliPrice{
        margin-left:20px;
        font-family: Roboto;
        font-size: 11px;
        font-style: normal;
        font-weight: 500;
        line-height: 13px;
        letter-spacing: 0em;
        text-align: center;
    }
    margin-bottom: 14px;
   
`
const Profile = styled.div`
    
    display:flex;
    height:60px;
    line-height:60px;
    border-top: 1px solid #C4C4C4;
    border-bottom: 1px solid #C4C4C4;
    vertical-align:middle;
    img{
        margin:0px;
        height:37px;
        width:37px;
        border-radius: 70px;
        margin-top:12px;
        margin-left:16px;
        margin-right:15px;
    }
    .Lovbee{
        padding-top:12px;
        width:152px;
        line-height:60px;
        margin-right:35px;
    }
    .LovbeeName{
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        
    }
    .MyPageLink{
        padding-top:6px;
        font-family: Roboto;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        color: #7BCFFF;
      
    }
    .TextZone{
        margin-top:16px;
        text-align:left;
        width:70px;
        
        
        
    }
    .TrustIndex{
        display:block;
        img{
            margin:0;
        }
        width:48px;
        font-family: Assistant;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 11px;
        letter-spacing: 0em;
        text-align: center;
    }
    label{
        margin-top:3px;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFBB0D;
    }
    .Icon{
        color:#E5E5E5;
        width:10px;
        height:10px;
    }
    .TrustImg{
        margin:0;
        margin-top:10px;
        margin-left:7px;
        
    }
    
`
const Menu = styled.div`
    display:flex;
    margin-bottom:26px;
    padding-left:0px;
    padding-right:0px;
    border-bottom: 2px solid #C4C4C4;
    
    div{
        text-align:center;
        height:40px;
        display:flex;
        font-family: Roboto;
   
        font-style: normal;
        font-weight: 500;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: center;
        
    }
    .DirectButton{
       
        display:block;
        text-align:center;
        padding-top:12px;
        width:90px;
   
    }
    
    .DirectButton:hover {
        color: #FFD15B;
        border-bottom: 3px solid #FFD15B;
        font-weight:400;
    }
    
`
const Notice = styled.div`
    .NoticeTitle{
        
        margin-bottom: 14.87px;
    }
    margin-bottom: 37px;
    
    
`
const MenuTitle = styled.div`
    padding-left:16px;
    margin-bottom:26.36px;
    text-align:left;
    img{
        vertical-align: middle;
        width:21.77px;
        height:21.13px;
    }
    label{
        font-weight: bold;
        vertical-align: middle; 
        font-size:14px;  
     
         
        
    }
    .Noticearea{
        padding-top:17px;
        padding-bottom:17px;
        padding-left:30px;
        text-align:left;
        width:328px;
        border-radius: 12px;
        border: 1px solid #FFD15B;
        font-family: Roboto;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
        .MainText{
            
            margin-bottom:7px;
            font-family: Roboto;
            font-size: 13px;
            font-style: normal;
            font-weight: bold;
            line-height: 15px;
            letter-spacing: 0em;
            text-align: left;
            
        }
        .SubText{
            margin-left:30px;
            margin-bottom:7.87px;
            font-family: Roboto;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 15px;
            letter-spacing: 0em;
            text-align: left;
            color:#666666;
        }
    }
    .MoreButton{
        margin-left:226.23px;
        vertical-align: bottom;
    }
    
   
`
const ItemInfomation = styled.div`
    text-align:center;
    font-family: Roboto;
   
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
    
    .InfomationArea{
        img{
            width:360px;
        }
        font-family: Roboto;
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: center;
        color:#686867;
        .ItemImgMain{
            margin-top:31px;
            
        }
        .ref{
            margin-bottom:30px;
        }
        .ItemImgSub{
            margin-top:30px;
            margin-bottom:30px;
            width:206px;
            height:223px;
            margin-left:auto;
            margin-right:auto;
        }
    }
    
`
const Comment = styled.div`
    text-align:left;
`
const SellerInfomation = styled.div`
    text-align:left;
    .InfomationBox{
        padding-top:17px;
        padding-bottom:17px;
        padding-left:14px;
        margin-top:15px;
        text-align:left;
        width:328px;
        border-radius: 12px;
        border: 1px solid #FFD15B;
        margin-bottom:15px; 
    }
    button{
        width:316px;
        height:38px;
        margin-bottom:15px;
    }
    
    .SellerView{
        width: 150px;
        margin-left:6px;
        border-radius: 5px;
        border: 1px solid #FFD15B;
        background: #FFFFFF;
        color: #FFBB0D;
    }
    .LoveyView {
        width: 150px;
        margin-left:16px;
        border-radius: 5px;
        border: 0px;
        background: #FFD15B;
        color: #FFFFFF;
    }
    .NumberView{
        width:316px;
        margin-left:6px;
        border-radius: 5px;
        border: 0px;
        background: #C4C4C4;
        color: #FFFFFF;
    }
`
const NoticeImg = styled.div`
    margin-bottom:43px;
    padding-left:16px;
    
  
`

const NoticeCard = styled.div`
    display : flex;
    flex-direction : column;
    height : 118px;
    margin-bottom:26.36px;
    text-align:left;
    width:328px;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    border-radius: 12px;

    font-family: Roboto;
    margin-bottom:7px;
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
`;

const UserName = styled.div`
    width : 51px;
    height : 16px;
    margin-left : 8px;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    
    color: #000000;
`;

const Content = styled.div`
    margin-top : 16px;
    margin-left : 39px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    align-items: center;
    
    color: #666666;
`;

const ProfileBox = styled.div`
    display : flex;
    flex-direction : row;

    margin-top : 16px;
    margin-left : 16px;
    z-index : 0;
`;