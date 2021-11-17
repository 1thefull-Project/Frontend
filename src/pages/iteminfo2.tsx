import styled from "@emotion/styled";
import IteminfoFooter from "../components/IteminfoFooter";

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
                        <span>손바닥 보호 실리콘 비닐봉지 손잡이 </span>
                    </TextZone>
                    <Progressbar>
                        <p>진행바 들어갈 위치</p>
                    </Progressbar>
                    <Price>
                        <p>예상 가격 들어갈 위치</p>
                    </Price>
                </ItemContent>
                <Profile>
                    <p>프로필 들어갈 위치</p>
                </Profile>

                <Menu>
                    <div>
                        <a>공지사항</a>
                        <a>제품 정보</a>
                        <a>댓글</a>
                        <a>정보 조회</a>
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
                        <IteminfoFooter/>
                    </div>
                    
                </ContentZone>
            </Write>
         </div>
   
    );

}

const Write = styled.div`
    margin-right:auto;
    margin-left:auto;
    justify-content:center;
    display: flex;
    flex-direction: column;
    width:360px;
    text-align: center;
    .SeperateLine{
        margin-bottom: 25px;
    }

    .Footer{
        width:360px;
        position:fixed; 
        bottom:0px; 
        background: rgba(255,255,255,0.95);
        
    }

`
const ItemContent = styled.div`
    img{
        width:360px;
    }
    
 
`

const TextZone = styled.div`
       label{ 
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
        font-style: normal;
        font-size: 15px;
        line-height: 18px;c
        display: flex;
        align-items: center;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
    }
    
`
const ContentZone = styled.div`
   text-align:left;
   
`
const Progressbar = styled.div`
`
const Price = styled.div`
`
const Profile = styled.div`
`
const Menu = styled.div`
    margin-bottom:26px;

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