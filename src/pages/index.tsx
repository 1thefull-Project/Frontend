import React, { useEffect, useState, useContext } from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Category } from "../components/category";
import Image from 'next/image';
import MoreButton from "../components/Button/MoreButton";
import {AiOutlineDown } from "react-icons/ai";
import Item from '../components/Content/Item';
import Link from 'next/link';
import { arrayBuffer } from "stream/consumers";
import ItemList from "../components/Content/ItemList";
import axios, { AxiosResponse } from "axios";



const list = [
    {   
        id:1,
        itemId:1,
        title:'초강력 괴물 흡입력 청소기',
        tag: '주방/생활용품',
        progress: 0,

    },
    {
        id:2,
        itemId:2,
        title:'2',
        tag: '주방/생활용품',
        progress: 1,
    },
    {   
        id:3,
        itemId:3,
        title:'3',
        tag: '주방/생활용품',
        progress: 0,
    },
    {
        id:4,
        itemId:4,
        title:'4',
        tag: '주방/생활용품',
        progress: 1,
    },
    {
        id:5,
        itemId:5,
        title:'5',
        tag: '주방/생활용품',
        progress: 0,
    },
    {
        id:6,
        itemId:6,
        title:'6',
        tag: '주방/생활용품',
        progress: 0,
    },
    {
        id:7,
        itemId:7,
        title:'7',
        tag: '주방/생활용품',
        progress: 0,
    },
    {
        id:8,
        itemId:8,
        title:'8',
        tag: '주방/생활용품',
        progress: 0,
    },

];

interface ItemProps {

    Data: any[],
  }

export default function Home() {
 


    /* API 가져오기 */
    const API_URL = process.env.NEXT_PUBLIC_ITEM_LIST as string
    const [Data, setData] = useState([]);
    useEffect(() => {  
        axios.get("https://gonggoo-bee.herokuapp.com/item/lobby/allitem"  , { withCredentials: true }).then((res: AxiosResponse) => {
          if (res.data) {
            setData(res.data.itemInfo);
            console.log(res.data);
          }
        }) 
      }, [])
    

    
    var settings1 = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 1000,
        cssEase: 'ease',

      };

      var settings2 = {    //필터 슬라이더 세팅
        dots: false,
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 3,
        speed: 1000,
        cssEase: 'ease',
    };

    //필터 구현
    // const filters: Array<string> = ['전체보기', ...new Set(item.map((item) => item.state)), '팔로워', '인기순', '최신순'];
    // console.log(filters);       //추후 삭제

    // const [activeFil, setActiveFil] = useState(filters);
    // const[data, setData] = useState(item);

    // const activeFilter = (btn: string) => {
    //     if (btn === '전체보기') {
    //         setData(item);
    //         return;
    //     }
    //     const filteredData = item.filter((item) => item.state === btn);
    //     setData(filteredData);
    // }


    // useEffect(() => {
    //     activeFil === '전체보기'
    //     ? setData(item) : setData(item.filter((vga) => vga.state === activeFil));
    // }, [activeFil]);

    // const API_URL = "https://gonggoo-bee.herokuapp.com/item/"; 
    
    // function getData(){
    //     Axios.get(API_URL).then(res => {
    //         console.log(res);
    //     });
    // }

    // useEffect(() =>{
    //     getData();
    // }, []);

    return (
        <Main>
            {/* 카테고리 슬라이더 */}
            <Section1 className = "wrap">
                <Slider {...settings1}>
                    <div><Category img="/category/category_1.png" name="직접 제작" /> <Category img="/category/category_10.png" name="도서/음반/티켓" /></div>
                    <div><Category img="/category/category_2.png" name="아이디어/특허" /> <Category img="/category/category_11.png" name="팬 굿즈" /></div>
                    <div><Category img="/category/category_3.png" name="여성 패션" /> <Category img="/category/category_12.png" name="가구/인테리어" /></div>
                    <div><Category img="/category/category_4.png" name="남성패션" /> <Category img="/category/category_13.png" name="뷰티/미용" /> </div>
                    <div><Category img="/category/category_5.png" name="식품" /> <Category img="/category/category_14.png" name="잡화/주얼리" /></div>
                    <div><Category img="/category/category_6.png" name="주방/생활 용품" /> <Category img="/category/category_15.png" name="유아동" /></div>
                    <div><Category img="/category/category_7.png" name="스포츠/취미" /> <Category img="/category/category_16.png" name="반려동물 용품" /></div>
                    <div><Category img="/category/category_8.png" name="디지털기기" /> <Category img="/category/category_17.png" name="기타 물품" /></div>
                    <div><Category img="/category/category_9.png" name="식물" /> <Category img="/category/category_18.png" name="러비 찾아요" /></div>
                </Slider>
                <Image src="/category/main_slider.png" alt="" width={88} height={12} />
            </Section1>
            <div>
            <Filter>
                    <Slider {...settings2}>
                        {/* {activeFil.map((filt) => {
                            return (
                                <div className="filt-wrap" key="{filt}">
                                    <div className="filt-img" onClick={() => activeFilter(filt)}><Image src="/main_filter_deactive.png" alt="" width={71} height={26}></Image></div>
                                    <div className="filt-text">{filt}</div>
                                </div>
                            );
                        })}  */}
                    </Slider>
            </Filter>
                <ItemArea>
                    {Data.map((items) => (<Item 
                                                itemId = {items.itemId} 
                                                title = {items.title} 
                                                progress = {items.progress} 
                                                tag = {items.tag}
                                                key = {items.itemId}
                                                />)).slice(0,6)}


                </ItemArea>              
                <More>더보기<AiOutlineDown/></More>
                <MovetoStory href ="/#">
                    <img src = "/componentImg/product_img_story.png"/>
                </MovetoStory>
            </div>  
            <Fixbutton>
                <Link href="/write">
                    <a><img src = "componentImg/btn_create.png"/></a>
                </Link>
             </Fixbutton>
        </Main>
    );
}


const Main = styled.div`
    width: 360px;
    margin-right:auto;
    margin-left:auto;
    justify-content:center;
    display: flex;
    flex-direction: column;
    text-align: center;
    
    
`;

const Section1 = styled.section`
    margin-top: 15px;
    width:360px;
    height: 177px;
    overflow: hidden;
`;

const Filter = styled.div`
    width:360px;
    height: 33px;
    overflow: hidden;
    .filt-wrap{
        position: relative;
    }
    .filt-text{
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        color: #686867;
    }
`;

const ItemArea = styled.div`
    Margin-top:15px;
    text-align: center;
    padding-left: 7px;
    padding-right: 7px;
`;

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
`;

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
`;

const Fixbutton = styled.div `
  position: fixed; 
  left: 80.28%;
  right: 6.39%;
  top: 89.22%;
  bottom: 10.55%;
  img {
    width: 50px;
    height: 52.2px;
  }
`;