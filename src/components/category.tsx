import styled from "@emotion/styled";
import Image from 'next/image';

interface CategoryIcon {
    img: string;
    name: string;
}

export const Category: React.FC<CategoryIcon> = ({img, name}) => {
    return (
        <Box>
            <Image src={img} alt="" width={49} height={48} />
            <p>{name}</p>
        </Box>
    )
}

const Box = styled.div`
    width: 70px;
    height: 61px;
    margin-bottom: 12px;
    p{
        font-family: NotoSansKR;
        font-style: normal;
        font-weight: 400;
        font-size: 9px;
        width: 70px;
        height: 12px;
        color: #686867;
    }
`;

