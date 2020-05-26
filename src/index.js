import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function App() {
    const [n,setN] =useState(0)
    const onClick = ()=>{
        setN(i=>i+1)
    }
   useEffect(()=>{
       console.log('第一次渲染之后执行这一句话')
   },[])
    useEffect(()=>{
        console.log('n变化了')
    },[n])
    return (
            <div>
                n:{n}
                <button onClick={onClick}>+1</button>
            </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
