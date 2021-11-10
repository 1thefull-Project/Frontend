import styled from "@emotion/styled";
import MoreButton from "../components/Button/MoreButton";
import {AiOutlineDown } from "react-icons/ai";
import {Item} from '../components/Content/Item';

export default function Home() {
    return (
        <Main>
           
            <div>
                <ItemArea>
                    <Item title = "대충 아기용품" state = "수요조사" tag = {['#아기용품', '친환경']}/>
                </ItemArea>              
                <More>더보기<AiOutlineDown/></More>
                <MovetoStory href ="#">
                    <img src = "/componentImg/product_img_story.png"/>
                </MovetoStory>
            </div>  
            <Fixbutton>
                <a href = "#">
                    <img src = "componentImg/btn_create.png"/>
                </a>
             </Fixbutton>
        </Main>
    );
}



const Main = styled.div`
    justify-content:center;
    display: flex;
    text-align: center;
`

const ItemArea = styled.div`
    height :1000px;
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