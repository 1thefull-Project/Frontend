import styled from "@emotion/styled";
import { GrShareOption } from "react-icons/gr";
import {BsHeart} from "react-icons/bs";



export default function IteminfoFooter(){
    return(
        <ItemFooter>
            <FooterContent>
                <Heart>
                    <BsHeart className = 'HeartIcon'/>
                    <label>0</label>
                </Heart>
                <Share>
                    <GrShareOption className = 'ShareIcon' />
                    <label>공유</label>
                </Share>
                
                <ResultButton>수요조사 결과</ResultButton>
                <EndButton>수요조사 마감</EndButton>
                
            </FooterContent>
                
        </ItemFooter>

    );
    
}

const ItemFooter = styled.div`
   

    font-family: Roboto;
    margin-right:auto;
    margin-left:auto;
    display:block;
    width: 360px;
    height: 60px;
    vertical-align:middle;
    margin-bottom:5px;
    label{
        text-align: center;
    }

  
`
const FooterContent = styled.div`

    padding-left:21px;
    padding-right:21px;
    padding-top:11px;
    padding-bottom:11px;
    display:flex;
    vertical-align:middle;
    
    
   
   
`

const Heart = styled.div `
    text-align:center;
    margin-right:15px;
    .HeartIcon {
        width:24px;
        height:24px;
        display:block;
    }
    label {
        font-size:12px;
        height:14px;
     
    }
    
`

const Share = styled.div`
    margin-right:16px;
    .ShareIcon{
        width:24px;
        height:24px;
        display:block;
    }

    label{
        font-size:12px;
        height:14px;
    }
`



const ResultButton = styled.button`
    border:none;
    width:116px;
    height:38px;
    background: #FFFFFF;
    color: #FFD15B;
    border-radius: 5px;
    margin-right: 8px;
    border: 1px solid #FFD15B;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;


    
`

const EndButton = styled.button`
    width:116px;
    height:38px;
    background: #FFD15B;
    border: 1px solid #FFD15B;
    color: #FFFFFF;
    border-radius: 5px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;

`
