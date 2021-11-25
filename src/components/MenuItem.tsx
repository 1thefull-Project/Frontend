import styled from "@emotion/styled";
import Image from 'next/image';

interface MenuInter {
    img: string;
    tag: string;
    name: string;
}

export const MenuItem: React.FC<MenuInter> = ({img, tag, name}) => {
    return (
        <Layout>
            <Image src={img} alt="" width={153} height={108}/>
            <p className='tag'>#{tag}</p>
            <p className='name'>{name}</p>
        </Layout>
    );
}

const Layout = styled.div`
    width: 153px;
    height: 186px;

    display: flex;
    flex-direction: column;
    
    margin-right: 11px;

    .tag{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 10px;
        
        display: flex;
        align-items: center;
        color: #7BCFFF;

        margin-top: 6px;
    }

    .name{
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 11px;
        line-height: 8px;

        display: flex;
        align-items: center;
        color: #000000;
    }
`;