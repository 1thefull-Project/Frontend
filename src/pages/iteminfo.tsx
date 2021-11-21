import styled from "@emotion/styled";
import React from "react";
import IteminfoFooter from "../components/IteminfoFooter";
import IteminfoFooterwriter from "../components/IteminfoFooterwriter";
import { ProgressBar } from "../components/ProgressBar";
import {BiDotsVerticalRounded} from "react-icons/bi";
import {IoIosInformationCircleOutline} from "react-icons/IO"


interface ItemProps {
    name: String;
    image: String;
    state:String;
    tag: any[];
  }


  export default function Iteminfo(item: any){
    // const {image, title, state, name} = item;
    return(
        <div>
            <Write>
                <ItemContent>
                    <img src = "/product_img_bts.png" alt= {""}/>
                    <TextZone>
                        <label>공구모집 중</label>
                        <div className = "TitleTag">
                            <span>비건 에코퍼 겨울 목도리/워머 <BiDotsVerticalRounded className = "dot"/> </span>
                            <Tag>#잡화/주얼리</Tag>
                        </div>
                        
                    </TextZone>
                        
                    <Progressbar>
                        <div className= "ProgressLabel">인원 달성도</div>
                        <ProgressBar  width={246} percent={0.5} />
                    </Progressbar>
                    <Price>
                        <div className = "PriceIndex">예상 가격</div>
                        <div className = "EstimatePrice">
                            <div className = "EachPrice">
                                최소 인원 달성 시
                                <label className = "MinPrice">10,900</label>
                            </div>
                            <div className = "EachPrice">
                                최대 인원 달성 시
                                <label className = "MaxPrice">8,800</label>
                            </div>
                        </div>
                    </Price>
    
                </ItemContent>
                <Profile>
                    <img src = "/detailpage/ProfilePhoto.png"/>
                    <div className = "Lovbee">
                        <div className = "LovbeeName">1theFull <div className = "MyPageLink">마이 페이지</div></div>
                    </div>
                    <div className = "TrustIndex">
                        <div className = "TextZone">
                            신뢰 당도
                            <label>80% <IoIosInformationCircleOutline className = "Icon"/></label>
                        </div>
                       
                    </div>
                    <img src = "LoveySearch/신뢰 당도 벌집.png" className = "TrustImg"/>
                </Profile>

                <Menu>
                    <div className = "DircetMove">
                        <div className = "DirectButton">공지사항</div>
                        <div className = "DirectButton">제품 정보</div>
                        <div className = "DirectButton">댓글</div>
                        <div className = "DirectButton">정보 조회</div>
                    </div>
                </Menu>

                <ContentZone>
                    <Notice>
                        <MenuTitle>
                            <div className ='NoticeTitle'>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>공지사항</label>
                            <img className = "MoreButton" src = "/button/NoticeMoreButton.png" />
                            </div>
                            <div className = "Noticearea">
                                <h6>공지 내용 들어갈 공간</h6>
                            </div>
                            <div className = "SecondNoticearea">
                            </div>
                        </MenuTitle>
                    </Notice>

                    <img className = "SeperateLine"src = "/detailpage/SeperateLine.png"/>

                    <ItemInfomation>
                        <MenuTitle>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>제품 정보</label>
                            <div className = "InfomationArea"> 
                                <h6>제품 정보 들어갈 공간</h6>
                            </div>
                        </MenuTitle>

                    </ItemInfomation>

                    <img className = "SeperateLine"src = "/detailpage/SeperateLine.png"/>

                    <Comment>
                        <MenuTitle>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>댓글</label>
                        </MenuTitle>

                    </Comment>

                    <img className = "SeperateLine"src = "/detailpage/SeperateLine.png"/>

                    <SellerInfomation>
                        <MenuTitle>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>정보 조회</label>
                            <div className = "InfomationBox">
                                    <h6>디테일</h6>
                            </div>

                            <div className = "InfomationButton">
                                <div>
                                    <button className = "SellerView">판매업체 정보 조회</button>
                                    <button className = "LoveyView">러비 정보 조회</button>
                                </div>
                                <button className = "NumberView">운송장 번호 택배 조회</button>
                            </div>

                        </MenuTitle>

                    </SellerInfomation>

                    <NoticeImg>
                        <img src = "componentImg/SellNotice.png"/>
                    </NoticeImg>

                    <div className = "Footer">
                        <IteminfoFooterwriter/>
                    </div>
                    
                </ContentZone>
            </Write>


         </div>
   
    );

}

const Write = styled.div`
  
    font-family: Roboto;
    margin-right:auto;
    margin-left:auto;
    justify-content:center;
    display: flex;
    flex-direction: column;
    width:360px;
    
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
        font-size: 10px;
        border: 0.4px solid #C4C4C4;
        color: #686867;
        box-sizing: border-box;
        border-radius: 2px;
        float:left;
        width: 60px;
        margin-right:4px;
        
    }
    span{
        font-family: Roboto;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
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
    
    .dot{
        margin-left:35px;

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
    margin-bottom: 33px;
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
        margin-left: 12px;
        
        vertical-align:middle;
        font-family: Roboto;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        

    }
    .MaxPrice{
        margin-left: 22px;
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
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: center;

        color: #666666;

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
    margin-bottom:25px;
    img{
        vertical-align: middle;
        width:21.77px;
        height:21.13px;
    }
    label{
        vertical-align: middle;     
        
    }

    .Noticearea{
        text-align:center;
        width:328px;
        border-radius: 12px;
        border: 1px solid #FFD15B;
    }
    .MoreButton{
        margin-left:226.23px;
        vertical-align: bottom;
    }
    
   
`
const ItemInfomation = styled.div`
    
`
const Comment = styled.div`
    text-align:left;
`
const SellerInfomation = styled.div`
    text-align:left;

    .InfomationBox{
        margin-top:15px;
        text-align:center;
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