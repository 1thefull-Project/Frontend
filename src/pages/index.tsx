import styled from "@emotion/styled";
import MoreButton from "../components/Button/MoreButton";
import {AiOutlineDown } from "react-icons/ai";

export default function Home() {
    return (
        <Main>
           
            <div>              
                <More>더보기<AiOutlineDown/></More>
                <MovetoStory href ="#">
                    <img src = "/componentImg/product_img_story.png"/>
                </MovetoStory>
            </div>  
        </Main>
    );
}

const Main = styled.div`
    justify-content:center;
    display: flex;
    text-align: center;
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