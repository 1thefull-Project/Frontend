import styled from "@emotion/styled";
import React from "react";


interface ItemProps {
    title: string;
    state: string;
    tag: any[];
  }

  export const Item: React.FC<ItemProps> = ({title, state, tag}) => {

    return (
        <Box>
            <img src = "/product_img_baby.png"  alt={title} title={title} className = "ItemImage"/>

            {/* <Tag>
                <label></label>
            </Tag>

            <Tittle>

            </Tittle>

            <State>
                <Statelevel>

                </Statelevel>
                <Statebar>

                </Statebar>

            </State> */}

        </Box>
      
    );
  }



const Box = styled.div`
  
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
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #7BCFFF;

        border: 0.2px solid #7BCFFF;
    }

`;
const Tittle = styled.span `
    font-family: Assistant;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #000000;
`;

const State = styled.div`
`;
const Statelevel = styled.div`
`
const Statebar = styled.img`
`;

