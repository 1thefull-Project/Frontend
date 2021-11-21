import styled from "@emotion/styled";

interface ItemProps {
    itemid: number;
    title: string;
    state: string;
    tag: any[];
  }
 export default function Item({itemid, title, progress, tag}){
    return (
        <Box>
            <a href = {`/view/${itemid}`}>
            {/* `/product_img_${itemid}.png` */}
                <img src = {`/product_img_${itemid}.png`} className = "ItemImage"/>
                <Tag>
                    <label>{tag}</label>
                </Tag>

                <Tittle>
                    <label>{title}</label>
                </Tittle>

                <State>
                    <Statelevel>
                        <label>{progress === 0 ? "수요조사 중" : "공구모집중" }</label>
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
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
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
        
        font-family: Roboto;
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
        font-size: 10px;
          
    }
        
    border: 0.4px solid #C4C4C4;
    color: #686867;
    box-sizing: border-box;
    border-radius: 2px;
    float:left;
    width: 60px;
    
    
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