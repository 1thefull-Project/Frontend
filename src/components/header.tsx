import React from "react";
import styled from "@emotion/styled";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <Box>
                <Link href ="/menu">
                    <a className="menu" > <Image src="/button/btn_hambugerMenu.png" alt="" width={24} height={24} /> </a>
                </Link>
                <Link href="/">
                    <a className="logo"><Image src="/logo/logo_imgText.png" alt="" width={124} height={35} /></a>
                    </Link>
                <RightElements>
                    <Link href="/search">
                        <a><Image src="/button/btn_search.png" alt="" width={24} height={24} /></a>
                    </Link>
                    <Link href="/login">
                        <a><Image src="/profile_default.png" alt="" width={24} height={24} /></a>
                    </Link>
                </RightElements>
        </Box>
    );
}

const Box = styled.header`
    width: 360px;
    height: 66px;
    margin-left:auto;
    margin-right:auto;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0,0,0, 0.1);

    padding-left: 16px;
    padding-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    .menu {
        margin-right: 76px;
        margin-top: 2px;
    }

    .logo {
        margin-right: 45px;
        margin-top: 2px;
    }
`;

const RightElements = styled.div`
    display: inline-block;
    margin-top: 2px;
    a{
        margin-right: 7px;
    }
`;