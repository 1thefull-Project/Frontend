import { useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import styled from "@emotion/styled";
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from "../components/MenuItem";


export default function Menu() {
    const [preLogin, setpreLogin] = useState<boolean>(true);

    {/* useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_GETUSER as string).then((res: AxiosResponse) => {console.log(res.data)})
        .catch((Error)=>{console.log(Error)})
    }, []) */}

    const togglePreLogin = () => setpreLogin(preLogin => !preLogin);

    const clickLogin = () => {
        preLogin === true ? location.href = '/login': location.href = process.env.NEXT_PUBLIC_LOGOUT_GOOGLE as string };

    return (
        <Layout> {/*{preLogin === true ? : }*/}
            {/*마이 공구비*/}
            <Section1>
                <p className="headline" onClick={togglePreLogin}>마이공구비</p>
                <div className="profile-box" style={preLogin === true ? {border: '1px solid #E5E5E5'} : {border: '1px solid #FFD15B'}}>   {/*프로필 박스 색*/}
                    <div className="user">
                        <img src="/profile_default.png" alt="" width={44} height={44} style={{marginBottom: '13px'}} />
                        <div style={{marginLeft: '19px'}}>
                            <p className="user-name">{preLogin === true ? '공구비' : '사용자 이름(수정)'}</p> {/*사용자 이름*/}
                            <div className="user-info">
                                <p>총 거래 수 {preLogin === true ? '0': '1'}</p>
                                <p>팔로워 {preLogin === true ? '0': '1'}</p>
                                <p style={{marginRight: '-2px'}}>팔로우 {preLogin === true ? '0': '1'}</p> {/*사용자 정보 텍스트*/}
                            </div>
                        </div>
                    </div>
                    <Link href={preLogin === true ? '/login': '/mypage'}>
                        <div className="login-button" style={preLogin === true ? {background: '#C4C4C4'}: {background: '#FFD15B'}}>
                            <p>{preLogin === true ? '로그인': '마이페이지'}</p>
                        </div> 
                    </Link> {/*버튼 색, 텍스트, 이동 경로*/}
                </div>
            </Section1>

            {/*최근 참여한 상품*/}
            <Section2>
                <Horizontal>
                    <p className="headline">최근 참여한 상품</p> <p className="more">더보기</p>
                </Horizontal>
                {preLogin === true ? 
                <><Box1>
                    <p>최근 참여한 상품 내역을 알 수 없어요.</p>
                    <p>로그인 해주세요.</p>
                </Box1>
                <Box2 /></>
                : 
                <MenuItem img='/menu_product_img_1.png' tag='팬굿즈' name='귀멸의 칼날 탄지로 피규어'/>
                } {/*박스 전부 지우고 상품 정보로 교환(상품 정보는 컴포넌트로 추가 제작)*/}
            </Section2>

            {/*나의 진행 상품*/}
            <Section2>
                <Horizontal>
                        <p className="headline">나의 진행 상품</p> <p className="more">더보기</p>
                </Horizontal>
                {preLogin === true ? 
                <><Box1>
                    <p>나의 진행 상품 내역을 알 수 없어요.</p>
                    <p>로그인 해주세요.</p>
                </Box1>
                <Box2 /> </>
                :
                <Item>
                    <MenuItem img='/menu_product_img_3.png' tag='뷰티/미용' name='[비건]스타터 키트-수분크림'/>
                    <MenuItem img='/menu_product_img_2.png' tag='식품' name='[비건]나뚜루비건아이스크림'/>
                </Item>
                } {/*박스를 상품 정보로 교환*/}
            </Section2>

            {/*카테고리*/}
            <Section3>
                <p className="headline">카테고리</p>
                <Line /> <Image src="/category/category_list1.png" alt="" width={324} height={29}></Image>
                <Line /> <Image src="/category/category_list2.png" alt="" width={324} height={29}></Image>
                <Line /> <Image src="/category/category_list3.png" alt="" width={324} height={29}></Image>
                <Line /> <Image src="/category/category_list4.png" alt="" width={324} height={29}></Image>
                <Line /> <Image src="/category/category_list5.png" alt="" width={324} height={29}></Image>
                <Line /> <Image src="/category/category_list6.png" alt="" width={324} height={29}></Image>
            </Section3>

            {/*하단 메뉴*/}
            <Section4>
                <p>공지사항</p>
                <p>Q&#38;A</p>
                <p>공구비 스토리</p>
                <p>공구비 건의하기</p>
                <p onClick={clickLogin}>{preLogin === true ? '로그인': '로그아웃'}</p> {/*로그아웃으로 텍스트 수정*/}
            </Section4>
        </Layout>
    );
}

const Layout = styled.div`
    margin-right:auto;
    margin-left:auto;
    justify-content:center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width:360px;

    padding-top: 21px;

    .headline{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #666666;

        padding-left: 3px;
        padding-right: 3px;
    }

    .more{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        text-decoration-line: underline;

        color: #666666;
    }
`;

const Section1 = styled.div`
    padding-left: 16px;
    padding-right: 16px;

    .profile-box {
        width: 328px;
        height: 133px;

        box-sizing: border-box;
        border-radius: 12px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
    }

    .user{
        display: flex;
        align-items: center;
        justify-content:space-around;
    }

    .user-name{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;

        display: flex;
        align-items: center;
        color: #666666;
        margin-bottom: 4px;
    }

    .user-info{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        justify-content:space-around;
        color: #666666;



        p{
            margin-right: 22px;
        }
    }

    .login-button{
        width: 283px;
        height: 35px;
        border-radius: 7px;

        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        p{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            align-items: center;

            color: #FFFFFF;
        }
    }

`;


const Section2 = styled.div`
    width: 360px;
    height: 221px;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

    margin-bottom: 8px;
    padding-top: 17px;
    padding-left: 16px;
    padding-right: 16px;
`;

const Horizontal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Box1 = styled.div`
    width: 328px;
    height: 108px;
    background: #F9F9F9;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    margin-top: 8px;
    flex-direction: column;

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 8px;
        display: flex;

        color: #E3E3E3;
        
    }
`;

const Box2 = styled.div`
    width: 328px;
    height: 26px;
    background: #F9F9F9;
    display: flex;
    align-items: center;

    margin-top: 4px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
`;

const Section3 = styled.div`
    width: 360px;
    height: 313px;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

    margin-bottom: 8px;
    padding-top: 14px;
    padding-left: 16px;
    padding-right: 16px;
`;

const Line = styled.div`
    width: 360px;
    height: 0px;
    border: 0.5px solid rgba(104, 104, 103, 0.15);

    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: -16px;
    margin-right: -16px;
`;

const Section4 = styled.div`
    width: 360px;
    height: 214px;
    background: #FFFFFF;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);

    margin-bottom: 8px;
    padding-top: 14px;
    padding-left: 22px;

    p{
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #666666;

        margin-bottom: 20px;
    }

`;