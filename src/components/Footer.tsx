import { Button } from "semantic-ui-react"
import {AiOutlineArrowUp } from "react-icons/ai";
import styled from "@emotion/styled";
import logo_square from '../../public/logo/logo_square.png';

//푸터 컴포넌트 구성
export default function Footer() {
    return(
      <Box>
        <div className = "wrap">
          <a href = "#" className = "Topbutton"><AiOutlineArrowUp/>Top</a>
          <Infomation>
            <InfoName>
              <li>대표</li>
              <li>주소</li>
              <li>고객</li>
              <li>PR문의</li>
              <li>제휴문의</li>
              <li>사업자번호</li>
            </InfoName>
                    
            <InfoContent>
              <li>원더풀</li>
              <li>서울특별시 공동구 구매로 21길 9-20호</li>
              <li>09b@gonggoobee.com</li>
              <li> pr@gonggoobee.com</li>
              <li>contact@gonggoobee.com</li>
              <li>898-21-09208</li>
            </InfoContent>

            <Copyright>
              <li>copyright 09B.co.kr. All Rights Reserved.</li>
            </Copyright>
            
            <MakerButton>
              <a className = "Gobutton" href = "#">
              <img src = "/logo/logo_square.png" alt = "공구비 배경화면에 바로가기 만들기"/>
              <label>공구비</label> 배경화면에 바로가기 만들기
              </a>
   
            </MakerButton>

          </Infomation>
        </div>
      </Box>
    );
}


const Box = styled.div`
  
  width: 360px;
  margin-left:auto;
  margin-right:auto;
  


  background: #666666;
  
  padding-top: 10.5px;
  a {
    
    display:block;
    font-family: NotoSansKR;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    width: 100%;
    height: 42px;
    left: 0px;
    top: 877px;
  }
  .Topbutton{
    color : white;
  }
`

const Infomation = styled.div`

  font-family: NotoSansKR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  width: 100%;
  color: #8B8B8A;
  display: flex;
  margin-top:13px;

  
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  flex-basis: 100%;
  justify-content:center;
`

const InfoName = styled.div `
  flex-wrap: wrap;
  text-align: left;
  margin-right: 40px;
`

const InfoContent = styled.div`
  text-align: left;
`
const Copyright = styled.div `
  padding: 12px 12px px;
  margin-top: 12px;
  line-height: 170%;
  text-align: center;
  word-break: keep-all;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 12px;
  order: 1;
  flex-basis: 100%;
`

const MakerButton =styled.div`
  height: 42px;
  background: #8E8E8B;

  text-align: center;
  word-break: keep-all;
  margin-right: 0;
  margin-left: 0;
  order: 1;
  flex-basis: 100%;

  padding-top:10px;
  padding-bottom:10px;



  img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
  
    margin-right: 5px;
  }

  .Gobutton{
    
    vertical-align: middle;

    font-family: NotoSansKR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
  }

  label{
    color: #FFBB0D;
  }

`