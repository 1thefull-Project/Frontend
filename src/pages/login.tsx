import styled from "@emotion/styled";
import Image from "next/image";

export default function Login(){
    return(
            <Section1>
                <div className="wrap">
                    <Heading>공구비 로그인</Heading>
                    <p>공구비에 오신 것을 환영합니다!</p>
                    <p>공구비는 러비&#38;더비 회원님들의 공동구매를 돕는 플랫폼입니다.</p>
                    <br/>
                    <p>공구비의 도움을 받으시려면 구글 계정 로그인이 필요합니다.</p>

                    <LoginButton  onClick= {() => location.href = process.env.NEXT_PUBLIC_LOGIN_GOOGLE as string} >
                        <Image src="/login_google.png" alt="" width={31} height={30} />
                        <p>구글 계정으로 시작하기</p>
                    </LoginButton>
                    <Image src="/login_graphic.png" alt="" width={316} height={127} />
                </div>
            </Section1>
    );
}
const Section1 = styled.section`
    width:360px;
    margin-right:auto;
    margin-left:auto;
    display: flex;
    flex-direction: column;
    justify-content:left;
    text-align: left;
    .wrap{
        margin-top: 85px;
        margin-left:16px;
    }
    p{
        font-family: NotoSansKR;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 16px;
        text-align: left;   
        display: flex;
        color: #000000;
    }
`;
const Heading = styled.h4`
    font-family: NotoSansKR;
    font-style: normal;
    font-weight: Bold;
    font-size: 22px;
    line-height: 29px;
    display: flex;
    color: #686867;
    margin-bottom: 10px;
`;
const LoginButton = styled.button`
    display: flex;
    cursor : pointer;
    width: 328px;
    height: 50px;
    padding-top: 10px;
    padding-left: 60px;
    margin-top: 44px;
    margin-bottom: 71px;
    background: #FAFAFA;
    border: 1px solid rgba(104, 104, 103, 0.82);
    box-sizing: border-box;
    p{
        margin-left: 5px;
        margin-top: 4px;
        font-family: NotoSansKR;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 19px;
        color: rgba(104, 104, 103, 0.82);
    }
`;