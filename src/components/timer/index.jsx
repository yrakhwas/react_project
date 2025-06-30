import { useState } from "react";

function Timer({start})
{
    
    const [value, setValue] = useState(+start);


    const showValue=()=>{
        setValue(value + 1);
        //alert(value)
        
    }

return (
    <>
        <h3>Timer</h3>
        <p>Value : {value}</p>
        <button onClick={showValue}> +</button>
    </>
)
}


export default Timer;