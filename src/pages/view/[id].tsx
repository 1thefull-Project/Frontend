import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Iteminfo from '../iteminfo'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const [item, setItem] = useState({});

  const tmp = [
    {   
        name: '초강력 괴물 흡입력 청소기',
        image: '/product_img_vacuum.png',
        state: "공구모집 중",
        tag: ['#주방,생활용품'],
    },
    {
        name: '과일 슬라이서',
        image: '/product_img_slicer.png',
        state: "공구모집 중",  
        tag: ['#주방,생활용품'],
    },
    {
        name: '손바닥 보호 비닐봉지 실리콘',
        image: '/product_img_handle.png',
        state: "수요조사 중",  
        tag: ['#주방,생활용품'],
    },
    {
        name: '김치 파우더',
        image: '/product_img_kimchi.png',
        state: "공구모집 중",  
        tag: ['#주방,생활용품'],
    },
    {
        name: '오징어게임 운동복 공구 진행해줄 러비 찾아요!',
        image: '/product_img_sportswear.png',
        state: "수요조사 중",  
        tag: ['#주방,생활용품'],
    },
    {
        name: '구르미 그린 조명',
        image: '/product_img_lighting.png',
        state: "공구모집 중",  
        tag: ['#주방,생활용품'],
    },
    {
        name: '아기 실리콘 턱받이 3색',
        image: '/product_img_baby.png',
        state: "공구모집 중",  
        tag: ['#주방,생활용품'],
    },
    {
        name: '반려동물 캐리어',
        image: '/product_img_carrier.png',
        state: "공구모집 중",  
        tag: ['#주방,생활용품'],
    },

];

  
  //return <Iteminfo item = {item}/>;
}

export default Post