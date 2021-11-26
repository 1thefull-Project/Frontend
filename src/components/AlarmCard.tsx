import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

// Heading
interface IAlarmCardProps {
  content: string | undefined;
  isLobby: boolean;
  itemId : number | undefined;
}
export const AlarmCard: React.FC<IAlarmCardProps> = ({ content, isLobby, itemId }) => {   

  return (
    //알림을 클릭하면 해당 화면으로 이동
    <Box onClick= {() => location.href = '/view/' + itemId} >
      <div style = {{marginLeft : '16px'}}>
        { isLobby ?
        <Image src="/AlarmLogoLobby.png" alt="" width={38} height={38} />
        :
        <Image src="/AlarmLogoDobby.png" alt="" width={38} height={38} />
        }
      </div>
      <Message>{content}</Message>

      <AlarmMenu>
        <Image src="/AlarmMenu.png" alt="" width={3} height={13} />
      </AlarmMenu>
    </Box>
  )
}

const Box = styled.div`
  
  width: 360px;
  height: 115px;
  background : rgba(255, 247, 230, 0.73);

  display : flex;
  flex-direction : row;
  align-items : center;
  cursor : pointer;
  
  border-radius: 0px;
  border : 1px solid #F0F0F0;
`;

const Message = styled.div`
  
  min-height: 50px;
  width: 254px;
  height : 50px;
  margin-left : 17px;
  border-radius: nullpx;
  text-align : left;
`;

const AlarmMenu = styled.div`
  margin-bottom : 24px;
  margin-left : 10.61px;
`;