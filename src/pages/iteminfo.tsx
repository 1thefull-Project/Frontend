import styled from "@emotion/styled";


export default function iteminfo(){
    return(
        <div>
            <ItemContent>
                <img src = "/product_img_bts.png" alt= {""}/>
                <TextZone>
                    <label>공구모집 중</label>
                    <span>손바닥 보호 실리콘 비닐봉지 손잡이 </span>
                </TextZone>
                
            </ItemContent>
        </div>
    );

}

const ItemContent = styled.div`
    width:328px;
    margin-left:auto;
    margin-right:auto;

    img{
        margin-top:19px;
        margin-left:auto;
        margin-right:auto;
        display:flex;
        width:328px;
        height: 218px;
        margin-bottom:13px;
    }

`

const TextZone = styled.div`
    width:360px;
    height: 100%;

    margin-bottom:32px;
    label{ 
        
        display:block;
        text-align:center;
        line-height:16px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        border: 0.4px solid #C4C4C4;
        color: #686867;
        box-sizing: border-box;
        border-radius: 2px;
        float:left;
        width: 60px;

        margin-right:4px;
        
    }
    span{
        font-family: Roboto;
        font-style: normal;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;

        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;

    }
    

`