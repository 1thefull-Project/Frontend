import styled from "@emotion/styled";

/*타입설정 */
interface ItemProps {
    itemid: number;
    title: string;
    state: string;
    tag: any[];
  }
/* item에서 불러온 progress level에 따라 한글로 변환하는 함수 */
  function label(num) {
    if (num === 0) {
        return "수요조사 진행"
    }
    else if (num === 1) {
        return "수요조사 마감"
    }
    else if (num === 2) {
        return "공구모집 진행"
    }
    else if (num === 3) {
        return "공구모집 마감"
    }
    else if (num === 4) {
        return "주문 진행"
    }
    else if (num === 5) {
        return "배송 시작"
    }
    else {
        return "배송 마감"
    }
}

/* 메인 index에서 아이템 정보를 출력하는 컴포넌트 */
 export default function Item({itemId, title, progress, tag}){
     
    return (
        <Box>
            {/*  DB 정보를 기반으로 데이터 출력 */}
            <a href = {`/view/${itemId}`}>
                <img src = {`/product_img_${itemId}.png`} alt = "" className = "ItemImage"/>
                <Tag>
                    <label>{"#"+tag[0]}
                                {tag[1]? "  #"+tag[1] : null}</label>
                </Tag>

                <Tittle>
                    <label>{title}</label>
                </Tittle>

                <State>
                    <Statelevel>
                        <label className = "progress">{label(progress)}</label>
                    </Statelevel>
                    <Statebar>
                        <img src = "/Progressbar/OnEllipse.png"/>
                        {progress === 0 ?   <img src = "/Progressbar/OffEllipse.png"/> : <img src = "/Progressbar/OnEllipse.png"/>}
                        
                    </Statebar>

                </State>
            </a>
        </Box>
      
    );
  }


  //css
const Box = styled.div`
    display:flex;
    float:left;
    height:178px;
    width: 153px;
    margin-right:10px;
    margin-left:10px;
    .ItemImage{
        width: 153px;
        height: 107px;
    }
    img{
        margin-right:3px;
        margin-bottom:0px;
    }
    margin-bottom:20px;
  
`;

const Tag = styled.div `
    text-align:left;
    height:12px;
    margin-bottom:3px;
    
    label{
        font-family: NotoSansKR;
        font-style: normal;
        font-weight: bold;
        font-size: 8px;
        line-height: 12px;
        color: #7BCFFF;
    }
    line-height: 11.72px
   
`;
const Tittle = styled.div `
    text-align:left;
    margin-bottom:4px;
    line-height:100%;
    width:153px;
    label{
        
        font-family: NotoSansKR;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        
    }
    color: #000000;
`;

const State = styled.div`
    display:flex;
    height:18px;
    margin-top: 3px;
    width: 130px;
    height: 18px;
    float:left;
    align-items:center;
    
    
`;
const Statelevel = styled.div`
    
    label{ 
        display:block;
        line-height:16px;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 5px;
          
    }
        
    border: 0.4px solid #C4C4C4;
    color: #686867;
    box-sizing: border-box;
    border-radius: 2px;
    float:left;
    width: 70px;
    
    
    
`
const Statebar = styled.div`
    display:block;
    line-height: 100%;
    height: 100%;
    margin-left: 6px;
    float:left
    img{

        
        vertical-align:center; 
        height: 8px;
        width: 8px;
    }
    
`;