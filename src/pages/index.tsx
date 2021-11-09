import styled from "@emotion/styled";
import MoreButton from "../components/Button/MoreButton";
import {AiOutlineDown } from "react-icons/ai";

export default function Home() {
    return (
        <div>
            <p>Home</p>
            <div>              
                <More>더보기<AiOutlineDown/></More>
            </div>  
        </div>
    );
}
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