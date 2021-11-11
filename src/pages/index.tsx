import styled from "@emotion/styled";
import MoreButton from "../components/Button/MoreButton";
import {AiOutlineDown } from "react-icons/ai";
import {Item} from '../components/Content/Item';
import Link from 'next/link';

export default function Home() {
    return (
        <Main>
            <div>
                <ItemArea>
                    <Item title = "아기 실리콘 턱받이 3색" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "아기 실리콘 턱받이 3색두줄두루둘두루둚ㄷ루두" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "아기 실리콘 턱받이 3색" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "아기 실리콘 턱받이 3색" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "아기 실리콘 턱받이 3색" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "아기 실리콘 턱받이 3색" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                </ItemArea>              
                <More>더보기<AiOutlineDown/></More>
                <MovetoStory href ="/#">
                    <img src = "/componentImg/product_img_story.png"/>
                </MovetoStory>
            </div>  
            <Fixbutton>
                <Link href="/write">
                    <a><img src = "componentImg/btn_create.png"/></a>
                </Link>
             </Fixbutton>
        </Main>
    );
}



const Main = styled.div`
    margin-right:auto;
    margin-left:auto;
    justify-content:center;
    display: flex;
    text-align: center;
    width:360px;
    .div{
        
    }

`

const ItemArea = styled.div`
    Margin-top:15px;
    text-align: center;
    padding-left: 7px;
    padding-right: 7px;
    
`

const MovetoStory = styled.a`
    display:flex;
    img{
        margin-bottom: 15px;
        margin-right: auto;
        margin-left: auto;

        width:360px;
        height: 102px;
        left: 0px;
        top: 907px;
    }
`

const More = styled.button`
    display: block;     
    margin-right: auto;
    margin-left: auto;
    width: 328px;
    height: 32px;
    left: 16px;
    top: 860px;
    margin-bottom:15px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
`

const Fixbutton = styled.div `
  position: fixed; 
  left: 80.28%;
  right: 6.39%;
  top: 59.22%;
  bottom: 36.55%;
  img {
    width: 50px;
    height: 52.2px;

  }
`;