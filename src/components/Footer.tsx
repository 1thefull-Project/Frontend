import { Button } from "semantic-ui-react"
import {AiOutlineArrowUp } from "react-icons/ai";
import styled from "@emotion/styled";


export default function Footer() {
    return(
      <Box>
        <div className = "wrap">
          <a href = "#"><AiOutlineArrowUp/>Top</a>
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
            
          </Infomation>
        </div>
      </Box>
    );
}


const Box = styled.div`
  background: #666666;
  padding: 10.5px 12px;
  a {
    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color : white;
    background: #666666;
    width: 100%;
    height: 42px;
    left: 0px;
    top: 877px;
    
  }
`

const Infomation = styled.div`
  font-family: Assistant;
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
  text-align: center;
  line-height: 170%;
  word-break: keep-all;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 12px;
  order: 1;
  flex-basis: 100%;
`