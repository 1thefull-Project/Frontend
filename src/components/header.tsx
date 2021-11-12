import React from "react";
import styled from "@emotion/styled";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <Box>
            <div className="wrap">
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
                        <Image src="/profile_default.png" alt="" width={24} height={24} />
                    </Link>
                </RightElements>
                
            </div>
        </Box>
    );
}

const Box = styled.header`
    background: #FFFFFF;
    width: 100%;
    height: 66px;
    left: 0px;
    top: 0px;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 0px 3px 6px rgba(0,0,0, 0.1);

    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .menu {
        margin-right: 78px;
    }

    .logo {
        margin-right: 47px;
    }
`;

const RightElements = styled.div`
    display: inline-block;

    a{
        margin-right: 7px;
    }
`;