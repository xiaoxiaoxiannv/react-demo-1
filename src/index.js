import React, {useState, useLayoutEffect, useRef, useEffect} from "react";
import ReactDOM from "react-dom";

function App() {
    console.log('App执行了')
    const count = useRef(0)
    const [n, setN] = React.useState(0);
    const onClick = () => {
        setN(n + 1);
    };
    useEffect(()=>{
        count.current +=1;
        console.log(count.current)
    });
    return (
        <div className="App">
            <div>
                <button onClick={onClick}>update n {n}</button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
