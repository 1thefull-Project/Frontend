import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState, useEffect } from "react";
import axios, {AxiosResponse} from 'axios';
import styled from "@emotion/styled";
import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from "../components/MenuItem";

//상품 정보 불러오기
export const getServerSideProps: GetServerSideProps = async () => {
    const item = await axios.get(process.env.NEXT_PUBLIC_ALL_ITEM as string);
    return {
      props: { item: item.data }, 
    }
  }

export default function Menu({item}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    //로그인한 사용자 정보 불러오기
    const [userObject, setUserObject] = useState<any>();
    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_GET_USER as string, { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                //console.log(res.data);
                setUserObject(res.data);
            }
        })
    }, [])
    
    const clickLogin = () => {
        userObject ? location.href = '/login' : location.href = process.env.NEXT_PUBLIC_LOGOUT_GOOGLE as string }

    return (
        <>
        {userObject ?   //로그인 했을 때
        <Layout>
            {/*마이 공구비*/}
            <Section1>
                <p className="headline">마이공구비</p>
                <div className="profile-box" style={{border: '1px solid #FFD15B'}}>
                    <div className="user">
                        <img src="/profile_wonderful.png" alt="" width={44} height={44} style={{marginBottom: '13px'}} />
                        <div style={{marginLeft: '19px'}}>
                            <p className="user-name">{userObject.name}</p>
                            <div className="user-info">
                                <p>총 거래 수 {userObject.deal}</p>
                                <p>팔로워 {userObject.follower}</p>
                                <p style={{marginRight: '-2px'}}>팔로우 {userObject.following}</p>
                            </div>
                        </div>
                    </div>
                    <div className="login-button" style={{background: '#FFD15B'}}>
                        <p>마이 프로필</p>
                    </div> 
                </div>
            </Section1>
            
            {/*최근 참여한 상품*/}
            <Section2>
                <Horizontal><p className="headline">최근 참여한 상품</p> <p className="number">1건</p> <p className="more">더보기</p></Horizontal>
                <MenuItem img={`/menu_product_img_${item.itemInfo[12].itemId}.png`} tag={item.itemInfo[12].tag[0]} name={item.itemInfo[12].title}/>
            </Section2>
            <Section2>
                <Horizontal> <p className="headline">나의 진행 상품</p><p className="number">9건</p><p className="more">더보기</p></Horizontal>
                <Item>
                    <MenuItem img={`/menu_product_img_${item.itemInfo[13].itemId}.png`} tag={item.itemInfo[13].tag[0]} name={item.itemInfo[13].title}/>
                    <MenuItem img={`/menu_product_img_${item.itemInfo[14].itemId}.png`} tag={item.itemInfo[14].tag[0]} name={item.itemInfo[14].title}/>
                </Item>
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
                <p onClick={clickLogin}>로그아웃</p>
            </Section4>
        </Layout>

        :   
        //로그인 하지 않았을 때
        <Layout>
        {/*마이 공구비*/}
        <Section1>
            <p className="headline">마이공구비</p>
            <div className="profile-box" style={{border: '1px solid #E5E5E5'}}>
                <div className="user">
                    <img src="/profile_default.png" alt="" width={44} height={44} style={{marginBottom: '13px'}} />
                    <div style={{marginLeft: '19px'}}>
                        <p className="user-name">공구비</p>
                        <div className="user-info">
                            <p>총 거래 수 0</p>
                            <p>팔로워 0</p>
                            <p style={{marginRight: '-2px'}}>팔로우 0</p>
                        </div>
                    </div>
                </div>
                <Link href='/login'>
                    <div className="login-button" style={{background: '#C4C4C4'}}>
                        <p>로그인</p>
                    </div> 
                </Link>
            </div>
        </Section1>

        {/*최근 참여한 상품*/}
        <Section2>
            <Horizontal> <p className="headline2">최근 참여한 상품</p> <p className="more">더보기</p> </Horizontal>
            <Box1>
                <p>최근 참여한 상품 내역을 알 수 없어요.</p>
                <p>로그인 해주세요.</p>
            </Box1>
            <Box2 />
        </Section2>

        {/*나의 진행 상품*/}
        <Section2>
            <Horizontal> <p className="headline2">나의 진행 상품</p> <p className="more">더보기</p> </Horizontal>
            <Box1>
                <p>나의 진행 상품 내역을 알 수 없어요.</p>
                <p>로그인 해주세요.</p>
            </Box1>
            <Box2 />
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
            <p onClick={clickLogin}>로그인</p>
        </Section4>
    </Layout>
        }
        </>    
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
        margin-right: 144px;
    }

    .headline2{
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
        margin-right: 181px;
    }

    .number{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #000000;

        margin-right: 8px;
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
    justify-content: center;
    align-items: baseline;
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