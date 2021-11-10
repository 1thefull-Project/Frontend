import styled from "@emotion/styled";

interface ItemProps {
    title: string;
    state: string;
    tag: any[];
  }

  export const Item: React.FC<ItemProps> = ({title, state, tag}) => {

    return (
        <Box>
            <a href = "#">
                <img src = "/product_img_vacuum.png"  alt={title} title={title} className = "ItemImage"/>
                <Tag>
                    <label>{tag}</label>
                </Tag>

                <Tittle>
                    <label>{title}</label>
                </Tittle>

                <State>
                    <Statelevel>
                        <label>{state}</label>
                    </Statelevel>
                    <Statebar>
                        <img src = "/Progressbar/OnEllipse.png"/>
                        <img src = "/Progressbar/OffEllipse.png"/>
                    </Statebar>

                </State>
            </a>
        </Box>
      
    );
  }

const Box = styled.div`
    float:left;
    width: 153px;
    margin-right:10px;
    margin-left:10px;
    margin-bottom: 22px;
    .ItemImage{
        width: 153px;
        height: 107px;
    }
`;

const Tag = styled.span `
    label{
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 13px;
        

        display: flex;
        align-items: center;

        color: #7BCFFF;

    }

`;
const Tittle = styled.span `

    color: #000000;

    label{
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;

        line-height: 13px;
        display: flex;
        text-align:left;
        
    }
`;

const State = styled.div`
    height:18px;
    display:flex; 
    margin-top: 3px;
    width: 130px;
    height: 18px;
    left: 16px;
    top: 435px;
    
`;
const Statelevel = styled.div`
    border: 0.4px solid #C4C4C4;
    color: #686867;
    box-sizing: border-box;
    border-radius: 2px;
    float:left;
    width: 60px;


    label{  
        width:59px;
        text-align:center;
        font-family: Assistant;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 13px;
        display: flex;
    }

    
    float:left
    
`
const Statebar = styled.div`
    height: 18px;
    margin-left: 7px;
    float:left
    align-items: left;
    
    img{
        margin-right:3px;
        height: 8px;
        width: 8px;
    }
    

`;

