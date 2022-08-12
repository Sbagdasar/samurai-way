import React, {useState} from 'react';
type SettingUseStatePropsType = {
    //on: boolean
}
export const SettingUseState = (props:SettingUseStatePropsType) => {
    const [check, setCheck] = useState(false)

    const onStyle={
        width:"30px",
        height:"20px",
        display: "inline-block",
        padding:"10px",
        border:"1px solid #ccc",
        background:check? "green":"white",
        margin:"10px"
    }
    const offStyle={
        width:"30px",
        height:"20px",
        display: "inline-block",
        padding:"10px",
        border:"1px solid #ccc",
        background:check? "white":"red",
        margin:"10px"
    }
    const indicatorStyle={
        width:'20px',
        height:'20px',
        display: "inline-block",
        border:"1px solid #ccc",
        borderRadius:"50%",
        background:check? "green":"red",
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>setCheck(true)}>On</div>
            <div style={offStyle} onClick={()=>setCheck(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

