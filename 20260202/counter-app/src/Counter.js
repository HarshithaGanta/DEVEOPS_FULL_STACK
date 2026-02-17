import {useState} from "react";
import "./Counter.css";

function Counter(){
const[count,setCount]=useState(0);

return(
<div className="counter">
<h1>Counter App</h1>

<h2>{count}</h2>

{count===10 && <p>🎉 You reached 10!</p>}

<button className="inc" onClick={()=>setCount(count+1)}>Increment</button>

<button className="dec" onClick={()=>{
if(count>0){
setCount(count-1);
}
}}>Decrement</button>

<button className="reset" onClick={()=>setCount(0)}>Reset</button>

</div>
);
}

export default Counter;
