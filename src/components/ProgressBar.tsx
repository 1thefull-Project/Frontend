import styled from "@emotion/styled";
import React from "react";


export var ProgressBar = ({ width, percent }) => {

    const [value, setValue] = React.useState(0);
  
    React.useEffect(() => {
      setValue(percent * width);
    });
  
    return (
      <Bar>
        <div className="progress-div" style={{ width: width }}>
          <div style={{ width: `${value}px` }} className="progress" />
        </div>
        
      </Bar>
    );
  };


const Bar = styled.div`
height : 20px;
line-height:20px;
vertical-align:middle;
justify-content: center;
align-item:center;
width:100%;
vertical-align:middle;
margin-top:4px;
margin-bottom:0px;
.progress-div {
    
    background-color: rgb(233, 233, 233);
    border-radius: .5rem;
}

.progress {
    background-color: #FED15E;
    height: 10px;
    border-radius: 1rem;
}
`