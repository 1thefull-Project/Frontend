import styled from "@emotion/styled";
import Image from 'next/image';

interface FilterIcon {
    state: number;  // 비활성화: 0, 활성화: 1
    name: string;
}

export const Filter: React.FC<FilterIcon> = ({state, name}) => {
    return (
        <Fil>
            <div className="filt-img">
                <Image src={state===0 ? "/main_filter_deactive.png" : "/main_filter_active.png"} alt="" width={71} height={26}></Image>
            </div>
            <div className={state===0 ? "filt-text-de" : "filt-text" }>{name}</div>
        </Fil>
    );
}

const Fil = styled.div`
    position: relative;
    .filt-text{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: NotoSansKR;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 13px;
        color: #FFFFFF;
    }
    .filt-text-de{
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: NotoSansKR;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #686867;
    }
`;