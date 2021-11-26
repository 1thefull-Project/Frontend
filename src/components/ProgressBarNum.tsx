import styled from "@emotion/styled";
import React from "react";

{/*progress바 숫자 표시*/}
export var ProgressBarNum = ({ width, percent, Num, Target }) => {

    const [value, setValue] = React.useState(0);
  
    React.useEffect(() => {
      setValue(percent * width);
    });
  
    return (
      <Bar>
          <div style = {{fontSize: "11px"}}>0</div>
          <div style={{ width: `${value-12}px` }} className="progress" />
          <div style = {{color: "#FFBB0B", fontSize: "12px",fontWeight:"400"}}>{Num}</div>
          <div style = {{marginLeft: `${width-value-18}px`, fontSize:"11px", verticalAlign:"top"}}>{Target}(명)</div>
      </Bar>
    );
  };


const Bar = styled.div`

display:flex;
height : 20px;
line-height:20px;

align-item:center;
width:100%;
vertical-align:middle;
margin-bottom: 33px;
.progress-div {
    display:flex;

    border-radius: .5rem;
}

.progress {
    
    height: 10px;
    border-radius: 1rem;
}
`