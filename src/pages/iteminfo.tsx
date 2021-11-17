import styled from "@emotion/styled";
import IteminfoFooter from "../components/IteminfoFooter";

interface ItemProps {
    name: String;
    image: String;
    state:String;
    tag: any[];
  }

export default function Iteminfo(item){
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
                    </Progressbar>
                    <Price>

                    </Price>
                </ItemContent>
                <Profile>

                </Profile>

                <Menu>

                </Menu>

                <ContentZone>
                    <Notice>
                        <MenuTitle>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>공지사항</label>
                            <div className = "Noticearea">
                                <h6>공지 내용 들어갈 공간</h6>
                            </div>
                            <div className = "SecondNoticearea">
                                <h6>부 공지 내용 들어갈 공간</h6>
                            </div>
                        </MenuTitle>

                    </Notice>

                    <ItemInfomation>
                        <MenuTitle>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>제품 정보</label>
                        </MenuTitle>

                    </ItemInfomation>

                    <Comment>
                        <MenuTitle>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>댓글</label>
                        </MenuTitle>

                    </Comment>

                    <SellerInfomation>
                        <MenuTitle>
                            <img src = "/componentImg/HoneyIcon.png"/>
                            <label>정보 조회</label>
                        </MenuTitle>


                    </SellerInfomation>

                    <NoticeImg>
                        <img src = "componentImg/SellNotice.png"/>
                    </NoticeImg>


                    <IteminfoFooter/>
                </ContentZone>
            </Write>
         </div>
   
    );

}
const Write = styled.div`
    width: 360px;
    margin-left:auto;
    margin-right:auto;
   
    
    text-align: center;
    
    
    
`
const ItemContent = styled.div`
    width:360px;
    
    img{
        margin-top:19px;
        display:flex;
        width:328px;
        height: 218px;
        margin-bottom:13px;
    }
`

const TextZone = styled.div`
    width:360px;
    height: 100%;
    margin-bottom:32px;
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
        line-height: 18px;
        display: flex;
        align-items: center;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
    }
    
`
const ContentZone = styled.div`
    width:360px;
    
`
const Progressbar = styled.div`
`
const Price = styled.div`
`
const Profile = styled.div`
`
const Menu = styled.div`
`
const Notice = styled.div`
    
    height:100px;
    .Noticearea{
        
        margin-left:auto;
        margin-right:auto;
        margin-top:15px;
        width: 328px;
        
        border-radius: 12px;
        border: 2px solid #FFD15B;
        margin-bottom:15px;
    }
    .SecondNoticearea{
        margin-left:auto;
        margin-right:auto;

        width:329px;
        border-radius: 10px;
        border: 2px solid gray;   
    }
`
const MenuTitle = styled.div`

    height: 21.13px;
    width: 360px;
    margin-left: auto;
    margin-right:auto;
    text-align:left;

    img{
        vertical-align: middle;
        width:21.77px;
        height:21.13px;
    }
    label{
        vertical-align: middle;     
           
    }
   
`
const ItemInfomation = styled.div`
`
const Comment = styled.div`
`
const SellerInfomation = styled.div`
`
const NoticeImg = styled.div`

    img {
        

        width:360px;
    }
`